<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试 -->
  <HomePanel title="新鲜好物" sub-title="欣欣好物 "> 
<div>
    chacao
  </div></HomePanel>
 
  <HomePanel title="人气推荐" sub-title="人气推荐 ">
    <div>
    插槽
  </div>
  </HomePanel>
  
</template>