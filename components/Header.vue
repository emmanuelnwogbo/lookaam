<template>
  <div class="header">
    <div class="header__logo">
      <Logo />
    </div>
    <div class="header__search">
      <span>
        <SearchIcon />
      </span>
      <span>
        <input type="text" placeholder="Search for a location" />
      </span>
    </div>
    <div class="header__btns">
      <span>
        <button class="btn btn-transparent">Become a Host</button>
      </span>
      <span>
        <button class="btn btn-colored btn-landing">Login</button>
      </span>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import SearchIcon from "@/components/SearchIcon";

export default {
  name: "Header",
  components: {
    Logo,
    SearchIcon,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1.8rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: $color-background;
  z-index: 2;
  transition: all .3s ease;

  &__search {
    background: $color-primary-fade;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;

    & input {
      border: none;
      outline: none;
      padding: 1.5rem 2rem;
      background: transparent;
      width: 82rem;
      font-size: 1.5rem;

      &::placeholder {
        color: $color-black;
        font-weight: 300;
      }
    }
  }

  &__btns {
    & button {
      padding: 1.1rem;
      font-size: 1.4rem;

      &.btn-colored {
        width: 11rem;
        margin-left: 2rem;
      }
    }
  }
}
</style>