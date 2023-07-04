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
    <span>手机</span>
    <span>平板</span>
  </n-space>
    <n-space justify="space-around" size="large">

    <img :src="img3" class="Iimg"/>
    <img :src="img4" class="Iimg"/>
  </n-space>
    <n-space justify="space-around" size="large">
    <span>装修</span>
    <span>家居</span>
  </n-space>
    <n-space justify="space-around" size="large">

    <img :src="img5" class="Iimg"/>
    <img :src="img6" class="Iimg"/>
  </n-space>

    <n-space justify="space-around" size="large">
    <span>夹克</span>
    <span>T恤</span>
  </n-space>

      <n-space justify="space-around" size="large">

    <img :src="img7" class="Iimg"/>
    <img :src="img8" class="Iimg"/>
  </n-space>

    <n-space justify="space-around" size="large">
    <span>推荐</span>
    <span>推荐</span>
  </n-space>





  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
      data () {
				return {
                    img1:require('@/assets/img/11.png'),
                    img2:require('@/assets/img/12.png'),
				 	img3:require('@/assets/img/21.png'),
                    img4:require('@/assets/img/22.png'),
                    img5:require('@/assets/img/31.png'),
                    img6:require('@/assets/img/32.png'),
                    img7:require('@/assets/img/21.png'),
                    img8:require('@/assets/img/21.png')
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

