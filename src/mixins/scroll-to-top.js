export default {

  methods: {

    scrollToTop() {
      document.getElementById("app").scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },

  }
}
