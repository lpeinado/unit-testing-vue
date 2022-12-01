<template>
  <div>
    <button v-show="loggedIn">{{ message }}</button>
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
