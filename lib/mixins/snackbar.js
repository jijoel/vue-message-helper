'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      snackbar: {
        color: null,
        icon: null,
        text: null,
        visible: false
      }
    };
  },


  methods: {
    setSnackbar: function setSnackbar(type, text) {
      if (!isValid(type)) return;

      this.snackbar = {
        color: getColor(type),
        icon: getIcon(type),
        text: text,
        visible: true
      };
    }
  }

};


function isValid(type) {
  return ['error', 'info', 'pending', 'success', 'validation', 'warning'].includes(type);
}

function getColor(type) {
  return {
    error: 'error',
    info: 'info',
    pending: 'info',
    success: 'success',
    validation: 'error',
    warning: 'warning'
  }[type];
}

function getIcon(type) {
  return {
    error: 'warning',
    info: 'info',
    pending: 'info',
    success: 'done',
    validation: 'warning',
    warning: 'warning'
  }[type];
}