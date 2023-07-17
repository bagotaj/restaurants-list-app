<template>
    <div class="card border-0 mx-auto mb-5">
        <div class="card-img">
            <img v-if="restaurant.banner" :src="restaurant.banner" class="card-img" alt="...">
            <div v-else class="card-img card-no-img"></div>
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <img v-if="restaurant.logo" :src="restaurant.logo" class="rounded-circle logo" alt="...">
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text text-truncate">{{ restaurant.cousines }}</p>
            <p class="card-text">{{ restaurant.phone }}</p>
            <p class="card-text">{{ restaurant.address }}</p>
            <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-success btn-shadow">Order</a>
            </div>
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
            border-radius: $border-radius;
        }

        .card-no-img {
            background-color: $secondary-color-light;
        }
    
        .logo {
            height: 120px;
            width: 120px;
            box-shadow: $box-shadow-logo;
        }
    }

    .btn-shadow {
        box-shadow: $box-shadow-card-button;
    }

    .shadow {
        color: $secondary-color;
    }
</style>