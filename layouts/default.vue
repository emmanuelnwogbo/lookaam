<template>
  <div>
    <div>
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
</style>
