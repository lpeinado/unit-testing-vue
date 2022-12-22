<template>
  <div>
    <div class="burro">BURRO {{ message }}</div>

    <button v-show="loggedIn" @click="showThing = !showThing">
      {{ message }}
    </button>
    <span v-show="showThing" class="thing">Thing</span>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: String, default: "Logged In" },
  },
  data() {
    return {
      loggedIn: false,
      showThing: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
