<template>
    <div class="card border-0 mb-5">
        <div class="card-img">
            <img v-if="restaurant.banner" :src="restaurant.banner" class="card-img" alt="...">
            <div v-else class="card-img"></div>
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <img v-if="restaurant.logo" :src="restaurant.logo" class="rounded-circle logo shadow" alt="...">
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text">{{ restaurant.cousines }}</p>
            <p class="card-text">{{ restaurant.phone }}</p>
            <p class="card-text">{{ restaurant.address }}</p>
            <a href="#" class="btn btn-success btn-shadow">Order</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['restaurant'],
}
</script>

<style lang="scss">
    @import '../assets/scss/global';

    .card {
        width: 480px;
        border-radius: $border-radius;
        box-shadow: $box-shadow-card;

        .card-img, .card-img-overlay {
            width: 480px;
            height: 288px;
            background-color: lightgray;
            border-radius: $border-radius;
        }
    
        .logo {
            max-height: 120px;
            max-width: 120px;
        }
    }
    .btn-shadow {
        box-shadow: $box-shadow-card-button;
    }
</style>