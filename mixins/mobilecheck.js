export default {
  data() {
    return {
      mobileWidth: false
    };
  },
  mounted() {
    window.matchMedia("(max-width: 1024px)").matches
      ? (this.mobileWidth = true)
      : (this.mobileWidth = false);
  }
};
