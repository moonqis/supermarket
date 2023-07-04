<template>
<div>
        <router-view v-slot="{Component}">
            <keep-alive>
                <transition name="slide-fade">
                    <component :is="Component" />
                </transition>
            </keep-alive>
        </router-view>
</div>
</template>


<script>
export default{

}
</script>



<style type="less" scope>

    *{
      margin: 0; 
      padding: 0;
      box-sizing: border-box;
      font-family: '微软雅黑';
    }
    .icon {
       width: 0.3rem; height: 0.3rem;
       /* vertical-align: -0.15rem; */
       fill: currentColor;
       overflow: hidden;
    }

    a{
      color: #333;
      text-decoration: none;
    }
.slide-fade{
  position: fixed;left:0;right: 0;
  width: 80%;
  background-color: white;
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;top: 0;right: 0;
  position: absolute;
  transform:translateX(-100px) translateY(-400px) rotate(-150deg) scale(0.5);
  opacity:1;
}
.slide-fade-enter-active {
  background-color: white;
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s ease;
  background-color: white;
  transform:translateX(400px) translateY(100px) rotate(100deg) scale(0.8) ;
  z-index: 100;
}
/* .fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter {
  transform: translateX(100%);
  opacity: 0.5;
}
.fade-leave-to {
  transform: translateX(-50%);
    opacity: 0;

} */

</style>
