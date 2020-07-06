<template>
  <!-- Room List -->
  <div
    class="shadow-sm min-w-full bg-white border border-gray-400 rounded mb-6"
  >
    <div v-if="isSubmitted" class="flex">
      <vue-loader
        direction="middle"
        text="Search results Loading..."
        text-color="#0000ff"
      />
    </div>

    <div class="lg:flex">
      <div
        class="m-2 rounded h-48 lg:h-auto lg:w-1/4 flex-none bg-cover text-center overflow-hidden"
        :style="{ 'background-image': 'url(' + room.image + ')' }"
        title="Woman holding a mug"
      ></div>
      <div
        class="w-full lg:w-3/4   p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ room.title }}
          </div>
          <p class="text-gray-700 text-base">{{ room.summary }}</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <ul class="text-gray-600 leading-none">
              <li
                v-for="card_amenity in room.card_amenities"
                :key="card_amenity.label"
                class="inline-block mr-2"
              >
                <span class="font-bold">{{ card_amenity.label }}</span>
                {{ card_amenity.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-none lg:flex">
      <div
        class=" lg:h-auto lg:w-1/4 flex-none bg-cover text-center overflow-hidden"
      ></div>
      <div
        class="p-4 w-full lg:w-3/4  lg:p-4 lg:px-8 lg:flex lg:flex-col justify-between leading-normal"
      >
        <!-- rates -->
        <div v-for="rate in room.rates" :key="rate.code" class="lg:flex mb-4">
          <div class="w-full lg:w-3/4">
            <h2 class="text-gray-700 text-md lg:text-lg  mb-2">
              {{ rate.title }}
            </h2>
            <p class="text-sm text-gray-700 lg:text-base">{{ rate.summary }}</p>
          </div>
          <div
            class="w-full mt-4  text-center lg:text-right lg:w-1/4 text-right"
          >
            <p class="text-gray-900 font-bold text-2xl ">{{ rate.from }} €</p>
            <p class="text-sm">Per night</p>
            <p class="text-sm text-gray-700">Including Taxes & Fees</p>

            <div class="mt-5">
              <button
                @click="getBookedHotel(rate.code)"
                class="w-full bg-gray-900 text-white rounded px-5 py-2 my-2 uppercase"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vueLoader from "@nulldreams/vue-loading/src/vue-loading";

export default {
  components: { vueLoader },
  name: "IbeRoom",
  props: {
    room: Object,
    title: String,
    image: String
  },
  data() {
    return {
      isSubmitted: false
    };
  },
  methods: {
    getBookedHotel(code) {
      this.isSubmitted = true;

      axios({
        method: "POST",
        url:
          "https://y6bp6qz2xe.execute-api.us-east-1.amazonaws.com/dev/api/v1/201/ibe/reserve",
        params: {
          selected_room_code: this.room.code,
          selected_rate_code: code
        }
      })
        .then(res => {
          this.isSubmitted = false;
          this.$store.dispatch("setBookedHotel", res.data);
        })
        .then(() => {
          this.$router.push("/booking");
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
