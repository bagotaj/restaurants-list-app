<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    components: {

    },
    async mounted() {
          try {
              if(this.$store.state.restaurants.length > 0) {
                  this.$store.commit('setRestaurantEmpty');
              }
              const response = await fetch('https://lajolla.dev-famished.com/api/restaurants');
              this.$store.state.restaurants = await response.json();
          } catch (error) {
              console.error(error);
          }
      }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
