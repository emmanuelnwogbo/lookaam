<template>
  <div class="resetpassword form-container">
    <div class="form" v-if="!success">
      <h1 class="form-h1">Reset Password</h1>
      <div class="form-description-reset">
        <p>
          Enter the email associated with your account and we will send an email
          with instructions to reset your password
        </p>
      </div>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Email</label>
        </span>
        <span class="form-input-area">
          <input type="text" placeholder="Email" />
        </span>
      </div>

      <div class="form-btns">
        <span class="form-btn form-btn-blue">
          <button>Send Instructions</button>
        </span>
      </div>
    </div>

    <div class="form form-success" v-if="success">
      <div class="form-success-top">
        <figure class="form-success-img">
          <img src="~/assets/svg/email-icon-colored.svg" alt="" />
        </figure>
        <h1 class="form-success-h1">Check your Mail</h1>
        <div class="form-success-para">
          <p>
            Enter the email associated with your account and we will send an
            email with instructions to reset your password
          </p>
        </div>
      </div>

      <div class="form-success-bottom">
        <div class="form-success-para">
          <p>Did not receive your email? Check your spam filter</p>
        </div>
        <div class="form-success-para">
          <span class="or">
            <p>or</p>
          </span>
          <span class="colored">
            <p>try another email address</p>
          </span>
        </div>
      </div>
    </div>

    <div class="form-right">
      <div class="form-art">
        <img src="~/assets/svg/undraw_chilling_8tii.svg" alt="" />
      </div>
      <div class="form-bottomhead">
        <h1 class="form-h1">Reset your password</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      success: false,
    };
  },
};
</script>

<style lang="scss">
.resetpassword {
  padding-top: 16rem;
}
</style>