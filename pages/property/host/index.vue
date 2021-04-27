<template>
  <div>
    <div class="host primary-padding" v-if="!mobileWidth">
      <h1 class="host__h1">Contact host</h1>
      <figure class="host__figure">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </figure>
      <h2 class="host__h2 host__marginbottom">John Doe</h2>
      <div class="host__verified host__marginbottom">
        <span><img src="~/assets/svg/verified.svg" alt="" /></span>
        <span>Identity Verified</span>
      </div>
      <div class="host__email host__marginbottom">
        <span><p>johndoe@gmail.com</p></span>
      </div>
      <div class="host__number host__marginbottom">
        <span><p>+2348123456789</p></span>
      </div>
    </div>

    <div v-if="mobileWidth" class="hostmobile">
      <div class="hostmobile__top">
        <h1 class="hostmobile__h1">Contact host</h1>
        <span>X</span>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </figure>
      <h2 class="hostmobile__h2">John Doe</h2>
      <div class="hostmobile__verified">
        <span><img src="~/assets/svg/verified.svg" alt="" /></span>
        <span>Identity Verified</span>
      </div>
      <div class="hostmobile__email">
        <span><p>johndoe@gmail.com</p></span>
      </div>
      <div class="hostmobile__number">
        <span><p>+2348123456789</p></span>
      </div>
    </div>
  </div>
</template>

<script>
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "Host",
  mixins: [mobilecheck],
};
</script>

<style lang="scss">
.host {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.2rem;

  &__h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 5rem;
  }

  &__h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  &__verified {
    display: flex;
    align-items: center;

    & span {
      display: inline-block;
      margin-right: 1rem;
    }
  }

  &__marginbottom {
    margin-bottom: 3rem;
  }

  &__figure {
    height: 30rem;
    width: 30rem;
    border-radius: 100%;
    overflow: hidden;
    margin-bottom: 2rem;
  }
}

.hostmobile {
  line-height: 16rem;
  background: #fff;
  text-align: center;
  font-size: 7rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 300;

  display: flex;
  flex-direction: column;
  align-items: center;

  & figure {
    border-radius: 100%;
    overflow: hidden;
    height: 100rem;
    width: 100rem;
    margin-bottom: 5rem;
  }

  &__verified {
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      display: inline-block;

      &:nth-child(1) {
        height: 11rem;
        width: 12rem;
        margin-right: 1rem;
      }
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    border-top: 0.1px solid #e5e5e5;
    border-bottom: 0.1px solid #e5e5e5;
    width: 100%;
    padding: 4rem 10rem;
    margin-bottom: 16rem;
  }

  &__h1 {
    font-size: 7rem;
    font-weight: 400;
    transform: translateX(46rem);
  }

  &__h2 {
    font-weight: 400;
    font-size: 10rem;
    margin-bottom: 6rem;
  }
}
</style>