<template>
    <div class="home mx-auto">
        <h1>Restaurants</h1>
        <div v-if="$store.state.restaurants.length" class="card-wrapper">
            <CardView :restaurant="restaurant" v-for="restaurant in $store.state.restaurants" :key="restaurant.name" />
        </div>
        <div v-else>Not found restaurant!</div>
    </div>
</template>

<script>
// @ is an alias to /src
import CardView from './CardView.vue';

export default {
    name: 'HomeView',
    components: {
        CardView
    },
    data() {
        return {
            restaurant: {}
        }
    }
}
</script>

<style lang="scss">
    .home {
        max-width: 1056px;

        h1 {
            text-align: center;
            margin-bottom: 25px;
        }

        .card-wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
    }
</style>
