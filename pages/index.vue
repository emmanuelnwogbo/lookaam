<template>
  <div class="landing">
    <div
      class="landing__jumbotron"
      v-bind:class="{
        mobileWidth,
      }"
    >
      <figure>
        <img
          src="https://aws-course-nwogbo.s3.eu-west-2.amazonaws.com/Introduction.jpg"
          alt=""
        />
      </figure>
    </div>

    <div class="landing__discover">
      <h3
        class="landing__h3"
        v-bind:class="{
          mobileWidth,
        }"
      >
        Discover places
      </h3>

      <div
        v-bind:class="{
          swiper_container: mobileWidth,
        }"
      >
        <div
          class="landing__cards swiper-container"
          v-bind:class="{
            mobileWidth,
            invisible: mobileWidth,
          }"
        >
          <div class="swiper-wrapper">
            <div
              class="landing__card"
              v-for="(property, index) in properties"
              :key="index"
              v-bind:class="{
                mobileWidth,
              }"
            >
              <LocationCard
                :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
                :name="'Redeem church'"
                :propertyType="'Church'"
                :cost="'#10,000/day'"
                :property="property"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-bind:class="{
          swiper_container: mobileWidth,
        }"
      >
        <div
          class="landing__cards swiper-container"
          v-bind:class="{
            mobileWidth,
            invisible: !mobileWidth,
          }"
        >
          <div class="swiper-wrapper">
            <div
              class="landing__card swiper-slide"
              v-for="(property, index) in properties"
              :key="index"
              v-bind:class="{
                mobileWidth,
              }"
            >
              <LocationCard
                :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
                :name="'Redeem church'"
                :propertyType="'Church'"
                :cost="'#10,000/day'"
                :property="property"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="landing__seemore landing-padding"
        v-bind:class="{
          mobileWidth,
        }"
      >
        <span @click="seemore">See more places</span>
        <span>></span>
      </div>
    </div>

    <div
      class="landing__blue landing-padding"
      v-bind:class="{
        mobileWidth,
      }"
    >
      <div class="landing__blue--left">
        <div class="landing__blue--copy" v-if="!mobileWidth">
          <span><p>Join hundreds of hosts</p></span>
          <span><p>on lookam</p></span>
        </div>
        <div class="landing__blue--copymobile" v-if="mobileWidth">
          <span>
            <p>Join</p>
          </span>
          <span>
            <p>hundreds of</p>
          </span>
          <span>
            <p>hosts on</p>
          </span>
          <span>
            <p>lookaam</p>
          </span>
        </div>
        <div
          class="landing__blue--action"
          v-bind:class="{
            mobileWidth,
          }"
        >
          <button
            class="btn btn-landing"
            v-bind:class="{
              mobileWidth,
            }"
          >
            Host your place
          </button>
        </div>
      </div>
      <div
        class="landing__blue--right"
        v-bind:class="{
          mobileWidth,
        }"
      >
        <span>
          <img src="~/assets/svg/undraw_homepage.svg" alt="" />
        </span>
      </div>
    </div>

    <footer class="landing__footer landing-padding" v-if="!mobileWidth">
      <div class="landing__footer--left">
        <span>About lookaam</span>
        <span class="hostplace">Host your place</span>
        <span>Contact Us</span>
      </div>
      <div class="landing__footer--right">
        <span>&copy; 2021 lookaam</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.125 0H1.875C0.84375 0 0 0.84375 0 1.875V18.125C0 19.1562 0.84375 20 1.875 20H18.125C19.1562 20 20 19.1562 20 18.125V1.875C20 0.84375 19.1562 0 18.125 0ZM13.75 3.125C13.75 2.78125 14.0312 2.5 14.375 2.5H16.875C17.2188 2.5 17.5 2.78125 17.5 3.125V5.625C17.5 5.96875 17.2188 6.25 16.875 6.25H14.375C14.2093 6.24967 14.0506 6.18372 13.9334 6.06658C13.8163 5.94944 13.7503 5.79066 13.75 5.625V3.125ZM10 6.25C10.9778 6.27525 11.9071 6.68142 12.5897 7.38193C13.2724 8.08243 13.6544 9.02188 13.6544 10C13.6544 10.9781 13.2724 11.9176 12.5897 12.6181C11.9071 13.3186 10.9778 13.7248 10 13.75C9.0222 13.7248 8.09293 13.3186 7.41028 12.6181C6.72763 11.9176 6.34558 10.9781 6.34558 10C6.34558 9.02188 6.72763 8.08243 7.41028 7.38193C8.09293 6.68142 9.0222 6.27525 10 6.25ZM17.5 16.875C17.5 17.2188 17.2188 17.5 16.875 17.5H3.125C2.95934 17.4997 2.80056 17.4337 2.68342 17.3166C2.56628 17.1994 2.50033 17.0407 2.5 16.875V8.75H3.875C3.68938 9.6582 3.70815 10.5963 3.92994 11.4964C4.15173 12.3964 4.57099 13.2358 5.15734 13.9538C5.74368 14.6718 6.48241 15.2503 7.31999 15.6474C8.15758 16.0446 9.07303 16.2504 10 16.25C10.927 16.2504 11.8424 16.0446 12.68 15.6474C13.5176 15.2503 14.2563 14.6718 14.8427 13.9538C15.429 13.2358 15.8483 12.3964 16.0701 11.4964C16.2918 10.5963 16.3106 9.6582 16.125 8.75H17.5V16.875Z"
              fill="#222222"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.125 0H1.875C0.84375 0 0 0.84375 0 1.875V18.125C0 19.1562 0.84375 20 1.875 20H10V11.25H7.5V8.75H10V7.5C10 5.43375 11.6838 3.75 13.75 3.75H16.25V6.25H13.75C13.0625 6.25 12.5 6.8125 12.5 7.5V8.75H16.25L15.625 11.25H12.5V20H18.125C19.1562 20 20 19.1562 20 18.125V1.875C20 0.84375 19.1562 0 18.125 0Z"
              fill="#222222"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <path
              d="M15.3608 3.66418C15.3716 3.81002 15.3716 3.95502 15.3716 4.10002C15.3716 8.53752 11.9941 13.6509 5.82163 13.6509C3.91996 13.6509 2.15329 13.1 0.666626 12.1433C0.936626 12.1742 1.19663 12.185 1.47746 12.185C2.98829 12.1887 4.45633 11.6835 5.64496 10.7508C4.94448 10.7382 4.26544 10.5071 3.70266 10.0898C3.13988 9.67253 2.72145 9.08993 2.50579 8.42335C2.71329 8.45418 2.92163 8.47502 3.13996 8.47502C3.44079 8.47502 3.74329 8.43335 4.02413 8.36085C3.26393 8.20736 2.58035 7.79531 2.08964 7.19475C1.59893 6.5942 1.33137 5.84222 1.33246 5.06668V5.02502C1.77996 5.27418 2.29913 5.43002 2.84913 5.45085C2.38837 5.14467 2.01056 4.7292 1.74941 4.24151C1.48826 3.75381 1.35189 3.20906 1.35246 2.65585C1.35246 2.03252 1.51829 1.46085 1.80913 0.962516C2.65257 2.00003 3.70455 2.84882 4.89691 3.4539C6.08927 4.05898 7.39543 4.40686 8.73079 4.47502C8.67913 4.22502 8.64746 3.96585 8.64746 3.70585C8.64724 3.26498 8.73391 2.8284 8.90252 2.42105C9.07113 2.0137 9.31838 1.64358 9.63012 1.33184C9.94185 1.0201 10.312 0.772858 10.7193 0.604248C11.1267 0.435637 11.5633 0.348963 12.0041 0.349183C12.9708 0.349183 13.8433 0.754182 14.4566 1.40918C15.2081 1.26386 15.9287 0.989534 16.5866 0.598349C16.3361 1.37403 15.8114 2.03177 15.1108 2.44835C15.7773 2.37233 16.4287 2.19706 17.0433 1.92835C16.5842 2.5976 16.0154 3.18447 15.3608 3.66418Z"
              fill="#222222"
            />
          </svg>
        </span>
      </div>
    </footer>

    <footer class="footer__mobile" v-if="mobileWidth">
      <div class="footer__mobile--item"><p>About lookaam</p></div>
      <div class="footer__mobile--item"><p>Host your place</p></div>
      <div class="footer__mobile--item"><p>Contact Us</p></div>
      <div class="footer__mobile--item footer__mobile--itembottom">
        <div class="footer__mobile--left">&copy; 2021 lookaam</div>
        <div class="footer__mobile--right">
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
    </footer>
  </div>
</template>

<script>
import LocationCard from "@/components/LocationCard";
import mobilecheck from "@/mixins/mobilecheck";

import Swiper from "swiper";

export default {
  data() {
    return {};
  },
  components: {
    LocationCard,
  },
  computed: {
    properties() {
      const properties = this.$store.getters.properties.results;
      return properties;
    },
  },
  methods: {
    seemore() {
      this.$router.push("/search");
    },
  },
  mounted() {
    console.log(this.mobileWidth, Swiper);
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  mixins: [mobilecheck],
};
</script>

<style lang="scss" scoped>
.landing {
  background: #fff;

  &__jumbotron {
    height: 51rem;
    margin-top: 8rem;

    & figure {
      height: 100%;
    }

    &.mobileWidth {
      margin-top: 51rem;
      height: 150rem;
    }
  }

  &__discover {
    padding: 1.8rem 0 0.6rem 5rem;
  }

  &__h3 {
    font-weight: 700;
    margin: 3rem 0 4rem 0;
    font-size: 2.5rem;

    &.mobileWidth {
      font-weight: 700;
      margin: 9rem 0 9rem 0;
      font-size: 8.5rem;
    }
  }

  &__cards {
    display: flex;
    align-items: center;
    overflow: hidden;

    &.locationcard {
      margin-right: 2.6rem;
    }
  }

  &__card {
    height: 25rem;
    width: 29rem;
    flex-shrink: 0;
    margin-right: 1.1rem;

    &.mobileWidth {
      height: 96rem;
      width: 103rem;
      flex-shrink: 0;
      margin-right: 6.1rem;
      border-radius: 2rem;
      overflow: hidden;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__seemore {
    text-align: right;
    font-size: 1.5rem;

    & span {
      display: inline-block;
      font-weight: 300;
      color: $color-primary;
      cursor: pointer;
    }

    &.mobileWidth {
      font-size: 6.4rem;
      padding: 11rem 6rem 8rem 0;
    }
  }

  &__blue {
    background: $color-primary;
    height: 47rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.mobileWidth {
      height: 150rem;
    }

    &--left {
      font-size: 4.5rem;
      color: #fff;
    }

    &--right {
      height: 37rem;
      width: 61rem;

      &.mobileWidth {
        height: 40rem;
        width: 66rem;
      }
    }

    &--copy {
      margin: 0 0 3rem 0;
    }

    &--copymobile {
      margin: 0 0 3rem 0;
      display: flex;
      flex-direction: column;
      font-size: 12.5rem;
    }

    &--action {
      &.mobileWidth {
        margin-top: 17rem;
      }

      & button {
        color: $color-primary;
        padding: 1.5rem 2.5rem;
        border-radius: 3rem;
        font-size: 1.7rem;

        &.mobileWidth {
          padding: 4.5rem 9.5rem;
          border-radius: 10rem;
          font-size: 6rem;
        }
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding-left: 3rem;

    &--left {
      color: $color-primary;
      display: flex;

      & span {
        font-size: 1.4rem;
        font-weight: 300;
        cursor: pointer;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;

        &.hostplace {
          border-left: 1px solid $color-black;
          border-right: 1px solid $color-black;
        }
      }
    }

    &--right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 24rem;
      font-size: 1.4rem;
    }
  }
}

.footer {
  &__mobile {
    display: flex;
    font-weight: 300;
    flex-direction: column;
    font-size: 6rem;
    padding: 14rem 6rem;
    line-height: 15rem;

    &--item {
      color: $color-primary;
    }

    &--itembottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $color-black;
      font-weight: 700;
      margin-top: 4rem;
    }

    &--right {
      & span {
        display: inline-block;
        margin-left: 6rem;
        height: 8rem;
        width: 8rem;
      }
    }
  }
}

.invisible {
  display: none;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  /*text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  /*display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;*/
  height: 96rem !important;
  width: 103rem !important;
  flex-shrink: 0;
  margin-right: 6.1rem;
  border-radius: 2rem;
  overflow: hidden;
}
</style>
