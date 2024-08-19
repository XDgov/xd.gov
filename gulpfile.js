const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


// bundle d3 code for team page US map
gulp.task('bundle-team-map-modules', function() {
    return gulp.src(
      [
        'node_modules/d3-array/dist/d3-array.min.js',
        'node_modules/d3-geo/dist/d3-geo.min.js',
        'node_modules/d3-selection/dist/d3-selection.min.js',
        'node_modules/topojson/dist/topojson.min.js'
      ],
      {base:'node_modules/'}
    )
    .pipe(uglify())
    .pipe(concat('team-map.bundle.js'))
    .pipe(gulp.dest("src/js/"))
  });

// bundle d3 code for citation graph blog post
gulp.task('bundle-citation-graph', function() {
    return gulp.src(
      [
        'node_modules/d3/build/d3.min.js',
        'node_modules/d3-selection/dist/d3-selection.min.js',
      ],
      {base:'node_modules/'}
    )
    .pipe(uglify())
    .pipe(concat('citation-graph.bundle.js'))
    .pipe(gulp.dest("src/js/"))
  });