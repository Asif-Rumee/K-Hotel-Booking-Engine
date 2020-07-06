<template>
  <div
    class="mt-8 mx-auto max-w-5xl bg-white bg-gray-100 rounded px-8 pt-6 pb-8 mb-4"
  >
    <div class="bg-gray-100 mx-auto rounded">
      <br />

      <router-link
        :to="{ name: 'home' }"
        class="w-1/5 border-b border-blue-500 text-blue-500 rounded text-xl px-2 py-1 my-10"
      >
        &lt; Return to room listing</router-link
      >
      <br />
      <br />
      <br />
      <br />

      <div class="flex justify-center bm-5">
        <p class="text-3xl">Your booking summary</p>
      </div>
      <br />
      <br />
      <br />

      <div class="flex flex-row">
        <div class="w-1/4">
          <img
            class="m-2 rounded h-48 lg:h-auto lg:w-3/4 flex-none bg-cover text-center overflow-hidden"
            :src="this.$store.getters.getBookedHotel.room.image"
          />
        </div>
        <div class="w-2/4">
          <p>
            Selected Room:
            <span class="font-semibold">{{
              this.$store.getters.getBookedHotel.room.title
            }}</span>
          </p>
          <p>
            <span class="font-semibold"
              >{{ this.$store.getters.getBookedHotel.nr_adults }}
            </span>
            adults and
            <span class="font-semibold">
              {{ this.$store.getters.getBookedHotel.nr_child }}
            </span>
            child
          </p>
          <p>
            Stay from
            <span class="font-semibold"
              >{{ this.$store.getters.getBookedHotel.arrival_date }}

              > {{ this.$store.getters.getBookedHotel.departure_date }} ({{
                this.$store.getters.getBookedHotel.nr_nights
              }}
              nights)</span
            >
          </p>
        </div>
        <div class="flex flex-row-reverse w-1/4">
          <div class="">
            <div class="text-xl flex flex-row-reverse bg-white">
              {{ this.$store.getters.getBookedHotel.total_amount }} €
            </div>
            <p class="flex flex-row-reverse bg-white">
              For the {{ this.$store.getters.getBookedHotel.nr_nights }}
              nights
            </p>
            <p class="flex flex-row-reverse bg-white">
              Including Taxes & Fees
            </p>
          </div>
        </div>
      </div>
      <hr class="bar my-1" />
      <hr class="bar my-1" />

      <!-- Content -->

      <form action="">
        <div class="py-8">
          <div class="py-4 text-black text-xl">
            Your Personal Details
          </div>
          <div class="py-4">
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker text-a leading-tight block focus: outline-none focus:shadow-outline"
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="w-1/2 ml-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="mb-4">
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="address"
                type="text"
                placeholder="Your Address"
                required
              />
            </div>
            <div class="flex mb-4">
              <div class="w-1/2 mr-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="zip_code"
                  type="text"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div class="w-1/2 ml-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="city"
                  type="text"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-4">
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="country"
                type="country"
                placeholder="Country"
                required
              />
            </div>
            <div class="flex mb-5">
              <div class="w-1/2 mr-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="w-1/2 ml-1">
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="phone_number"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <hr class="bar my-1" />
            <hr class="bar my-1" />

            <div class="py-4 text-black text-xl">
              Your Payment Details
            </div>

            <div class="flex mb-4">
              <div class="w-1/2">
                <div class="mb-4">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="creditcard_name"
                    type="text"
                    placeholder="Credit Card Name"
                    required
                  />
                </div>

                <div class="mb-4">
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="credit_card_number"
                    type="number"
                    placeholder="Credit Card Number"
                    required
                  />
                </div>
                <div class="flex mb-4">
                  <div class="w-1/2 mr-1">
                    <input
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="expire_date"
                      type="date"
                      placeholder="Expire Date"
                      required
                    />
                  </div>
                  <div class="w-1/2 ml-1">
                    <input
                      class="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="cvv"
                      type="number"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="w-1/2">
                <img
                  class="m-2 rounded h-40 lg:h-auto lg:w-1/4 flex-none bg-cover
              text-center overflow-hidden ml-20"
                  src="@/assets/images/customer.png"
                />
              </div>
            </div>

            <div class="flex justify-center mb-4 my-20">
              <button
                type="submit"
                class=" appearance-none block w-full bg-teal-500 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-teal-900"
              >
                Complete Reservation
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IbeRoomBook"
};
</script>
<style scoped>
.bar {
  height: 1px;
  background-color: black;
  border: none;
}
</style>
