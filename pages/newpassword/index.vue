<template>
  <div class="newpassword form-container">
    <div class="form" v-if="!success">
      <h1 class="form-h1">Create a new password</h1>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Password</label>
        </span>
        <span class="form-input-area">
          <input
            :type="passwordviewable ? 'text' : 'password'"
            placeholder="Password"
          />
        </span>
        <div class="form-instruction">
          <p>Must be at least 8 characters</p>
        </div>
      </div>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Confirm Password</label>
        </span>
        <span class="form-input-area">
          <input
            :type="confirmpasswordviewable ? 'text' : 'password'"
            placeholder="Confirm Password"
          />
        </span>
        <div class="form-instruction">
          <p>Both password must match</p>
        </div>
      </div>
      <div class="form-btns">
        <span class="form-btn form-btn-blue">
          <button>Send Instructions</button>
        </span>
      </div>
    </div>

    <div class="form-right">
      <div class="form-art">
        <img src="~/assets/svg/undraw_final_reset_gi2d.svg" alt="" />
      </div>
      <div class="form-bottomhead">
        <h1 class="form-h1">Reset password</h1>
      </div>
    </div>
  </div>
</template>

<script>
import form_mixin from "@/mixins/form";

export default {
  name: "NewPassword",
  data() {
    return {
      success: false,
    };
  },
  mixins: [form_mixin],
};
</script>

<style lang="scss">
.newpassword {
  padding-top: 16rem;
}
</style>