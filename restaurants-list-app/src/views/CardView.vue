<template>
    <div class="card border-0 mx-auto mb-5">
        <div class="card-img">
            <img v-if="restaurant.banner" :src="restaurant.banner" class="card-img" alt="...">
            <div v-else class="card-img card-no-img"></div>
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
                <div>
                    <img v-if="restaurant.logo" :src="restaurant.logo" class="rounded-circle logo" alt="...">
                    <div v-else class="rounded-circle logo card-no-img"></div>
                </div>
                <div class="d-flex">
                    <div class="d-flex justify-content-between align-items-center rounded-pill btn-shadow ratings">
                        <font-awesome-icon :icon="['fas', 'star']" class="rating-color" />
                        <font-awesome-icon :icon="['far', 'star']" />
                        <font-awesome-icon :icon="['far', 'star']" />
                        <font-awesome-icon :icon="['far', 'star']" />
                        <font-awesome-icon :icon="['far', 'star']" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center rounded-pill btn-shadow price">
                        $ {{ restaurant.price }}
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div>
                <h5 class="card-title">{{ restaurant.name }}</h5>
                <p class="card-text text-truncate">{{ restaurant.cousines }}</p>
                <p class="card-text"><font-awesome-icon :icon="['fas', 'phone']" />{{ restaurant.phone }}</p>
                <p class="card-text"><font-awesome-icon :icon="['fas', 'location-dot']" />{{ restaurant.address }}</p>
            </div>
            <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-success rounded-pill btn-shadow">Order</a>
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

    .ratings, .price {
        padding: 0.5rem;
        background-color: $primary-bg-color;
    }

    .rating-color{
        color:#fbc634 !important;
    }
</style>