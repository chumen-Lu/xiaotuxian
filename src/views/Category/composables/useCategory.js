import { onMounted,ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'



export function useCategory(){
    const categoryData = ref ({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) =>{
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
}
    onMounted(() => getCategory())

    onBeforeRouteUpdate((to) => {
        // 存在问题:使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return{
        categoryData
    }

}