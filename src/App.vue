<template>
  <v-app>
    <v-app-bar
        app
        height="125px"
        flat
        style="background:transparent; border:none; color:transparent;"
        @click="clickLogo()"
    >
    </v-app-bar>

    <v-content class="ground">
      <div class="my__container">
        <transition
            name="fade"
            mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </v-content>
    <v-bottom-navigation
        height="125px"
        background-color="#fbb3c7"
        color="white"
        shift
        class="footer__css"
        :value="activeBtn"
    >
      <v-btn>
        <span class="footer-text">유형 선택</span>
        <v-icon size="60" class="footer-icon">mdi-account</v-icon>
      </v-btn>
      <v-icon size="40" class="footer__arrow">mdi-arrow-right</v-icon>
      <v-btn>
        <span class="footer-text">씨앗 선택</span>
        <v-icon size="60" class="footer-icon">mdi-seed</v-icon>
      </v-btn>
      <v-icon size="40" class="footer__arrow">mdi-arrow-right</v-icon>
      <v-btn>
        <span class="footer-text">자리 선택</span>
        <v-icon size="60" class="footer-icon">mdi-square</v-icon>
      </v-btn>
      <v-icon size="40" class="footer__arrow">mdi-arrow-right</v-icon>
      <v-btn>
        <span class="footer-text">구매</span>
        <v-icon size="60" class="footer-icon">mdi-coin</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default {
    name: 'App',

    data: () => ({
      //
    }),
    computed: {
      ...mapGetters({
        activeBtn:'activeBtn'
      })
    },
    methods: {
      ...mapMutations({
        changeActiveBtn:'changeActiveBtn'
      }),
      clickLogo: function () {
        this.$router.push('/');
        this.changeActiveBtn(0);
      }
    }
  };
</script>

<style>
  .my__container{
    padding-top: 40px;
    padding-left: 100px;
  }
  .footer-icon{
    width: 130px;
    height: 100px;
    margin-top: 60px;
  }
  .footer-text{
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
  }
  .footer__css{

  }
  .ground{
    background-image: url("./assets/crvending_logo_5.png");
    height: 1000px;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background-position-x: 500px;
    background-position-y: -30px;
    background-size: cover;
  }

  .title-text {
    font-size: 40px;
    font-weight: bold;
    padding-top: 30px;
    padding-left: 30px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
