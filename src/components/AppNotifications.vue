<template>
  <div>
    <div v-for="(message, type) in messages" :key="type">
      <div v-for="(item, index) in message" :key="index">
        <app-notification
          :message="item"
          :type="type"
        ></app-notification>
      </div>
    </div>

  </div>
</template>

<script>
export default {

  props: {
    messages: {
      required: true
    }
  },

}
</script>
