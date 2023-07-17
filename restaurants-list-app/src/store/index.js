import { createStore } from 'vuex'

export default createStore({
    state: {
        restaurants: [],
    },
    getters: {
    },
    mutations: {
        setRestaurantEmpty(state) {
            state.restaurants = [];
        },
    },
    actions: {
    },
    modules: {
    }
})
