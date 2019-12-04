<template>
  <div style="font-size: 40px; font-weight: bold; ">
    <div>
      자리 : {{ (selectedArea[0] === 0) ? 'A' : (selectedArea[0] === 2) ? 'C' : 'B' }}구역
      {{ selectedArea[1]+1 }}-{{ selectedArea[2]+1 }}

      <div v-if="is_checked">가격 : {{ Number(selected.price)+500 }}원</div>
      <div v-else>가격 : {{ selected.price }}원</div>
      <img src="@/assets/sign.jpeg" width="500px" alt="">
      <v-checkbox
          v-model="is_checked"
          label="팻말 구매하실건가요?"

      ></v-checkbox>
      <div v-if="is_checked">
        <v-text-field
            v-model="name"
            label="이름을 입력해주세요"
            style="width:250px"
        ></v-text-field>
      </div>
    </div>

    <div class="controller">
      <v-btn class="buy" @click="goBack()">취소</v-btn>
      <v-btn class="buy" @click="clickBuy()">결제하기</v-btn>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: "Payment",
    data: function (){
      return {
        is_checked: 0,
        name: null,
      }
    },
    computed: {
      ...mapGetters(['selected', 'selectedArea'])
    },
    methods: {
      ...mapMutations({
        changeActiveBtn:'changeActiveBtn'
      }),
      clickBuy: function () {
        this.$router.push('PaymentLoading');
      },
      goBack: function () {
        this.$router.go(-1);
        this.changeActiveBtn(2);
      },
    },
    created() {
      console.log(this.selectedArea);
    }
  }
</script>

<style scoped>

</style>
