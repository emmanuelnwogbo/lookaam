<template>
  <div class="sidenav">
    <div class="sidenav mobile-sidemenu" id="menu">
      <div class="sidenav__top">
        <figure class="sidenav__logo">
          <img src="~/assets/svg/logo.svg" alt="" />
        </figure>
        <div class="sidenav__x" @click="toggleSidenav">
          <img src="~/assets/svg/close.svg" alt="" />
        </div>
      </div>
      <div class="sidenav__mid">
        <figure>
          <img src="~/assets/imgs/profilemob.png" alt="" />
        </figure>
        <div>
          <p>Hi, Jane Doe</p>
        </div>
      </div>

      <div class="sidenav__items">
        <div class="sidenav__itemstop">
          <div class="sidenav__item">
            <span>My Profile</span>
          </div>
          <div class="sidenav__item">
            <span>Manage my Places</span>
          </div>
          <div class="sidenav__item">
            <span>Host a Place</span>
          </div>
          <div class="sidenav__item">
            <span>Saved places</span>
          </div>
          <div class="sidenav__item">
            <span>Sign out</span>
          </div>
        </div>
        <div class="sidenav__itemsbottom">
          <div class="sidenav__item"><span>About us</span></div>
          <div class="sidenav__item"><span>Explore places</span></div>
          <div class="sidenav__item"><span>Contact us</span></div>
        </div>
      </div>

      <div class="sidenav__footer">
        <span>
          <img src="~/assets/svg/instagram.svg" alt="" />
        </span>
        <span>
          <img src="~/assets/svg/facebook.svg" alt="" />
        </span>
        <span>
          <img src="~/assets/svg/twitter.svg" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
  props: {
    toggleSidenav: { type: Function },
  },
};
</script>

<style lang="scss">
.sidenav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: #fff;

  z-index: 201;
}

.mobile-sidemenu {
  //z-index: 20 !important;
  background: #fff;
  transition: all 0.2s ease-out;
}

.sidenav {
  padding: 9rem;
  overflow: scroll;

  &__logo {
    width: 40rem;
    height: 7rem;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 9rem;
    text-transform: uppercase;
  }

  &__mid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.4rem;
    margin-top: 13rem;

    & figure {
      width: 20rem;
      height: 20rem;
    }
  }

  &__items {
    line-height: 16rem;
  }

  &__itemstop {
    margin-top: 9rem;
  }

  &__itemsbottom {
    margin-top: 20rem;
  }

  &__x {
    height: 6rem;
    width: 6rem;
  }

  &__item {
    font-size: 7rem;
  }

  &__footer {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10rem 9rem 10rem 0rem;

    & span {
      display: inline-block;
      margin-left: 7rem;
    }

    & img {
      height: 8rem;
      width: 8rem;
    }
  }
}
</style>