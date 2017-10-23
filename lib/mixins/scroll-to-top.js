'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  methods: {
    scrollToTop: function scrollToTop() {
      document.getElementById("app").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};