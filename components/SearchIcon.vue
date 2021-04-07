<template>
  <div>
    <span class="searchicon" v-if="!mobileWidth">
      <img src="~/assets/svg/search.svg" alt="" />
    </span>
    <span class="searchicon mobile" v-if="mobileWidth">
      <img src="~/assets/svg/search.svg" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileWidth: false,
    };
  },
  mounted() {
    window.matchMedia("(max-width: 1024px)").matches
      ? (this.mobileWidth = true)
      : (this.mobileWidth = false);
  },
};
</script>

<style lang="scss">
.searchicon {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  backface-visibility: hidden;

  &.mobile {
    height: 6.5rem;
    width: 6.5rem;
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
}
</style>