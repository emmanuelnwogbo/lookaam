<template>
  <div class="property primary-padding">
    <div class="property__top">
      <div
        class="property__share"
        v-bind:class="{
          showShare,
        }"
        @click.stop="toggleshowShare"
      >
        <div class="property__share--content" @click.stop="showShare = true">
          <div class="property__share--top">
            <h2 class="property__share--h2">Share</h2>
            <span @click.stop="toggleshowShare">X</span>
          </div>
          <div class="property__share--items">
            <div class="property__share--item">
              <span>
                <img src="~/assets/svg/facebookshare.svg" alt="" />
              </span>
              <span>
                <p>Facebook</p>
              </span>
            </div>
            <div class="property__share--item">
              <span>
                <img src="~/assets/svg/twittershare.svg" alt="" />
              </span>
              <span>
                <p>Twitter</p>
              </span>
            </div>
            <div class="property__share--item">
              <span>
                <img src="~/assets/svg/whatsappshare.svg" alt="" />
              </span>
              <span>
                <p>Whatsapp</p>
              </span>
            </div>
            <div class="property__share--item">
              <span>
                <img src="~/assets/svg/copylink.svg" alt="" />
              </span>
              <span>
                <p>Copy link</p>
              </span>
            </div>
            <div class="property__share--item">
              <span>
                <img src="~/assets/svg/emailicon.svg" alt="" />
              </span>
              <span>
                <p>Email</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="property__side property__left">
        <div class="property__gallery">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </figure>
          <div class="property__gallery--details">
            <span><p>1 of 12</p></span>
            <span><p>#2,000,000/day</p></span>
          </div>
        </div>
        <h1 class="property__h1">The Royal Hisbiscus</h1>
        <div class="property__desc1">
          <span><p>Restaurant</p></span>
          <span><p>23,000sq ft</p></span>
          <span><p>20,000 guests</p></span>
          <span><p>10 rooms</p></span>
          <span><p>2 toilets</p></span>
        </div>
        <div class="property__host">
          <div class="property__host--left">
            <figure>
              <img src="~/assets/imgs/profile_photo.png" alt="" />
            </figure>
            <span><p>by Jane Doe</p></span>
            <span><img src="~/assets/svg/verified.svg" alt="" /></span>
          </div>
          <div class="property__host--right" @click="open_hostpage">
            <span><p>Contact Host</p></span>
          </div>
        </div>

        <div class="property__description">
          <h2 class="property__h2">Description</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet,
          </p>

          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel.
          </p>
        </div>

        <div class="property__rules">
          <h2 class="property__h2">Rules</h2>
          <span>No smoking</span>
          <span>No parties or events</span>
          <span>No pets</span>
          <span>No smoking</span>
          <span>No parties or events</span>
          <span>No smoking</span>
          <span>No parties or events</span>
          <span>No pets</span>
          <span>No smoking</span>
          <span>No parties or events</span>
          <span>No smoking</span>
          <span>No parties or events</span>
          <span>No pets</span>
          <span>No smoking</span>
          <span>No parties or events</span>
        </div>
      </div>
      <div class="property__side property__right">
        <div class="property__saveshare">
          <div class="property__saveshare--area">
            <span>
              <img src="~/assets/svg/heart.svg" alt="" />
            </span>
            <span>
              <p>save</p>
            </span>
          </div>
          <div class="property__saveshare--area" @click.stop="toggleshowShare">
            <span></span>
            <span>
              <p>share</p>
            </span>
          </div>
        </div>
        <div class="property__location">
          <h2 class="property__h2">Location</h2>

          <span
            ><p>
              Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur
              aliquet quam id dui posuere blandit. Donec sollicitudin molestie
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
            </p>
          </span>
        </div>
        <div class="property__idealfor">
          <h2 class="property__h2">Ideal for</h2>
          <div class="property__tags">
            <span
              v-for="(item, index) in idealFor"
              :key="index"
              class="property__tags--tag btn-faded"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="property__amenities">
          <h2 class="property__h2">Amenities</h2>
          <div class="property__tags">
            <span
              v-for="(item, index) in amenities"
              :key="index"
              class="property__tags--tag btn-faded"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="property__availability">
          <h2 class="property__h2">Availability</h2>
          <span>Opening time - 8:00</span>
          <span>Closing time - 20:00</span>
        </div>
        <div class="property__calender">
          <Calendar />
        </div>
      </div>
    </div>

    <div class="property__comments">
      <h2 class="property__h2">comments</h2>
      <Comment />
      <Comment />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import Calendar from "@/components/Calendar";

export default {
  name: "Property",
  data() {
    return {
      showShare: false,
    };
  },
  components: {
    Comment,
    Calendar,
  },
  computed: {
    amenities() {
      return [
        "reception",
        "a/c",
        "wifi",
        "tv",
        "sound system",
        "private entrance",
        "kitchen",
        "private entrance",
        "green screen",
        "changing room",
        "lounge",
        "makeup room",
        "soundproof",
        "electricity",
        "large table",
        "stage",
      ];
    },
    idealFor() {
      return [
        "reception",
        "production",
        "meeting",
        "performance",
        "conference",
        "party",
        "wedding",
      ];
    },
  },
  methods: {
    open_hostpage(page) {
      this.$router.push("/property/host");
    },
    toggleshowShare() {
      this.showShare ? (this.showShare = false) : (this.showShare = true);
    },
  },
};
</script>

<style lang="scss">
.property {
  display: flex;
  padding-top: 11rem;
  flex-direction: column;
  padding-bottom: 8rem;

  &__top {
    display: flex;
  }

  &__share {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;

    &.showShare {
      display: flex;
      z-index: 201;
      opacity: 1;
    }

    &--top {
      position: relative;
      padding: 1.5rem 3rem;
      text-align: center;
      font-size: 1.1rem;
      font-weight: 300;
      border-bottom: 0.1px solid $color-black;

      & span {
        position: absolute;
        height: 100%;
        top: 0;
        right: 2rem;
        font-size: 1.7rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    &--items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 26rem;
      font-size: 1.5rem;
      padding: 3rem;
    }

    &--item {
      display: flex;
      align-items: center;
      cursor: pointer;

      & span {
        display: inline-block;
        margin-right: 1rem;
      }
    }

    &--content {
      background: #fff;
      width: 28rem;
      height: 32rem;
    }

    &--item {
      display: flex;
    }
  }

  &__left {
    width: 85rem;
  }

  &__right {
    width: 56rem;
    padding-left: 6rem;
  }

  &__gallery {
    position: relative;
    width: 85rem;
    overflow: hidden;
    height: 58rem;
    background: red;

    & figure {
      width: 100%;
      height: 100%;
    }

    &--details {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10rem;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem;
      color: #fff;
      font-size: 1.6rem;

      & span {
        display: inline-block;
        border-radius: 0.5rem;
        padding: 1rem 1.3rem;

        &:nth-child(1) {
          background: rgba(34, 34, 34, 0.48);
        }

        &:nth-child(2) {
          background: $color-primary;
        }
      }
    }
  }

  &__h1 {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }

  &__h2 {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  &__desc1 {
    font-weight: 300;
    display: flex;
    font-size: 1.5rem;

    & span {
      display: inline-block;
      padding: 0 1rem 0 0;
      border-right: 1px solid $color-black;

      &:not(:nth-child(1)) {
        padding: 0 1rem;
      }
    }
  }

  &__host {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--left {
      display: flex;
      align-items: center;
      display: flex;
      align-items: center;
      font-weight: 300;
      font-size: 1.7rem;

      & figure {
        height: 4rem;
        width: 4rem;
        border-radius: 100%;
      }

      & span {
        display: inline-block;

        &:nth-child(2) {
          margin-left: 1rem;
        }

        &:nth-child(3) {
          margin-left: 0.5rem;
          height: 2rem;
          width: 2rem;
        }
      }
    }

    &--right {
      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  &__description {
    line-height: 2.2rem;
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: 300;

    & p {
      margin-bottom: 2rem;

      &:last-child {
        margin: 0;
      }
    }
  }

  &__rules {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.2rem;
  }

  &__saveshare {
    display: flex;
    align-items: center;
    font-size: 1.6rem;

    & span {
      display: inline-block;
      cursor: pointer;

      &:nth-child(1) {
        width: 1.5rem;
        height: 1.4rem;
        margin-right: 0.5rem;
      }

      &:nth-child(2) {
        margin-right: 1rem;
      }
    }

    &--area {
      display: flex;
      align-items: center;
    }
  }

  &__location {
    line-height: 2.2rem;
    margin-top: 3rem;
    font-size: 1.4rem;
    font-weight: 300;
  }

  &__availability {
    line-height: 2.2rem;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 300;
  }

  &__tags {
    font-size: 1.3rem;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;

    &--tag {
      display: inline-block;
      padding: 1rem 2rem;
      margin: 0.6rem 0.7rem 0.6rem 0;
    }
  }

  &__comments {
    display: flex;
    flex-direction: column;
  }

  &__calender {
    margin-top: 3rem;
    font-size: 1.7rem;
    width: 41rem;
    box-shadow: none !important;
  }
}
</style>