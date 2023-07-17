<template>
    <div class="home">
        <h1>Restaurants</h1>
        <div v-if="$store.state.restaurants.length" class="container">
            <div v-for="restaurant in $store.state.restaurants" :key="restaurant.name" class="">
                <CardView :restaurant="restaurant" />
            </div>
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
  
</style>
