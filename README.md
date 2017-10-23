Vue Message Helper
=====================
This package contains several helper mix-ins for vue messages.



Installation
-------------



Usage
---------
Import any of the scripts you need:

    import Validation from 'vue-message-helper/src/mixins/laravel-validation'
    import Scroller from 'vue-message-helper/src/mixins/scroll-to-top'
    import Snackbar from 'vue-message-helper/src/mixins/snackbar'
    import Status from 'vue-message-helper/src/mixins/status'

In your vue script:

    mixins: [ Snackbar, Status, Scroller, Validation ],

The mixins provide these properties:

    Scroller:
        methods:
            scrollToTop: Scroll to the top of the app element

    Snackbar:
        data:
            snackbar: object with snackbar information
                color
                icon
                text
                visible
        methods:
            setSnackbar(type, text): shows the snackbar
                type can be one of:
                    error
                    info
                    pending
                    success
                    validation
                    warning

    Status:
        data:
            status: object with status information
                type: the current status type
                text: (optional) text to show
        computed:
            loading: the status is pending
            hasError
            statusClass
            statusText
        methods:
            setErrorStatus
            setStatus

    Validation:
        methods:
            hasServerValidationErrors(response)
                Laravel validation errors exist in the response
            setServerValidationErrors(response)
                Load the local vee-validate error object with validation errors returned from the server

The Snackbar and Status mixins have properties that can be used in your vue template:

### Snackbar:

    <v-snackbar
      top
      :timeout="8000"
      :color="snackbar.color"
      v-model="snackbar.visible"
    >
      {{ snackbar.text }}
      <v-btn flat icon
        @click.native="snackbar.visible=false"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>

### Status:

    <v-alert
      icon="warning"
      color="error"
      :value="hasError"
    >
      {{ statusText }}
    </v-alert>

    <div :class="'px-3' + statusClass">
      {{ statusText }}
    </div>

The Scroller and Validation mixins just have methods, so can be called from your script:

### Scroller

    this.$validator.validateAll().then((result) => {
      if (! result)  { // Javascript validation failed
        this.setStatus('validation')
        return this.scrollToTop()
      }

### Validation
    handleErrors(errors) {
      this.setSnackbar('error', 'There was an error processing your request')
      this.setServerValidationErrors(errors)
      this.setErrorStatus(errors)

### Status and Snackbar

    postFormData() {
      this.setSnackbar('pending','Posting data to server')
      this.setStatus('pending','Posting data to server')

    handleResponse(response) {
      this.setStatus('success')
      this.setSnackbar('success', 'Your data has been sent')
