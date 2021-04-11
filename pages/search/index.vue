<template>
  <div>
    <div class="search primary-padding" v-if="!mobileWidth">
      <div class="search__top">
        <div
          class="search__top--item btn-faded btn-double"
          @click="toggleshowFilter"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 15 10"
              fill="none"
            >
              <path
                d="M3.33334 4H11.6667V6H3.33334V4ZM0.833344 0H14.1667V2H0.833344V0ZM5.83334 8H9.16668V10H5.83334V8Z"
                fill="#222222"
              />
            </svg>
          </span>
          <span>Filter</span>
        </div>
        <div
          class="search__top--item btn-faded btn-double"
          @click.stop="toggleCal"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M5.5 8.16667H3.83333V9.83334H5.5V8.16667ZM8.83333 8.16667H7.16667V9.83334H8.83333V8.16667ZM12.1667 8.16667H10.5V9.83334H12.1667V8.16667ZM13.8333 2.33334H13V0.666672H11.3333V2.33334H4.66667V0.666672H3V2.33334H2.16667C1.24167 2.33334 0.508333 3.08334 0.508333 4.00001L0.5 15.6667C0.5 16.1087 0.675595 16.5326 0.988155 16.8452C1.30072 17.1577 1.72464 17.3333 2.16667 17.3333H13.8333C14.75 17.3333 15.5 16.5833 15.5 15.6667V4.00001C15.5 3.08334 14.75 2.33334 13.8333 2.33334ZM13.8333 15.6667H2.16667V6.5H13.8333V15.6667Z"
                fill="#222222"
              />
            </svg>
          </span>
          <span>Date</span>
        </div>
      </div>
      <div class="search__container">
        <div class="search__cards">
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
          <div class="search__card">
            <LocationCard
              :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
              :name="'Redeem church'"
              :propertyType="'Church'"
              :cost="'#10,000/day'"
            />
          </div>
        </div>
      </div>

      <div
        class="search__filters"
        v-bind:class="{
          showFilter,
        }"
        @click.stop="toggleshowFilter"
      >
        <div class="search__filterscontent" @click.stop="showFilter = true">
          <div class="search__filterscontent--heading">
            <h2>Filters</h2>
            <span @click.stop="toggleshowFilter">x</span>
          </div>
          <div class="search__filterscontent--typeofplace">
            <h2>Type of place</h2>
            <div
              class="search__filterscontent--dropdown search__filterscontent--idealforcont"
            >
              <select name="" id="">
                <option
                  value=""
                  v-for="(item, index) in filterDropdown"
                  :key="index"
                >
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="search__filterscontent--idealfor">
            <h2>Ideal for</h2>
            <div class="search__filterscontent--idealforcont">
              <div class="search__filterscontent--idealforitem">
                <span>Production</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-1"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Dinner</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-2"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-2"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Reception</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-3"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-3"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Wedding</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-4"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-4"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Meeting</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-5"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-5"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Party</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-6"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-6"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Performance</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-7"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-7"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Conference</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-8"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-8"></label>
                </span>
              </div>
            </div>
          </div>
          <div class="search__filterscontent--amenities">
            <h2>Amenities</h2>
            <div class="search__filterscontent--idealforcont">
              <div class="search__filterscontent--idealforitem">
                <span>Production</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-9"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-9"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Dinner</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-10"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-10"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Reception</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-11"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-11"></label>
                </span>
              </div>
              <div class="search__filterscontent--idealforitem">
                <span>Wedding</span>
                <span>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-12"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-12"></label>
                </span>
              </div>
            </div>
          </div>
          <div class="search__filterscontent--btn">
            <button class="btn btn-colored btn-landing">Show Results</button>
          </div>
        </div>
      </div>

      <div
        class="search__calender"
        @click.stop="toggleCal"
        v-bind:class="{
          showCalendar,
        }"
      >
        <div class="search__calendercontent" @click.stop="showCalendar = true">
          <div class="search__calendertop">
            <h2>When is the planned data</h2>
            <span @click.stop="toggleCal">X</span>
          </div>
          <div class="search__calenderbody">
            <Calendar />
          </div>
          <div class="search__calenderbottom">
            <span>Clear</span>
            <span>Search</span>
          </div>
        </div>
      </div>

      <div class="search__loadmore">
        <span><p>Loading more...</p></span
        ><span>
          <p>Sorry, no result with the location</p>
        </span>
      </div>
    </div>

    <div class="search search__mobile" v-if="mobileWidth">
      <div
        class="search__mobileoverlay mobile-overlay"
        v-if="showFilter || showCalendar"
      >
        <div class="search__mobileoverlaytop">
          <h2>{{ showFilter ? "Filters" : "When is the planned date" }}</h2>
          <span
            class="close"
            @click.prevent="showFilter = false"
            v-if="showFilter"
          >
            <img src="~/assets/svg/close.svg" alt="" />
          </span>
          <span
            class="close"
            @click.prevent="showCalendar = false"
            v-if="!showFilter"
          >
            <img src="~/assets/svg/close.svg" alt="" />
          </span>
        </div>

        <div class="search__mobileoverlaycontent" v-if="showFilter">
          <div class="search__mobileoverlaymid">
            <span>Type of place</span>
            <span></span>
          </div>

          <div class="search__mobileidealfor">
            <div class="search__mobileidealfor--item">
              <span>
                <p>Ideal for</p>
              </span>
            </div>
            <div class="search__mobileidealfor--item">
              <span class="closeopentext">
                <p>close all ideal for</p>
              </span>
              <span class="closeopen">
                <img src="~/assets/svg/updown.svg" alt="" />
              </span>
            </div>
          </div>

          <div class="search__mobcheckboxes">
            <div class="search__mobcheckboxes--idealforitem">
              <span>Production</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-1"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Reception</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-2"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-2"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Meeting</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-3"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-3"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Perfomance</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-4"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-4"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Dinner</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-5"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-5"></label>
              </span>
            </div>
          </div>

          <div class="search__mobileidealfor">
            <div class="search__mobileidealfor--item">
              <span>
                <p>Amenities</p>
              </span>
            </div>
            <div class="search__mobileidealfor--item">
              <span class="closeopentext">
                <p>show all amenities</p>
              </span>
              <span class="closeopen">
                <img src="~/assets/svg/updown.svg" alt="" />
              </span>
            </div>
          </div>

          <div class="search__mobcheckboxes">
            <div class="search__mobcheckboxes--idealforitem">
              <span>Production</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-6"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-6"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Reception</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-7"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-7"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Meeting</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-8"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-8"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Perfomance</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-9"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-9"></label>
              </span>
            </div>
            <div class="search__mobcheckboxes--idealforitem">
              <span>Dinner</span>
              <span>
                <input
                  class="styled-checkbox styled-checkbox-mobilesearch"
                  id="styled-checkbox-10"
                  type="checkbox"
                  value="value1"
                />
                <label for="styled-checkbox-10"></label>
              </span>
            </div>
          </div>
        </div>

        <div class="search__mobilecalender" v-if="showCalendar"></div>
      </div>

      <div class="search__mobiletop">
        <div class="search__mobiletop--item" @click.prevent="showFilter = true">
          <span>
            <img src="~/assets/svg/filter.svg" alt="" />
          </span>
          <span>
            <p>Filter</p>
          </span>
        </div>
        <div
          class="search__mobiletop--item"
          @click.prevent="showCalendar = true"
        >
          <span class="calender">
            <img src="~/assets/svg/calender.svg" alt="" />
          </span>
          <span>
            <p>Date</p>
          </span>
        </div>
      </div>

      <div class="search__mobilecards">
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
        <div class="search__mobilecard">
          <LocationCard
            :image="'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
            :name="'Redeem church'"
            :propertyType="'Church'"
            :cost="'#10,000/day'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationCard from "@/components/LocationCard";
import Calendar from "@/components/Calendar";

import mobilecheck from "@/mixins/mobilecheck";

export default {
  name: "Search",
  data() {
    return {
      showFilter: false,
      showCalendar: false,
    };
  },
  mixins: [mobilecheck],
  methods: {
    toggleshowFilter() {
      this.showFilter ? (this.showFilter = false) : (this.showFilter = true);
    },
    toggleCal() {
      this.showCalendar
        ? (this.showCalendar = false)
        : (this.showCalendar = true);
    },
  },
  components: {
    LocationCard,
    Calendar,
  },
  computed: {
    filterDropdown() {
      return ["Studio", "Church", "Atrium"];
    },
  },
};
</script>

<style lang="scss">
.search {
  background: #fff;

  &__top {
    display: flex;
    padding: 3rem 0;

    &--item {
      padding: 0.8rem 3rem;
      margin-right: 4rem;
      display: flex;
      align-items: center;
      width: 12rem;
      justify-content: center;
      border-radius: 10rem;
      font-size: 1.6rem;

      & span {
        display: inline-block;

        &:nth-child(2) {
          margin-left: 1rem;
        }
      }
    }
  }

  &__container {
    display: flex;
    justify-content: center;
  }

  &__cards {
    position: relative;
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
  }

  &__card {
    height: 27rem;
    width: 34rem;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  &__filters {
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

    &.showFilter {
      display: flex;
      z-index: 201;
      opacity: 1;
    }
  }

  &__filterscontent {
    background: #fff;
    height: 80vh;
    width: 60vw;
    border-radius: 1.2rem;
    padding: 4rem;
    margin-top: 6rem;

    & h2 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    &--heading {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      & span {
        cursor: pointer;
        font-size: 3rem;
        position: absolute;
        right: 0;
        height: 100%;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }

    &--idealforcont {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }

    &--idealforitem {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      justify-content: space-between;
      width: 41rem;
      font-weight: 300;
      margin-bottom: 1.5rem;

      &:not(:nth-child(2n)) {
        padding-right: 5rem;
      }
    }

    &--btn {
      position: relative;
      margin-top: 2rem;

      & button {
        right: 0;
        position: absolute;
        height: 4.5rem;
        width: 16rem;
        font-size: 1.45rem;
        font-weight: 300;
      }
    }
  }

  &__calender {
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

    &.showCalendar {
      display: flex;
      z-index: 201;
      opacity: 1;
    }
  }

  &__calendercontent {
    background: #fff;
    width: 36vw;
    height: 52rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1rem;

    & h2 {
      font-weight: 400;
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }

  &__calenderbody {
    font-size: 1.65rem;
    width: 43rem;
  }

  &__calendertop {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 7rem;
    font-size: 1.7rem;
    font-weight: 400;

    & span {
      position: absolute;
      right: 3rem;
      top: 0;
      height: 100%;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }

  &__calenderbottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 7rem;
    font-size: 1.7rem;
    font-weight: 400;

    & span {
      display: inline-block;
      font-size: 1.7rem;
      cursor: pointer;

      &:nth-child(1) {
        text-decoration: underline;
        color: $color-primary;
      }

      &:nth-child(2) {
        background: $color-primary;
        color: #fff;
        border-radius: 3rem;
        padding: 1rem 4rem;
      }
    }
  }

  &__loadmore {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    padding: 4rem 0;
  }

  &__mobile {
    margin-top: 51rem;
    padding: 6rem 7rem;
  }

  &__mobiletop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--item {
      display: flex;
      align-items: center;

      & span {
        display: inline-block;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:nth-child(1) {
          width: 10rem;
          height: 6.5rem;

          &.calender {
            height: 9rem;
            width: 8rem;
          }
        }

        &:nth-child(2) {
          font-size: 8rem;
          margin-left: 3rem;
          text-transform: uppercase;
        }
      }
    }
  }

  &__mobilecards {
    margin-top: 18rem;
  }

  &__mobilecard {
    width: 137rem;
    height: 108rem;
    margin-bottom: 18rem;
    border-radius: 6rem;
    overflow: hidden;
  }

  &__heart {
    width: 11rem !important;
    height: 10rem !important;
  }

  &__mobileoverlay {
  }

  &__mobileoverlaytop {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5.6rem;
    padding: 10rem 7rem;

    & h2 {
      font-weight: 400;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1px;
      background: $color-black;
      opacity: 0.1;
    }

    & span {
      &.close {
        position: absolute;
        right: 7rem;
        height: 6.5rem;
        width: 6.5rem;
      }
    }
  }

  &__mobileoverlaycontent {
    padding: 0 7rem;
  }

  &__mobileoverlaymid {
    margin-top: 5rem;
    font-size: 6.5rem;
    margin-bottom: 8rem;
  }

  &__mobileidealfor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9rem;

    &--item {
      font-size: 6.5rem;
      display: flex;
      align-items: center;

      & span {
        display: block;

        &.closeopentext {
          text-decoration: underline;
        }

        &.closeopen {
          height: 2rem;
          width: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 2rem;
        }
      }
    }
  }

  &__mobcheckboxes {
    margin-bottom: 9rem;

    &--idealforitem {
      font-size: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5.5rem;
      width: 100%;
      font-weight: 300;
    }
  }

  &__mobilecalender {
  }
}

.styled-checkbox-mobilesearch {
  & + label:before {
    width: 7rem;
    height: 7rem;
    border-radius: 0.7rem;
  }

  & + label:after {
    left: 1rem !important;
    top: 3rem !important;
    width: 1rem !important;
    height: 1rem !important;
  }
}
</style>