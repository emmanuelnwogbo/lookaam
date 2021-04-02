<template>
  <div class="signup form-container">
    <div class="form">
      <h1 class="form-h1">Create Your Account</h1>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Email</label>
        </span>
        <span class="form-input-area">
          <input type="text" placeholder="Email" />
        </span>
      </div>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Fullname</label>
        </span>
        <span class="form-input-area">
          <input type="text" placeholder="Fullname" />
        </span>
      </div>
      <div class="form-input">
        <span class="form-input-label">
          <label for="">Password</label>
        </span>
        <span class="form-input-area">
          <input
            :type="passwordviewable ? 'text' : 'password'"
            placeholder="Password"
          />
          <span class="form-input-eyee" @click="togglepasswordViewable"
            ><span class="form-input-eye"
              ><img src="~/assets/svg/eye.svg" alt="" /></span
          ></span>
        </span>
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
          <span class="form-input-eyee" @click="toggleconfpasswordViewable"
            ><span class="form-input-eye"
              ><img src="~/assets/svg/eye.svg" alt="" /></span
          ></span>
        </span>
      </div>
      <div class="form-forgot"><p>forgot password?</p></div>
      <div class="form-btns">
        <span class="form-btn form-btn-blue">
          <button>Log into your account</button>
        </span>
        <span class="form-or"><p>OR</p></span>
        <span class="form-btn form-btn-transparent">
          <button>Log into with Google</button>
        </span>
        <div class="form-havaccount">
          <span class="form-btn form-btn-borderless">
          <span class="form-or form-haveaccountimg">
            <img src="~/assets/svg/alreadyhaveanaccount.svg" alt="">
          </span>
            <button>Sign in instead</button>
          </span>
        </div>
      </div>
    </div>

    <div class="form-art"></div>
  </div>
</template>

<script>
import form_mixin from "@/mixins/form";

export default {
  name: "Signup",
  mixins: [form_mixin],
};
</script>

<style lang="scss">
.signup {
}
</style>