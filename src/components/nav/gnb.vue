<template>
  <div>
    <div class="gnb">
      <img src="@/assets/logo.jpg"
           class="gnb__logo"
          @click="clickLogo()">
      <div class="gnb__text">
        상단바입니다아아아 씨알 자판기예용
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gnb",
    methods: {
      clickLogo: function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .gnb {
    width: 100%;
    border: 1px gray solid;
    float:left;
  }
  .gnb__logo {
    width: 80px;
    float:left;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    margin-right: -100px;
  }
  .gnb__text {
    font-size: 20px;
    text-align: center;
    padding-top: 50px;
  }
</style>
