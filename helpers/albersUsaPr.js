const d3 = require('d3');

// ref: https://gist.github.com/HarryStevens/0e440b73fbd88df7c6538417481c9065
const geoAlbersUsaPr = function() {
    const epsilon = 1e-6;

    const lower48 = d3.geoAlbers();

    // EPSG:3338
    const alaska = d3.geoConicEqualArea()
        .rotate([154, 0])
        .center([-2, 58.5])
        .parallels([55, 65]);

    // ESRI:102007
    const hawaii = d3.geoConicEqualArea()
        .rotate([157, 0])
        .center([-3, 19.9])
        .parallels([8, 18]);

    // XXX? You should check that this is a standard PR projection!
    const puertoRico = d3.geoConicEqualArea()
        .rotate([66, 0])
        .center([0, 25])
        .parallels([8, 18]);

    let point,
        pointStream = {point: function(x, y) { point = [x, y]; }},
        lower48Point,
        alaskaPoint,
        hawaiiPoint,
        puertoRicoPoint;

    function albersUsa(coordinates) {
      const x = coordinates[0],
            y = coordinates[1];
      point = null;

      (lower48Point(x, y), point)
          || (alaskaPoint(x, y), point)
          || (hawaiiPoint(x, y), point)
          || (puertoRicoPoint(x, y), point);
      return point;
    }

    albersUsa.invert = function(coordinates) {
      const k = lower48.scale(),
          t = lower48.translate(),
          x = (coordinates[0] - t[0]) / k,
          y = (coordinates[1] - t[1]) / k;

      return (y >= .120 && y < .234 && x >= -.425 && x < -.214 ? alaska
          : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii
          : y >= .204 && y < .234 && x >= .320 && x < .380 ? puertoRico
          : lower48).invert(coordinates);
    };

    // A naïve multi-projection stream.
    // The projections must have mutually exclusive clip regions on the sphere,
    // as this will avoid emitting interleaving lines and polygons.
    albersUsa.stream = function(stream) {
      const lower48Stream = lower48.stream(stream),
          alaskaStream = alaska.stream(stream),
          hawaiiStream = hawaii.stream(stream),
          puertoRicoStream = puertoRico.stream(stream);

      return {
        point: function(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
          puertoRicoStream.point(x, y);
        },
        sphere: function() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
          puertoRicoStream.sphere();
        },
        lineStart: function() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
          puertoRicoStream.lineStart();
        },
        lineEnd: function() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
          puertoRicoStream.lineEnd();
        },
        polygonStart: function() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
          puertoRicoStream.polygonStart();
        },
        polygonEnd: function() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
          puertoRicoStream.polygonEnd();
        }
      };
    };

    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      puertoRico.precision(_);

      return albersUsa;
    };

    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      puertoRico.scale(_);

      return albersUsa.translate(lower48.translate());
    };

    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      const k = lower48.scale(),
            x = +_[0],
            y = +_[1];

      lower48Point = lower48
          .translate(_)
          .clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]])
          .stream(pointStream).point;

      alaskaPoint = alaska
          .translate([x - .307 * k, y + .201 * k])
          .clipExtent([[x - .425 * k + epsilon, y + .120 * k + epsilon], [x - .214 * k - epsilon, y + .234 * k - epsilon]])
          .stream(pointStream).point;

      hawaiiPoint = hawaii
          .translate([x - .205 * k, y + .212 * k])
          .clipExtent([[x - .214 * k + epsilon, y + .166 * k + epsilon], [x - .115 * k - epsilon, y + .234 * k - epsilon]])
          .stream(pointStream).point;

      // TODO: determine why PR is not rendering (path is empty in DOM)
      puertoRicoPoint = puertoRico
          .translate([x + .350 * k, y + .224 * k])
          .clipExtent([[x + .320 * k, y + .204 * k], [x + .380 * k, y + .234 * k]])
          .stream(pointStream).point;

      return albersUsa;
    };

    return albersUsa.scale(1070);
  }

module.exports = geoAlbersUsaPr;