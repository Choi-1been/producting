<template>
  <div>
    결제완료~!
    <v-btn @click="goHome()">홈 화면으로</v-btn>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "finish",
    methods: {
      ...mapMutations({
        changeActiveBtn:'changeActiveBtn'
      }),
      goHome: function () {
        this.$router.push('/');
        this.changeActiveBtn(0);
      }
    }
  }
</script>

<style scoped>

</style>
