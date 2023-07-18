import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faLocationDot, faStar as FaStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as FaStarRegular } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faPhone, faLocationDot, FaStarSolid, FaStarRegular)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
