export default {
  data() {
    return {
      passwordviewable: false,
      confirmpasswordviewable: false
    };
  },
  methods: {
    togglepasswordViewable() {
      this.passwordviewable
        ? (this.passwordviewable = false)
        : (this.passwordviewable = true);
    },
    toggleconfpasswordViewable() {
      this.confirmpasswordviewable
        ? (this.confirmpasswordviewable = false)
        : (this.confirmpasswordviewable = true);
    }
  }
};