<template>
  <div id="main_page">
    <v-btn class="main_btn" height="400px" @click="clickButton(0)">씨알 구매</v-btn>
    <v-btn class="main_btn right" height="400px" @click="clickButton(1)">텃밭 관리</v-btn>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "MainPage",
    methods: {
      ...mapMutations({
        changeActiveBtn:'changeActiveBtn'
      }),
      clickButton: function (param) {
        if(param){
          this.$router.push('/manage');
          this.changeActiveBtn(1);
        }
        else{
          this.$router.push('selectCR');
          this.changeActiveBtn(1)
        }
      }
    }
  }
</script>

<style scoped>
  .main_btn {
    width: 400px;
    margin-top: 230px;
    margin-left: 200px;
    font-size: 60px;
    font-weight: bold;
  }
  .right {
    margin-left: 600px;
  }
</style>
