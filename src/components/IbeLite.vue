<template>
    <div class="mt-8 mx-auto max-w-5xl bg-white bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">

        <IbeSearchBar></IbeSearchBar>
        <IbeRoomList></IbeRoomList>
    </div>
</template>

<script>

    import IbeSearchBar from "./IbeSearchBar";
    import IbeRoomList from "./IbeRoomList";

    export default {
        components: {
            IbeSearchBar,
            IbeRoomList
            },
        name: 'IbeLite',
        props: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
