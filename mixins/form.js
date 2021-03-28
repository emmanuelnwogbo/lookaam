export default {
  data() {
    return {
      passwordviewable: false
    };
    },
    methods: {
        togglepasswordViewable() {
            this.passwordviewable
              ? (this.passwordviewable = false)
              : this.passwordviewable = true
        }
    }
};