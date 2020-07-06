import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hotels: {},
    booked_hotel: {}
  },
  getters: {
    getHotels(state) {
      return state.hotels.data;
    },
    getBookedHotel(state) {
      return state.booked_hotel;
    }
  },
  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels;
    },
    setBookedHotel(state, hotel) {
      state.booked_hotel = hotel;
    }
  },
  actions: {
    setHotels({ commit }, hotels) {
      commit("setHotels", hotels);
    },
    setBookedHotel({ commit }, hotel) {
      commit("setBookedHotel", hotel);
    }
  }
});
