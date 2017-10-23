export default {

  data() {
    return {
      status: {
        type: null,
        text: null,
      },
    }
  },

  computed: {
    loading() {
      return this.status.type == 'pending'
    },
    hasError() {
      return this.errors.any()
        || (this.status.type == 'error')
    },
    statusText() {
      if (this.errors.any())
        return 'Some errors were found. Please check the form and fix fields marked in red.'

      return this.status.text
    },
    statusClass() {
      if (this.errors.any())
        return ' red--text '

      if (this.status.type == 'error')
        return ' red--text '
    }
  },

  methods: {

    // Set the error status, based on the type of message received
    setErrorStatus(errors) {

      if (errors.response && errors.response.status == 422)
        return this.setStatus('validation')

      if (errors.response && errors.response.statusText)
        return this.setStatus('error', errors.response.statusText)

      if (errors.response && errors.response.data && errors.response.data.message)
        return this.setStatus('error', errors.response.data.message)

      if (errors.response)
        return this.setStatus('error', errors.response)

      if (errors.message)
        return this.setStatus('error', errors.message)

      return this.setStatus('error', errors)
    },

    setStatus(type, text=null) {
      this.status = {
        type: type,
        text: text,
      }
    },

  },

}
