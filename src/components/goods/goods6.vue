<template>
  <n-back-top :listen-to="target" :bottom="60" :visibility-height="80">
    <div
      style="
        width: 80px;
        height: 30px;
        line-height: 35px;
        text-align: center;
        font-size: 12px;
      "
    >
      返回顶部
    </div>
  </n-back-top>
  <div
    ref="scrollContainer"
    style="overflow: auto; height: 300px; line-height: 1.5">

  <n-space justify="space-around" size="large">
    <img :src="img1" class="Iimg"/>
    <img :src="img2" class="Iimg"/>
  </n-space>

  <n-space justify="space-around" size="large">
    <span>地板</span>
    <span>木板</span>
  </n-space>






  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
      data () {
				return {
                    img1:require('@/assets/img/25.png'),
                    img2:require('@/assets/img/26.png')
				  }
		 },
  setup() {
    const scrollContainerRef = ref(null);
    return {
      scrollContainer: scrollContainerRef,
      target: () => scrollContainerRef.value
    };
  }
});
</script>

<style scoped>
.Iimg{
    padding-top: 10px;
    height: 130px;
}
</style>

