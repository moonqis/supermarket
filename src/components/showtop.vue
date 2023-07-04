<template>
  <div class="NavTop">
      <div>
          
      </div>
      <div>
        {{Text}}
      </div>
      <div>

      </div>
  </div>
</template>

<script>
export default {
    props:['Text']
}
</script>

<style scoped lang="less">
.NavTop{
    height: 12.889vw;
    background-color: #a0cdeb;
    display: flex;
   
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw; 
    }
   
}

</style>