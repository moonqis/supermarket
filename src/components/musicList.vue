<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">推荐商品</div>
            <div class="more" @click="$router.push('/fenlei')">更多></div>
        </div>

    </div>
</template>

<script>

    export default{

        }

</script>


<style lang="less" scoped>
.musicList{
    width: 7.5rem;
    padding: 0 0.4rem;

    .musicList-top{
        display: flex;
        justify-content: space-between;
        height: 1rem;
        align-items: center;
        .title{
            font-size: 0.4rem;
            font-weight: 600;

        }

    }
    
}
</style>