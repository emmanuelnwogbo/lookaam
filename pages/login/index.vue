<template>
  <div>
    <div class="login form-container" v-if="!mobileWidth">
      <div class="form">
        <h1 class="form-h1">Welcome back</h1>
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
        <div class="form-forgot"><p>forgot password?</p></div>
        <div class="form-btns">
          <span class="form-btn form-btn-blue">
            <button>Log into your account</button>
          </span>
          <span class="form-or"><p>OR</p></span>
          <span class="form-btn form-btn-transparent">
            <button>Log into with Google</button>
          </span>
          <span class="form-or"><p>OR</p></span>
          <span class="form-btn form-btn-borderless">
            <button>Create an account instead</button>
          </span>
        </div>
      </div>

      <div class="form-right">
        <div class="form-art">
          <img src="~/assets/svg/undraw_well_done_i2wr.svg" alt="" />
        </div>
        <div class="form-bottomhead">
          <h1 class="form-h1">Welcome back</h1>
        </div>
      </div>
    </div>

    <div class="mobile-auth" v-if="mobileWidth">
      <h2 class="mobile-auth-header">Welcome back</h2>
      <div class="mobile-auth-inputs">
        <div class="mobile-auth-input">
          <label for="">Email</label>
          <span class="input">
            <input type="email" />
          </span>
        </div>
        <div class="mobile-auth-input">
          <label for="">Password</label>
          <span class="input">
            <input type="password" />
          </span>
          <span class="instruction instruction-blue">
            <p>forgot password?</p>
          </span>
        </div>
        <div class="mobile-auth-bottom">
          <button class="blue">Log into your account</button>
          <div class="mobile-auth-or"><span>or</span></div>
          <button class="transparent">Sign in using Google</button>
          <div class="mobile-auth-opt">
            <span class="or">or</span>
            <span>Create an account instead</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import form_mixin from "@/mixins/form";
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "Login",
  mixins: [form_mixin, mobilecheck],
};
</script>

<style lang="scss">
.login {
}
</style>