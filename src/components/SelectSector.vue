<template>
  <div>
    <div class="title-text">구역을 선택해주세요!</div> <br>
    <img src="@/assets/area.png" class="sector__img">
    <br>
    <button @click="choose(0)" class="btn-a">구역 A</button>
    <button @click="choose(1)" class="btn-b btn-a">구역 B</button>
    <button @click="choose(2)" class="btn-a btn-c">구역 C</button>
    <v-btn v-if="(selected)" @click="notPlant()" disabled color="success" width="400px" height="100px" style="font-size: 30px; font-weight: bold; background-color: white;" outlined>안 심고갈래요!</v-btn>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: "SelectSector",
    methods: {
      ...mapMutations({
        selectSector: 'selectSector'
      }),
      choose: function (param) {
        this.$router.push('/Manage')
        this.selectSector(param)
      },
      notPlant: function () {
        this.$router.push('/Payment');
      }
    }
  }
</script>

<style scoped>
  .sector__img {
    padding-top: 20px;
    width: 1700px;
  }
  .btn-a {
    position: relative;
    top: -485px;
    left: 240px;
    width: 200px;
    height: 150px;
    background-color: white;
    color: black;
    font-size: 50px;
    font-weight: bold;
    font-family: sans-serif;
    border-radius: 15px;
    box-shadow: rgba(0,0,0,0.56) 5px 7px;
  }
  .btn-b {
    top: -495px;
    left: 480px;
  }
  .btn-c {
    top: -400px;
    left: 860px;
  }
  .title-text {
    font-size: 40px;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 30px;
  }
</style>
