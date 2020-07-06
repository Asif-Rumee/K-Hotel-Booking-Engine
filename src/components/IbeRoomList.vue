<template>
  <div class="w-full">
    <ul v-for="hotel in this.$store.getters.getHotels" :key="hotel[0]">
      <li class="my-5">
        <IbeRoom :room="hotel"></IbeRoom>
      </li>
    </ul>
  </div>
</template>

<script>
import IbeRoom from "./IbeRoom";
export default {
  components: {
    IbeRoom
  },
  data: function() {
    return {};
  },
  name: "IbeRoomList",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
