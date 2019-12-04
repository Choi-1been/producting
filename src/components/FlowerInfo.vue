<template>
  <div>
    <div class="img__container">
      <img :src="selected.flowerImgSrc" alt="꽃사진" class="flower__img">
    </div>
    <div class="info_container">
      <div class="inform">
      </div>
      <div class="move">
        이름 : {{ selected.name }}<br/>
        꽃말 : {{ selected.floriography }}<br/>
        정보 : {{ selected.info }}<br/>
        가격 : {{ selected.price }}<br/>
        <div class="controller">
          <v-btn class="buy" height="70px" @click="goBack()">취소</v-btn>
          <v-btn class="buy" height="70px" color="success" @click="clickBuy()">자리 선택</v-btn>
        </div>
      </div>
    </div>
<!--    <img :src="selected.seedImgSrc" alt="꽃사진" width="100px"><br/>-->
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default {
    name: "FlowerInfo",
    computed: {
      ...mapGetters(['selected'])
    },
    methods: {
      ...mapMutations({
        changeActiveBtn:'changeActiveBtn'
      }),
      goBack: function () {
        this.$router.go(-1);
      },
      clickBuy: function () {
        this.$router.push('/SelectSector');
        this.changeActiveBtn(2);
      }
    },
  }
</script>

<style scoped>
  .flower__img{
    width: 850px;
    height: 850px;
    object-fit: cover;
    border: 10px pink solid;
  }
  .img__container{
    padding-top: 20px;
    width: 850px;
    height: 850px;
    float: left;
  }
  .inform {
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: white;
    opacity: 0.7;
    position: absolute;
  }
  .move {
    z-index: 3;
    width: 800px;
    position: relative;
    font-size: 40px;
    font-weight: bold;
  }
  .info_container {
    border: 1px gray solid;
    position: relative;
    top: 20px;
    width: 810px;
    height: 850px;
    margin-left: 30px;
    float: left;
  }

  .controller {
    float: right;
  }

  .buy {
    width: 170px;
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }
</style>
