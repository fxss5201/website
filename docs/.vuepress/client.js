import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import { useRouter } from 'vue-router'

export default defineClientConfig({
  layouts: {
    Layout,
  },
  setup(){
    const router = useRouter()
    router.beforeEach((to, from, next) => {
      if (typeof _hmt !== "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath])
        }
      }
      
      next()
    })
  },
})