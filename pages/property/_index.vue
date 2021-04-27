<template>
  <div>
    <div class="property primary-padding" v-if="!mobileWidth && property">
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
            <figure v-if="images.length">
              <img :src="images[0].location" alt="" />
            </figure>
            <div class="property__gallery--details">
              <span><p>1 of 12</p></span>
              <span><p>#2,000,000/day</p></span>
            </div>
          </div>
          <h1 class="property__h1">{{ property.title }}</h1>
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
              vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis
              a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
              ligula. Cras ultricies ligula sed magna dictum porta. Lorem ipsum
              dolor sit amet,
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
            <div
              class="property__saveshare--area"
              @click.stop="toggleshowShare"
            >
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
                {{ property.location }}
              </p>
            </span>
          </div>
          <div class="property__idealfor">
            <h2 class="property__h2">Ideal for</h2>
            <div class="property__tags">
              <span
                v-for="(item, index) in property.idealfor"
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
                v-for="(item, index) in property.amenities"
                :key="index"
                class="property__tags--tag btn-faded"
                >{{ item }}</span
              >
            </div>
          </div>
          <div class="property__availability">
            <h2 class="property__h2">Availability</h2>
            <span
              >Opening time -
              {{ property.time ? property.time.open : "" }}</span
            >
            <span
              >Closing time -
              {{ property.time ? property.time.close : "" }}</span
            >
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

    <div v-if="mobileWidth && property" class="property__mobile">
      <div class="property__mobilegallery">
        <figure v-if="images.length">
          <img :src="images[0].location" alt="" />
        </figure>
      </div>

      <div>
        <div class="property__mobilesaveshare property__mobilebody">
          <div class="property__mobilesaveshare--area">
            <span>
              <img src="~/assets/svg/heart.svg" alt="" />
            </span>
            <span>
              <p>save</p>
            </span>
          </div>
          <div
            class="property__mobilesaveshare--area"
            @click.stop="toggleshowShare"
          >
            <span></span>
            <span>
              <p>share</p>
            </span>
          </div>
        </div>

        <div class="property__doubleborder">
          <div class="property__mobilebody">
            <div class="property__mobileheader">
              <h1>{{ property.title }}</h1>
            </div>

            <div class="property__mobilesubheader">
              <span>Restaurant</span>
              <span>23,000sq ft</span>
              <span>20,000 guests</span>
              <span>10 rooms</span>
              <span>2 toilets</span>
            </div>
          </div>
        </div>
      </div>

      <div class="property__mobilebody">
        <div class="property__mobilehost">
          <div class="property__mobilehost--left">
            <figure>
              <img src="~/assets/imgs/profile_photo.png" alt="" />
            </figure>
            <h2>by Jane Doe</h2>
            <span><img src="~/assets/svg/verified.svg" alt="" /></span>
          </div>
          <div class="property__mobilehost--right" @click="open_hostpage">
            <span>Contact Host</span>
          </div>
        </div>
      </div>

      <div class="property__mobilelocation property__doubleborder">
        <div class="property__mobilebody">
          <h2>Location</h2>

          <span
            ><p>
              {{ property.location }}
            </p>
          </span>
        </div>
      </div>

      <div
        class="property__mobiletags property__doubleborder"
        v-if="idealForSwitch"
      >
        <div class="property__mobilebody">
          <div class="property__tagstop">
            <h2 class="property__mobiletags--h2">Ideal for</h2>
            <span v-if="idealForSwitch" @click="toggle_idealfor">
              <img src="~/assets/svg/downarrow.svg" alt="" />
            </span>
          </div>
          <div class="property__mobiletags--items">
            <span
              class="property__mobiletags--item"
              v-for="(item, index) in property.idealfor"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>

      <div
        class="property__mobilelocation property__mobiletags property__doubleborder"
        v-if="description"
      >
        <div class="property__mobilebody">
          <div class="property__tagstop">
            <h2 class="property__mobiletags--h2">Description</h2>
            <span v-if="description" @click="toggle_description">
              <img src="~/assets/svg/downarrow.svg" alt="" />
            </span>
          </div>

          <p>
            {{ property.description }}
          </p>
          <!--<span class="margin-description"></span>--->
        </div>
      </div>

      <div
        class="property__mobiletags property__doubleborder"
        v-if="amenitiesSwitch"
      >
        <div class="property__mobilebody">
          <div class="property__tagstop">
            <h2 class="property__mobiletags--h2">Amenities</h2>
            <span v-if="amenitiesSwitch" @click="toggle_amenities">
              <img src="~/assets/svg/downarrow.svg" alt="" />
            </span>
          </div>

          <div class="property__mobiletags--items">
            <span
              class="property__mobiletags--item"
              v-for="(item, index) in property.amenities"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>

      <div
        class="property__mobiletags property__doubleborder"
        v-if="accessibilty"
      >
        <div class="property__mobilebody">
          <div class="property__tagstop">
            <h2 class="property__mobiletags--h2">Accessibilty</h2>
            <span v-if="accessibilty" @click="toggle_access">
              <img src="~/assets/svg/downarrow.svg" alt="" />
            </span>
          </div>
          <div class="property__mobiletags--items">
            <span class="property__mobiletags--item">wheel chair</span>
            <span class="property__mobiletags--item">Elevator</span>
            <span class="property__mobiletags--item">parking</span>
            <span class="property__mobiletags--item">stairs</span>
            <span class="property__mobiletags--item">wheel chair</span>
            <span class="property__mobiletags--item">Elevator</span>
            <span class="property__mobiletags--item">parking</span>
            <span class="property__mobiletags--item">stairs</span>
          </div>
        </div>
      </div>

      <div
        class="property__mobiletags property__doubleborder"
        v-if="availability"
      >
        <div class="property__mobilebody">
          <div class="property__mobileavailabilty">
            <div class="property__mobileavailabilty--top">
              <div class="property__tagstop">
                <h2 class="property__mobiletags--h2">Availability</h2>
                <span v-if="availability" @click="toggle_availability">
                  <img src="~/assets/svg/downarrow.svg" alt="" />
                </span>
              </div>
              <span
                >Opening time -
                {{ property.time ? property.time.open : "" }}</span
              >
              <span
                >Closing time -
                {{ property.time ? property.time.close : "" }}</span
              >
            </div>
            <div class="property__mobileavailabilty--bottom"></div>
          </div>
        </div>
      </div>

      <div class="property__mobiletags property__doubleborder" v-if="rules">
        <div class="property__mobilebody">
          <div class="property__tagstop">
            <h2 class="property__mobiletags--h2">Rules</h2>
            <span v-if="rules" @click="toggle_rules">
              <img src="~/assets/svg/downarrow.svg" alt="" />
            </span>
          </div>
          <div class="property__rulesmobile">
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
      </div>

      <div class="property__revealbtns">
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_idealfor"
          v-if="!idealForSwitch"
        >
          <span>Ideal for</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_description"
          v-if="!description"
        >
          <span>Description</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_amenities"
          v-if="!amenitiesSwitch"
        >
          <span>Amenities</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_access"
          v-if="!accessibilty"
        >
          <span>Accessibility</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_availability"
          v-if="!availability"
        >
          <span>Availability</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
        <div
          class="property__revealbtn property__doubleborder property__mobilebody"
          @click="toggle_rules"
          v-if="!rules"
        >
          <span>Rules</span>
          <span>
            <img src="~/assets/svg/downarrow.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import Calendar from "@/components/Calendar";
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "Property",
  data() {
    return {
      showShare: false,
      location: false,
      idealForSwitch: false,
      description: false,
      amenitiesSwitch: false,
      accessibilty: false,
      availability: false,
      rules: false,
    };
  },
  created() {
    const id = this.$route.params.index;
    this.$store.dispatch("get_current_property", id);
    this.$store.dispatch("get_property_photos", id);
  },
  components: {
    Comment,
    Calendar,
  },
  mixins: [mobilecheck],
  computed: {
    property() {
      const property = this.$store.getters.property;
      return property;
    },
    images() {
      const images = this.$store.getters.propertyPhotos;
      return images;
    },
  },
  methods: {
    open_hostpage(page) {
      this.$router.push("/property/host");
    },
    toggleshowShare() {
      this.showShare ? (this.showShare = false) : (this.showShare = true);
    },
    toggle_idealfor() {
      this.idealForSwitch
        ? (this.idealForSwitch = false)
        : (this.idealForSwitch = true);
    },
    toggle_description() {
      this.description ? (this.description = false) : (this.description = true);
    },
    toggle_amenities() {
      this.amenitiesSwitch
        ? (this.amenitiesSwitch = false)
        : (this.amenitiesSwitch = true);
    },
    toggle_access() {
      this.accessibilty
        ? (this.accessibilty = false)
        : (this.accessibilty = true);
    },
    toggle_availability() {
      this.availability
        ? (this.availability = false)
        : (this.availability = true);
    },
    toggle_rules() {
      this.rules ? (this.rules = false) : (this.rules = true);
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

  &__mobile {
    margin-top: 51rem;
    background: #fff;
  }

  &__mobilegallery {
    height: 98rem;
    margin-bottom: 6rem;

    & figure {
      height: 100%;
      overflow: hidden;
    }
  }

  &__mobilebody {
    padding: 0 7rem;
  }

  &__mobilesaveshare {
    display: flex;
    align-items: center;
    padding-bottom: 6rem;

    &--area {
      display: flex;
      align-items: center;
      font-size: 7rem;

      & span {
        display: flex;

        &:nth-child(1) {
          width: 8rem;
          height: 7rem;
          margin-right: 3rem;
        }

        &:nth-child(2) {
        }
      }
    }
  }

  &__mobileheader {
    & h1 {
      font-size: 6.5rem;
      font-weight: 500;
      margin: 11rem 0 3.5rem 0;
    }
  }

  &__mobilesubheader {
    font-size: 6.5rem;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 7rem;

    & span {
      display: flex;
      position: relative;
      margin-right: 2rem;
      padding-right: 4rem;
      margin-right: 4rem;
      border-right: 0.1px solid #000000;
      margin-bottom: 1rem;
    }
  }

  &__mobilehost {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6rem 0;

    &--left {
      display: flex;
      align-items: center;

      & figure {
        height: 15rem;
        width: 15rem;
        overflow: hidden;
        border-radius: 100%;
      }

      & h2 {
        font-size: 5.5rem;
        font-weight: 300;
        margin: 0 2rem 0 5rem;
      }
    }

    &--right {
      font-size: 6rem;
    }
  }

  &__mobilelocation {
    font-size: 6rem;
    font-weight: 300;
    line-height: 9rem;
    padding: 9rem 0;

    & h2 {
      font-weight: 500;
      font-size: 6.5rem;
      margin-bottom: 2rem;
    }
  }

  &__mobiletags {
    padding: 10rem 0;

    &--h2 {
      font-weight: 500;
      font-size: 6.5rem;
      margin-bottom: 2rem;
    }

    &--item {
      background: $color-primary-fade;
      border-radius: 10rem;
      padding: 3rem 6rem;
      margin: 2rem 3rem 2rem 0;
      font-size: 5rem;
      display: inline-block;
      font-weight: 300;
    }
  }

  &__doubleborder {
    border-top: 0.1px solid #e5e5e5;
    border-bottom: 0.1px solid #e5e5e5;
  }

  &__rulesmobile {
    display: flex;
    flex-direction: column;
    font-size: 6.2rem;
    font-weight: 300;
    line-height: 9rem;
  }

  &__mobileavailabilty {
    &--top {
      display: flex;
      flex-direction: column;
      font-size: 6rem;
      font-weight: 300;
    }

    &--bottom {
    }
  }

  &__revealbtns {
    display: flex;
    flex-direction: column;
  }

  &__revealbtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24rem;

    & span {
      display: inline-block;

      &:nth-child(1) {
        font-size: 6.5rem;
        font-weight: 500;
      }

      &:nth-child(2) {
        width: 6rem;
        height: 4rem;
      }
    }
  }

  &__tagstop {
    display: flex;
    justify-content: space-between;

    & span {
      display: inline-block;
      width: 6rem;
      height: 4rem;
      transform: rotate(180deg) translateY(-2rem);
    }
  }
}

.margin-description {
  display: inline-block;
  padding: 2rem;
}
</style>