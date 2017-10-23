export default {

  methods: {
    hasServerValidationErrors(response) {
      return response
        && response.response
        && response.response.status
        && response.response.status == 422
    },

    setServerValidationErrors(response) {

      if (! this.hasServerValidationErrors(response) )
        return

      this.errors.clear()

      const invalid = response.response.data.errors
      return Object.keys(invalid).map((field) => {
        this.errors.add(field, invalid[field].join(), 'validation')
      })
    }

  }
}

