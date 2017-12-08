navigation = {
  init: function(){
    navigation.bindMenuButton();
    navigation.bindOverlay();
  },

  bindMenuButton: function(){
    var menuBtn = document.getElementById("mobile-menu-btn");

    menuBtn.addEventListener("click", function(event) {
      navigation.openMenu(event);
    });
  },

  bindOverlay: function(){
    var overlay = document.getElementById("overlay");

    overlay.addEventListener("click", function(event) {
      event.preventDefault();
      navigation.closeOverlay();
      navigation.closeMenu();
    });
  },

  closeMenu: function() {
    var nav = document.getElementById("site-navigation"),
        className = "open";

    if (nav.classList) {
      nav.classList.remove(className);
    } else {
      nav.className = nav.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },

  closeOverlay: function(e) {
    var overlay = document.getElementById("overlay"),
        className = "active";
    
    if (overlay.classList) {
      overlay.classList.remove(className);
    } else {
      overlay.className = overlay.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },

  openMenu: function(e) {
    e.preventDefault();
    var nav = document.getElementById("site-navigation"),
        className = "open";

    navigation.openOverlay();

    if (nav.classList) {
      nav.classList.add(className);
    } else {
      nav.className += ' ' + className;
    }
  },

  openOverlay: function() {
    var overlay = document.getElementById("overlay"),
        className = "active";

    if (overlay.classList) {
      overlay.classList.add(className);
    } else {
      overlay.className += ' ' + className;
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  navigation.init();
});

window.addEventListener('resize', function(){
  console.log("Resize Event Listener");
  if (window.outerWidth < 760) {
    console.log("Doing Something");
    navigation.closeOverlay();
  }
}, true);