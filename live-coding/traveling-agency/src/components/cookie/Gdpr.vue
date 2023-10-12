<script>

export default {
  data() {
    return {
      consent: true
    }
  },
  methods: {
    handleConsentClick() {
      sessionStorage.setItem("consent", true);
      this.consent = true;
    }
  },
  beforeMount: function () {
    let consent = sessionStorage.getItem("consent");
    this.consent = JSON.parse(consent);
  }
}

</script>

<template>
  <div v-show="!consent" class="modal-filter">
    <div class="cookie-modal">
      <p>
        We are using baked cookies to store wonderful ingredients about your usage on our website. The idea is to create the perfect recipe specially tailored for you. Do you consent to us saving information about how you use our website?
      </p>
      <button @click="handleConsentClick">I do concent</button>
    </div>
  </div>
</template>

<style>
  .cookie-modal {
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 0;
    background-color: white;
  }

  .cookie-modal p {
    padding: .5em;
  }

  .modal-filter {
    background-color: rgba(128, 128, 128, 0.5);
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .cookie-modal button {
    width: 100%;
    padding: .3em;
    margin-top: .5em;
    font-size: 1.05em;
    border: none;
    border-top: 1px solid black;
  }
</style>