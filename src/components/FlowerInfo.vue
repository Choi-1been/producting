<template>
  <div>
    <div class="img__container">
      <img :src="selected.flowerImgSrc" alt="꽃사진" class="flower__img">
    </div>
    <div class="info_container">
      <div class="inform">
      </div>
      <div class="move">
        <div class="contents__container">
          <div class="contents_items">이름</div><div class="contents_items">{{ selected.name }}</div>
          <div class="contents_items">꽃말</div><div class="contents_items">{{ selected.floriography }}</div>
          <div class="contents_items">정보</div><div class="contents_items">{{ selected.info }}</div>
          <div class="contents_items">가격</div><div class="contents_items">{{ selected.price }}원</div>
        </div>
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
    height: 750px;
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
    position: relative;
    top: 20px;
    width: 800px;
    height: 750px;
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

  .contents__container {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100px 200px 350px 100px;
    border: 5px solid rgba(0,0,0,0.3);
  }

  .contents_items {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(0,0,0,0.3);
    padding-left: 15px;
    padding-right: 15px;
  }

  .controller {
    margin-top: 20px;
  }
</style>
