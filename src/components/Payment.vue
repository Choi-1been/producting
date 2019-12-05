<template>
  <div style="font-size: 40px; font-weight: bold; ">
    <div class="container__1">
      <div>
        <div>
          <div>
            <img src="@/assets/area.png" width="1000px" alt="">
          </div>
          <div style="text-align: center; margin-right: 70px">
            <span>심을 공간 :</span> <span style="color:#279dff">{{ (selectedArea[0] === 0) ? 'A' : (selectedArea[0] === 2) ? 'C' : 'B' }}구역
            {{ selectedArea[1]+1 }}-{{ selectedArea[2]+1 }}</span>
          </div>
          <div class="pat__container">
            <div>
              <img src="@/assets/sign.jpeg"  style="padding: 20px; border-left: 20px rgba(0,0,0,0) solid ;border-top: 7px pink solid; border-bottom: 7px pink solid;" width="100%" alt="">
            </div>
            <div class="last__container">
              <div>
                <v-btn v-if="!is_checked" color="primary" dark width="100%" height="150px" outlined style="background-color: white;font-size: 32px; font-weight: bold" @click="patBtn(true)">버튼을 눌러 팻말을 구매하세요!<br/>500&#8361;</v-btn>
                <v-btn v-if="is_checked" color="primary" dark width="100%" height="150px" style="background-color: white;font-size: 32px; font-weight: bold" @click="patBtn(false)">버튼을 눌러 팻말을 구매하세요!<br/>500&#8361;</v-btn>
              </div>
              <div class="last__item" v-if="is_checked">
                <span style="padding-left: 20px">이름 입력 : </span>
                <input type="text" v-model="name" style="border-bottom: 5px black solid; text-align: center; margin-left: 20px" size="10">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container__2">
        <div class="payment__items make__hr left"></div>
        <div class="payment__items make__hr right" style="font-size: 36px">가격표</div>
        <div class="payment__items make__hr__small left">{{ selected.name}} 씨앗 1봉지</div>
        <div class="payment__items make__hr__small right">{{ selected.price }}&#8361;</div>
        <div v-show="is_checked" class="payment__items make__hr__small left">팻말</div>
        <div v-show="is_checked" class="payment__items make__hr__small right">500&#8361;</div>
        <div v-show="!is_checked" class="payment__items make__hr__small left">팻말</div>
        <div v-show="!is_checked" class="payment__items make__hr__small right">0&#8361;</div>
        <div class="payment__items make__hr left"></div>
        <div class="payment__items make__hr right"></div>
        <div v-show="!is_checked" class="payment__items make__hr" style="font-size: 40px; margin-top: 6px">합계</div>
        <div v-show="!is_checked" class="payment__items make__hr right"
             style="color:#279dff; font-size:46px; margin-top: -4px">{{ Number(selected.price) }}&#8361;
        </div>
        <div v-show="is_checked" class="payment__items make__hr" style="font-size: 40px; margin-top: 6px">합계</div>
        <div v-show="is_checked" class="payment__items make__hr right" style="color:#279dff; font-size:46px; margin-top: -4px">{{ Number(selected.price) + 500 }}&#8361;
        </div>
        <div @click="pay(1)" class="payment__items" style="font-size: 46px; margin-top: -3px">넣은 돈</div>
        <div v-if="!is_payed" @click="pay(1)" class="payment__items right" style="color:red; font-size:46px; margin-top: -4px">0&#8361;</div>
        <div v-if="is_payed && is_checked" @click="pay(1)" class="payment__items right" style="color:#279dff; font-size:46px; margin-top: -4px">{{ Number(selected.price) + 500 }}&#8361;</div>
        <div v-else-if="is_payed" @click="pay(1)" class="payment__items right" style="color:#279dff; font-size:46px; margin-top: -4px">{{ Number(selected.price) }}&#8361;</div>
        <div class="right" style="padding-right: 23px;"> <v-btn class="buy" height="70px" @click="goBack()">취소</v-btn> </div>
        <div class="controller right">
          <v-btn class="buy" height="70px" disabled v-show="!is_payed" @click="clickBuy()">구매하기</v-btn>
          <v-btn class="buy" height="70px" v-show="is_payed" color="success" @click="clickBuy()">구매하기</v-btn>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "Payment",
    data: function () {
      return {
        is_checked: 0,
        is_payed: false,
        name: ' ',
      }
    },
    computed: {
      ...mapGetters(['selected', 'selectedArea'])
    },
    methods: {
      ...mapMutations({
        changeActiveBtn: 'changeActiveBtn',
        changeName: 'changeName'
      }),
      clickBuy: function () {
        this.$router.push('PaymentLoading');
        this.is_checked = 0;
        this.is_payed = 0;
        this.changeName(this.name);
      },
      goBack: function () {
        this.$router.go(-1);
        this.changeActiveBtn(2);
      },
      patBtn: function (bool) {
        this.is_checked = bool;
      },
      pay: function (bool) {
        this.is_payed = bool;
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .container__1 {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 60% 25% 15%;
  }

  .container__2 {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: 100px 100px 100px 100px 100px 150px;
    position: relative;
    top: 60px;
    left: 100px;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    font-size: 35px;
    margin-top: 8px;
  }

  .left {
    font-size: 30px;
    margin-top: 10px;
  }

  .payment__items {
    padding: 15px;
  }

  .make__hr {
    border-bottom: 3px gray solid;
  }

  .make__hr__small {
    border-bottom: 1px gray solid;
  }

  .pat__container {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .buy {
    width: 170px;
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }

  .last__container {
    padding: 30px;
    display: grid;
    grid-template-rows: 150px 300px;
  }

  .last__item {
    margin-top: 70px;
  }
</style>
