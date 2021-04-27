<template>
  <div class="locationcard" @click="open_property">
    <figure class="locationcard__area">
      <img :src="image" alt="" v-if="image" />
    </figure>
    <div
      class="locationcard__text locationcard__area"
      v-bind:class="{
        mobileWidth,
      }"
    >
      <div class="locationcard__text--top">
        <span></span>
        <span
          v-bind:class="{
            mobileWidth,
            search__heart: mobileWidth,
          }"
        >
          <img src="~/assets/svg/heart_white.svg" alt="" />
        </span>
      </div>
      <div
        class="locationcard__text--bottom"
        v-bind:class="{
          mobileWidth,
        }"
      >
        <span>{{ property.title }}</span>
        <span>{{ property.typeof }}</span>
        <span>₦{{ property.price }}/day</span>
      </div>
    </div>
  </div>
</template>

<script>
import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "LocationCard",
  data() {
    return {
      image: "",
    };
  },
  props: {
    name: String, 
    propertyType: String,
    cost: String,
    property: Object,
  },
  methods: {
    open_property() {
      this.$router.push(`/property/${this.property._id}`);
    },
  },
  mounted() {
    this.$store
      .dispatch("get_property_photos", this.property["_id"])
      .then((data) => {
        console.log(data);
        this.image = data[0].location;
      });
  },
  mixins: [mobilecheck],
};
</script>

<style lang="scss" scoped>
.locationcard {
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  &__area {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  & figure {
    z-index: 1;
  }

  &__text {
    z-index: 2;
    padding: 2rem;
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(
      180deg,
      rgba(34, 34, 34, 0) 0%,
      rgba(34, 34, 34, 0.35) 37.81%,
      rgba(34, 34, 34, 0.85) 100%
    );

    &.mobileWidth {
      padding: 6rem;
      font-size: 6.5rem;
    }

    &--top {
      display: flex;
      justify-content: space-between;

      & span {
        display: inline-block;

        &:nth-child(2) {
          width: 2.2rem;
          height: 2rem;

          &.mobileWidth {
            width: 9rem;
            height: 8rem;
          }
        }
      }
    }

    &--bottom {
      display: flex;
      flex-direction: column;
      line-height: 2.4rem;

      &.mobileWidth {
        line-height: 9.8rem;
      }

      & span {
        &:nth-child(2) {
          font-weight: 300;
        }

        &:nth-child(3) {
          text-align: right;
        }
      }
    }
  }
}
</style>