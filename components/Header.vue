<template>
  <div>
    <div class="header" v-if="!mobileWidth">
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

    <div class="header mobile" v-if="mobileWidth">
      <div class="header__mobiletop header__mobilearea">
        <figure>
          <img src="~/assets/svg/logo.svg" alt="" />
        </figure>
        <figure>
          <img src="~/assets/svg/menuburger.svg" alt="" />
        </figure>
      </div>
      <div class="header__mobilebottom header__mobilearea">
        <div class="header__search mobile">
          <span>
            <SearchIcon />
          </span>
          <span>
            <input
              class="mobile"
              type="text"
              placeholder="Search for a location"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Logo from "@/components/Logo";
import SearchIcon from "@/components/SearchIcon";
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "Header",
  data() {
    return {};
  },
  components: {
    Logo,
    SearchIcon,
  },
  computed: {},
  mixins: [mobilecheck],
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1.8rem 6rem 1.8rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #fff;
  transition: all 0.3s ease;
  z-index: 200;

  &__mobilearea {
    width: 100%;

    & figure {
      &:nth-child(1) {
        width: 43rem;
        height: 7rem;
      }

      &:nth-child(2) {
        width: 9rem;
        height: 10rem;
      }
    }
  }

  &__mobiletop {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.mobile {
    flex-direction: column;
    height: 51rem;
    padding: 6rem 7rem;
  }

  &__search {
    background: $color-primary-fade;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;

    &.mobile {
      padding: 1rem 4rem;
      height: 18rem;
      border-radius: 13rem;
    }

    & input {
      border: none;
      outline: none;
      padding: 1.5rem 2rem;
      background: transparent;
      width: 82rem;
      font-size: 1.5rem;

      &.mobile {
        font-size: 5rem;
      }

      &::placeholder {
        color: $color-black;
        font-weight: 300;
      }
    }
  }

  &__btns {
    & button {
      padding: 1.1rem;
      font-size: 1.6rem;

      &.btn-colored {
        width: 11rem;
        margin-left: 2rem;
      }
    }
  }
}
</style>