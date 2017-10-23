'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  methods: {
    hasServerValidationErrors: function hasServerValidationErrors(response) {
      return response && response.response && response.response.status && response.response.status == 422;
    },
    setServerValidationErrors: function setServerValidationErrors(response) {
      var _this = this;

      if (!this.hasServerValidationErrors(response)) return;

      this.errors.clear();

      var invalid = response.response.data.errors;
      return Object.keys(invalid).map(function (field) {
        _this.errors.add(field, invalid[field].join(), 'validation');
      });
    }
  }
};