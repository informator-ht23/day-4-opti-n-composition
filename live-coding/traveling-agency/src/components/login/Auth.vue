<script>
const dummyAccount = { username: 'Bob', password: '123' };

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLoginSubmit() {
      if (
        this.username == dummyAccount.username &&
        this.password == dummyAccount.password
      ) {
        sessionStorage.setItem('authenticated', true);
      } else {
        sessionStorage.setItem('authenticated', false);
      }
      this.$router.push('secret');
    },
  },
};
</script>

<template>
  <form>
    <div>
      <label>Username</label>
      <input v-model="username" type="text" />
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" type="password" />
    </div>

    <button @click.prevent="handleLoginSubmit">Login</button>
  </form>
</template>
