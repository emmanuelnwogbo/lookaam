<template>
  <div class="calendar">
    <FunctionalCalendar
      v-model="calendarData"
      v-on:changedMonth="changedMonth"
      v-on:changedYear="changedYear"
      :sundayStart="true"
      :date-format="'dd/mm/yyyy'"
      :is-date-range="true"
      :is-date-picker="true"
    ></FunctionalCalendar>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      calendarData: {},
    };
  },
  methods: {
    changedMonth() {},
    changedYear() {},
  },
};
</script>

<style lang="scss">
.calendar {
}

.vfc-main-container {
  box-shadow: none !important;
}

.vfc-week {
  margin-bottom: 1.3rem;
}

.vfc-week .vfc-day span.vfc-span-day.vfc-today {
  background: $color-primary;
}
</style>