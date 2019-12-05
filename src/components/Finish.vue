<template>
  <div class="last__container">
    <div class="left__image">
      <img src="@/assets/service_ex.png" height="930px" alt="">
    </div>
    <div class="qr__container">
      <div class="text__qr">
        내 식물의 정보를 <br> 실시간으로 알아보세요!
      </div>
      <div style="text-align: center; font-size: 50px; font-weight: bold; color: rgba(39,157,255,1)">
        카카오채널 씨알자판기
      </div>
      <div>
        <img src="@/assets/qrcode.png" width="80%" style="margin-left: 10%" alt="">
      </div>
      <v-btn style="font-weight: bold;font-size: 46px; margin-left: 100px; margin-top: 10px" color="primary" height="100px" width="400px" outlined @click="goHome()">추가했어요!</v-btn>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: "finish",
    computed: {
      ...mapGetters({
        selectedArea: 'selectedArea',
        getname: 'getname'
      })
    },
    methods: {
      ...mapMutations({
        changeActiveBtn: 'changeActiveBtn',
        inputArea: 'inputArea'
      }),
      goHome: function () {
        this.$router.push('/');
        this.changeActiveBtn(0);
      }
    },
    created() {
      let lastInput = Array();
      lastInput[0] = this.selectedArea[0];
      lastInput[1] = this.selectedArea[1];
      lastInput[2] = this.selectedArea[2];
      lastInput[3] = this.getname;
      this.inputArea(lastInput);
    }
  }
</script>

<style scoped>
  .left__image {
    position: relative;
    right: 400px;
  }

  .last__container {
    display: grid;
    grid-template-columns: 50% 37% 13%;
    grid-template-rows: 880px;
  }

  .qr__container {
    border: 5px pink solid;
    background-color: white;
    padding: 30px;
  }

  .text__qr {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
  }
</style>
