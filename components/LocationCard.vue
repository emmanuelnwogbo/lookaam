<template>
  <div class="locationcard">
    <figure class="locationcard__area">
      <img :src="image" alt="" />
    </figure>
    <div class="locationcard__text locationcard__area">
      <div class="locationcard__text--top">
        <span></span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M15.8542 0.125C14.0417 0.125 12.3021 0.96875 11.1667 2.30208C10.0312 0.96875 8.29167 0.125 6.47917 0.125C3.27083 0.125 0.75 2.64583 0.75 5.85417C0.75 9.79167 4.29167 13 9.65625 17.875L11.1667 19.2396L12.6771 17.8646C18.0417 13 21.5833 9.79167 21.5833 5.85417C21.5833 2.64583 19.0625 0.125 15.8542 0.125ZM11.2708 16.3229L11.1667 16.4271L11.0625 16.3229C6.10417 11.8333 2.83333 8.86458 2.83333 5.85417C2.83333 3.77083 4.39583 2.20833 6.47917 2.20833C8.08333 2.20833 9.64583 3.23958 10.1979 4.66667H12.1458C12.6875 3.23958 14.25 2.20833 15.8542 2.20833C17.9375 2.20833 19.5 3.77083 19.5 5.85417C19.5 8.86458 16.2292 11.8333 11.2708 16.3229Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div class="locationcard__text--bottom">
        <span>{{ name }}</span>
        <span>{{ propertyType }}</span>
        <span>{{ cost }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    image: String,
    name: String,
    propertyType: String,
    cost: String,
  },
};
</script>

<style lang="scss" scoped>
.locationcard {
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  height: 28rem;
  width: 28rem;
  margin-right: 3rem;
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

    &--top {
      display: flex;
      justify-content: space-between;
    }

    &--bottom {
      display: flex;
      flex-direction: column;

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