<template>
  <div>
    결제화면이예용
    돈을 넣었는지 확인중입니다.....
  </div>
</template>

<script>
  export default {
    name: "PaymentLoading",
    created() {
      setTimeout(function () {
        console.log(this)
      },1000)
      setTimeout(() => {
        console.log(this)
        this.$router.push('/finish')
      }, 3000 );
    }
  }
</script>

<style scoped>

</style>
