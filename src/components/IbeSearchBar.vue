<template>
  <div class="mx-auto hidden lg:block">
    <div v-if="isSubmitted" class="flex">
      <vue-loader
        direction="middle"
        text="Search results Loading..."
        text-color="#0000ff"
      />
    </div>

    <form method="POST" @submit.prevent="getHotels">
      <div class="flex flex-wrap -mx-3 mb-6 space">
        <div class="w-full md:w-24 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-nr-adults"
          >
            Adults
          </label>
          <input
            v-model="nr_adults"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-nr-adults"
            type="number"
            name="nr_adults"
            placeholder="2"
          />
        </div>
        <div class="w-full md:w-24 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-nr-children"
          >
            Children
          </label>
          <input
            v-model="nr_child"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-nr-children"
            type="number"
            name="nr_children"
            placeholder="0"
          />
        </div>

        <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
          <label
            class="flex block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
            for="grid-checkout"
          >
            <span class="mr-auto">.</span> <span>.</span>
          </label>
          <HotelDatePicker
            class="w-full bg-gray-200 text-gray-700 border rounded"
            format="YYYY/MM/DD"
            @check-in-changed="setArrivalDate"
            @check-out-changed="setDepartureDate"
          ></HotelDatePicker>
        </div>

        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 hidden md:block"
            for="grid-checkout"
            >.
          </label>
          <div>
            <button
              type="submit"
              class=" appearance-none block w-full bg-teal-500 text-white border-2 border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-teal-900"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HotelDatePicker from "vue-hotel-datepicker";
import moment from "moment";
import vueLoader from "@nulldreams/vue-loading/src/vue-loading";

export default {
  components: { HotelDatePicker, vueLoader },
  name: "IbeSearchBar",
  props: {},
  data() {
    return {
      isSubmitted: false,
      nr_adults: 1,
      nr_child: 0,
      arrival_date: "",
      departure_date: ""
    };
  },
  methods: {
    setArrivalDate(newDate) {
      this.arrival_date = moment(newDate.toUTCString()).format("YYYY-MM-DD");
    },
    setDepartureDate(newDate) {
      this.departure_date = moment(newDate.toUTCString()).format("YYYY-MM-DD");
    },
    getHotels() {
      this.isSubmitted = true;

      console.log(vueLoader);

      axios({
        method: "POST",
        url:
          "https://y6bp6qz2xe.execute-api.us-east-1.amazonaws.com/dev/api/v1/201/ibe/search",
        params: {
          nr_adults: this.nr_adults,
          nr_child: this.nr_child,
          arrival_date: this.arrival_date,
          departure_date: this.departure_date
        }
      })
        .then(res => {
          this.isSubmitted = false;
          this.$store.dispatch("setHotels", res.data);
        })

        .catch(error => {
          this.isSubmitted = false;
          this.$alert(error);
          console.log(error);
        });
    }
  }
};
</script>

<style>
.datepicker__clear-button {
  display: flex;
  justify-content: center;
}

.datepicker__month-button--next {
  background-image: url(../../node_modules/vue-hotel-datepicker/dist/img/ic-arrow-right-green.regular.svg);
}
.datepicker__month-button--prev {
  background-image: url(../../node_modules/vue-hotel-datepicker/dist/img/ic-arrow-right-green.regular.svg);
}
.datepicker__input:first-child {
  background-image: url(../../node_modules/vue-hotel-datepicker/dist/img/ic-arrow-right-datepicker.regular.svg);
}
.datepicker__wrapper {
  background-image: url(../../node_modules/vue-hotel-datepicker/dist/img/calendar_icon.regular.svg);
}
</style>
