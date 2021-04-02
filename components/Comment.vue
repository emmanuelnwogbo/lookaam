<template>
  <div class="comment">
    <div class="comment__left">
      <figure>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </figure>
    </div>
    <div class="comment__right">
      <div class="comment__right--content">
        <p>
          I love this place, the host is awesome and the environment is peaceful
        </p>
      </div>
      <div class="comment__right--reply">
        <span>
          <img src="~/assets/svg/replyicon.svg" alt="" />
        </span>
        <span>
          <p>Reply</p>
        </span>
      </div>
      <div class="comment__right--viewreplies">
        <span @click="showreplies">
          <p>View 20 replies</p>
        </span>
      </div>
      <div class="comment__replies">
        <div class="comment">
          <div class="comment__left">
            <figure>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </figure>
          </div>
          <div class="comment__right">
            <div class="comment__right--content">
              <p>
                I love this place, the host is awesome and the environment is
                peaceful
              </p>
            </div>
            <div class="comment__right--reply">
              <span>
                <img src="~/assets/svg/replyicon.svg" alt="" />
              </span>
              <span>
                <p>Reply</p>
              </span>
            </div>
            <div class="comment__right--viewreplies">
              <span @click="showreplies">
                <p>View 20 replies</p>
              </span>
            </div>
            <div class="comment__replies"></div>
          </div>
        </div>
        <div class="comment">
          <div class="comment__left">
            <figure>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </figure>
          </div>
          <div class="comment__right">
            <div class="comment__right--content">
              <p>
                I love this place, the host is awesome and the environment is
                peaceful
              </p>
            </div>
            <div class="comment__right--reply">
              <span>
                <img src="~/assets/svg/replyicon.svg" alt="" />
              </span>
              <span>
                <p>Reply</p>
              </span>
            </div>
            <div class="comment__right--viewreplies">
              <span @click="showreplies">
                <p>View 20 replies</p>
              </span>
            </div>
            <div class="comment__replies"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      repliesshown: 0,
    };
  },
  methods: {
    showreplies() {
      this.repliesshown = this.repliesshown += 1;
    },
  },
};
</script>

<style lang="scss">
.comment {
  display: flex;
  font-weight: 300;

  &__left {
    & figure {
      overflow: hidden;
      height: 4rem;
      width: 4rem;
      border-radius: 100%;
    }
  }

  &__right {
    margin-left: 2rem;

    &--content {
      font-size: 1.5rem;
      width: 39rem;
      margin-bottom: 1.2rem;
    }

    &--reply {
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;
      cursor: pointer;

      & span {
        display: inline-block;

        &:nth-child(1) {
        }

        &:nth-child(2) {
          font-size: 1.2rem;
          margin-left: 0.5rem;
        }
      }
    }

    &--viewreplies {
      color: $color-primary;
      font-weight: 500;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }

  &__replies {
    padding-left: 3rem;
    margin-top: 3rem;
  }
}
</style>