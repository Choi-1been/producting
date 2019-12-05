<template>
  <div class="container__all">
    <div class="loading" style="font-size: 100px; font-weight: bold;">
      결제중입니다.......
    </div>
  </div>
</template>

<script>
  export default {
    name: "PaymentLoading",
    created() {
      setTimeout(function () {
      },1000)
      setTimeout(() => {
        this.$router.push('/finish')
      }, 3000 );
    }
  }
</script>

<style scoped>
  .loading {
    background-color: white;
    margin-top: 500px;
    display: flex;
    justify-content: center;
  }
  .container__all {
    width: 1920px;
    height: 1200px;
    float:left;
    position: relative;
    top: -200px;
    right: 100px;
    background-color: rgba(0,0,0,0.5);
  }
</style>
