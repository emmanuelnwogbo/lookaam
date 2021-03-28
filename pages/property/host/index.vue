<template>
  <div class="host primary-padding">
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
</template>

<script>
export default {
  name: "Host",
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
</style>