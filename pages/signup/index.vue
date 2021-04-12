<template>
  <div>
    <div class="signup form-container" v-if="!mobileWidth">
      <div class="form" v-if="!success">
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
                <img src="~/assets/svg/alreadyhaveanaccount.svg" alt="" />
              </span>
              <button>Sign in instead</button>
            </span>
          </div>
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
              We have sent a verification email with an instruction to verify
              your email
            </p>
          </div>
        </div>

        <div class="form-success-bottom">
          <div class="form-success-para">
            <p>Did not receive your email? Check your spam filter</p>
          </div>
        </div>
      </div>

      <div class="form-right">
        <div class="form-art">
          <img src="~/assets/svg/undraw_well_done_i2wr.svg" alt="" />
        </div>
        <div class="form-bottomhead">
          <h1 class="form-h1">Sign up for free and see places</h1>
        </div>
      </div>
    </div>

    <div class="mobile-auth" v-if="mobileWidth">
      <h2 class="mobile-auth-header">Create your account</h2>
      <div class="mobile-auth-inputs">
        <div class="mobile-auth-input">
          <label for="">Email</label>
          <span class="input">
            <input type="email" />
          </span>
        </div>
        <div class="mobile-auth-input">
          <label for="">Full Name</label>
          <span class="input">
            <input type="email" />
          </span>
        </div>
        <div class="mobile-auth-input">
          <label for="">Password</label>
          <span class="input">
            <input type="password" />
          </span>
          <span class="instruction">
            <p>Must be at least 8 characters</p>
          </span>
        </div>
        <div class="mobile-auth-input">
          <label for="">Confirm Password</label>
          <span class="input">
            <input type="password" />
          </span>
          <span class="instruction">
            <p>Must be equal to password</p>
          </span>
        </div>
        <div class="mobile-auth-bottom">
          <button class="blue">Create your account</button>
          <div class="mobile-auth-or"><span>or</span></div>
          <button class="transparent">Sign in using Google</button>
          <div class="mobile-auth-opt">
            <span>Already have an account?</span>
            <span>Sign in instead</span>
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
  name: "Signup",
  data() {
    return {
      success: false,
    };
  },
  mixins: [form_mixin, mobilecheck],
};
</script>

<style lang="scss">
.signup {
}

.form-success {
  padding-top: 7rem;
  height: 50rem;
}
</style>