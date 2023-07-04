<template>
    <div class="iconList">
        <div class="iconItem" @click="$router.push('/')">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>   
            </svg>
            <span>首页</span>
        </div>
        <div class="iconItem" @click="$router.push('/fenlei')">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenlei"></use>   
            </svg>
            <span>分类</span>
        </div>
        <div class="iconItem" @click="$router.push('/me')">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wode"></use>   
            </svg>
            <span>我的</span>
        </div>
        
       <div class="iconItem" @click="$router.push('/searchview')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <span>搜索</span>
      </div>
      

    </div>
</template>

<style lang="less" scoped>
    .iconList{
        background-color: white;
        width: 7.5rem;
        display: flex;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        padding-top: 0.2rem;
        height: 1.5rem;
        justify-content: space-between; //两边布局 向两边靠
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 0.7rem;
                height: 0.7rem;
            }
            span{
                font-size: 0.2rem;
            }
        }

    }
</style>