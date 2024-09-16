import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routes/routes'
import VueApexCharts from "vue3-apexcharts";

createApp(App)
.use(router)
.use(VueApexCharts)
.mount('#app')

router.isReady().then(() => {
  console.log('All routes are loaded!')
})
