<template>
  <div id="main_page">
    <div class="main_btn_container_left">
      <v-btn class="main_btn" fab height="400px" color="cyan" dark @click="clickButton(0)">
        <v-icon size="70" class="main-icon">mdi-seed</v-icon>
        씨앗 구매
      </v-btn>
    </div>
    <div class="main_btn_container_right">
      <v-btn class="main_btn" fab color="teal" dark height="400px" @click="clickButton(1)">
        <v-icon size="70" class="main-icon">mdi-account</v-icon>
        텃밭 관리
      </v-btn>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "MainPage",
    methods: {
      ...mapMutations({
        changeActiveBtn: 'changeActiveBtn'
      }),
      clickButton: function (param) {
        if (param) {
          this.$router.push('/manage');
          this.changeActiveBtn(1);
        } else {
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
    font-size: 60px;
    font-weight: bold;
  }

  .main_btn_container_left {
    float: left;
    margin-top: 230px;
    margin-left: 70px;
    padding: 10px;
    border: 10px #89def3 solid;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .main_btn_container_right {
    float: left;
    margin-top: 230px;
    margin-left: 670px;
    padding: 10px;
    border: 10px #4fcdaa solid;
    border-radius: 1000px;
  }

</style>
