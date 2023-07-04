<template>
    <div class="iconList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-geinituijian"></use>   
            </svg>
            <span>推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianqi"></use>   
            </svg>
            <span>电器</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiaju"></use>   
            </svg>
            <span>家具</span>
        </div>
        
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fuzhuang"></use>   
            </svg>
            <span>服装</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin_jitui"></use>   
            </svg>
            <span>食品</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .iconList{
        width: 7.5rem;
        display: flex;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-between; //两边布局 向两边靠
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 0.7rem;
                height: 0.6rem;
            }
            span{
                font-size: 0.2rem;
            }
        }

    }
</style>