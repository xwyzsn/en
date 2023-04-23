import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import AudioPlayer from '@liripeng/vue-audio-player'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(vue3videoPlay);
app.use(AudioPlayer)


app.mount('#app')
