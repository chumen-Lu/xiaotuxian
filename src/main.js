
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入样式文件
import '@/styles/common.scss'

//引入lazyPlugin插件
import { lazyPlugin } from '@/directives'
import {componentPlugin} from '@/components'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

 