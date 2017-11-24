import Vue from 'vue'

[
    'AppNotification',
    'AppNotifications',
].map((part) => {
    Vue.component(part, require('vue-message-helpers/src/components/'+part+'.vue'))
})


