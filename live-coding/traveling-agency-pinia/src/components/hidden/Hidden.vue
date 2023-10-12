<script>

export default {
  data() {
    return {
      authenticated: false
    }
  },
  beforeMount: function() {
    let authenticated = sessionStorage.getItem("authenticated");
    this.authenticated = JSON.parse(authenticated);
  }
}
</script>

<template>

  <div v-if="authenticated">
    A cat is a cat and not a dog because a dog is not a cat.
  </div>

  <div v-else>
    Illuminati error.
  </div>
</template>