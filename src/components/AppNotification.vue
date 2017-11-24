<template>
  <v-alert
    :color="display[type].color"
    :icon="display[type].icon"
    v-model="visible"
    dismissible
  >
    <v-card-actions class="py-0">
      {{ message.text }}
      <v-spacer></v-spacer>
      <v-btn icon
        v-if="message.detail"
        @click.native="expanded = !expanded"
      >
        <v-icon class="grey--text text--lighten-3">
          {{ expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
        </v-icon>
      </v-btn>
    </v-card-actions>

    <v-card-actions v-if="expanded">
      {{ message.detail }}
    </v-card-actions>
  </v-alert>

</template>

<script>
export default {

  props: {
    message: {
      required: true,
      type: Object,
    },
    type: {
      required: true,
      type: String,
    }
  },

  data() {
    return {
      expanded: false,
      visible: true,
      display: {
        success: { color: 'success', icon: 'check_circle'},
        info: { color: 'info', icon: 'info'},
        warnings: { color: 'warning', icon: 'priority_high'},
        errors: { color: 'error', icon: 'warning'},
      },
    }
  },

}
</script>
