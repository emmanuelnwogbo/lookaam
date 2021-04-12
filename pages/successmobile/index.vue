<template>
  <div class="success-mobile">
    <div class="success-mobile-top">
      <figure class="success-mobile-img">
        <img src="~/assets/svg/email-icon-colored.svg" alt="" />
      </figure>
      <h2 class="success-mobile-h2">Check your Mail</h2>
      <div class="success-mobile-para">
        <p>
          Enter the email associated with your account and we will send an email
          with instructions to reset your password
        </p>
      </div>
    </div>
    <div class="success-mobile-bottom">
      <div class="success-mobile-bottomarea">
        <span class="">Did not receive the email? check your spam filter</span>
      </div>
      <div class="success-mobile-bottomarea">
        <span>or</span>
        <span class="blue">try another email address</span>
      </div>
    </div>
  </div>
</template>

<script>
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "SuccessMobile",
  mixins: [mobilecheck],
};
</script>

<style lang="scss">
.success-mobile {
  background: $color-background;
  font-weight: 300;
  padding: 6rem 7rem;
  margin-top: 51rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 205rem;
  align-items: center;
  font-size: 6.5rem;
  text-align: center;

  &-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &-h2 {
    font-size: 7.5rem;
    font-weight: 400;
    margin: 10rem 0;
  }

  &-img {
    height: 24rem;
    width: 36rem;
    margin-top: 21rem;
  }

  &-bottomarea {
    & span {
      &.blue {
        color: $color-primary;
      }
    }
  }
}
</style>