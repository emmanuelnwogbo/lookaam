<template>
  <div>
    <div class="sidenav mobile-sidemenu" id="menu">
      <div class="sidenav__top">
        <figure class="sidenav__logo">
          <img src="~/assets/svg/logo.svg" alt="" />
        </figure>
        <div class="sidenav__x">
          <span>X</span>
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
    <div id="panel">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  mounted() {
    const val = window.screen.availWidth * 0.0411;
    document.getElementsByTagName("html")[0].style.fontSize = val + "%";

    import("slideout").then((result) => {
      const Slideout = result.default;
      console.log(Slideout);

      var slideout = new Slideout({
        panel: document.getElementById("panel"),
        menu: document.getElementById("menu"),
        padding: 290,
        tolerance: 70,
      });
    });
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is
  /*font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

  @include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }*/
}

body {
  box-sizing: border-box;
  min-height: 100vh;
  background: $color-background;
  color: $color-black;
  font-family: "Roboto", sans-serif;

  overflow-x: hidden;

  @include respond(tab-port) {
    padding: 0;
  }
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

::selection {
  background-color: $color-primary;
}

.slideout-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  //width: 256px;
  width: 137rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: none;
}

.slideout-panel {
  position: relative;
  z-index: 1;
  will-change: auto;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
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

  &__item {
    font-size: 7rem;
  }

  &__footer {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10rem 0;

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
