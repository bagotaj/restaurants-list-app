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
                <div class="d-flex position-absolute bottom-0 end-0 mb-3 me-3">
                    <div class="d-flex justify-content-between align-items-center rounded-pill btn-shadow ratings me-3">
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
        <div class="card-body position-relative">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p v-if="restaurant.cousines" class="card-text text-truncate text-truncate-fix-width">{{ restaurant.cousines.replaceAll(',',', ').replaceAll('&Amp;','&') }}</p>
            <p v-if="restaurant.phone" class="card-text"><font-awesome-icon :icon="['fas', 'phone']" class="me-2" />{{ restaurant.phone }}</p>
            <p v-if="restaurant.address" class="card-text"><font-awesome-icon :icon="['fas', 'location-dot']" class="me-2" />{{ restaurant.address }}</p>
            <div class="d-flex justify-content-end position-absolute bottom-0 end-0 mb-3 me-3">
                <a href="#" class="btn btn-success rounded-pill btn-shadow" @click="warningWindow">Order</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['restaurant'],
    methods: {
        warningWindow() {
            alert('Thank you for your order!')
        }
    },
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

    h5 {
        margin-bottom: 1rem !important;
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

    .text-truncate-fix-width {
        display: inline-block;
        max-width: 250px;
    }

    @media (max-width: 425px) {
        .card {
            width: 90%;

            .card-img, .card-img-overlay {
                width: 100%;
            }
        }
    }
</style>