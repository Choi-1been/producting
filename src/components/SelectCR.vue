<template>
  <div>
    <div>
      <div style="padding-top: 50px;">
        <v-card
            shaped
            raised
            class="white--text align-end flower__card"
            v-for="(seed,index) in seeds"
            :key="index"
            @click="select(index)">
          <v-img
              :src="seed.flowerImgSrc"
              class="align-end flower__img"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
            <v-card-title class="title__zone">
              <div class="title__text">
                {{ seed.name }}
              </div>
            </v-card-title>
          </v-img>
        </v-card>
        <v-card
            shaped
            raised
            class="white--text align-end flower__card">
          <v-img src="@/assets/adding_data.png">

          </v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  export default {
    name: "SelectCR",
    data: function () {
      return {

      }
    },
    methods: {
      ...mapMutations(['selectingSeed']),
      select: function (param) {
        this.selectingSeed(param);
        this.$router.push('/FlowerInfo');
      },
      goBack: function () {
        this.$router.go(-1);
      },
    },
    computed: {
      ...mapState({
        seeds: "seeds"
      }),
      ...mapGetters({
        selected: "selected"
      })
    }
  }
</script>

<style scoped>
  .title__zone{
    background-color: black;
    float:right;
    font-size: 40px;
    font-weight: bold;
    opacity: 0.8;
    font-family: NanumSquareOTF;
  }
  .flower__img{
    height: 380px;
  }
  .title__text{
    color: white;
    opacity: 1;
  }
  .flower__card{
    width: 380px;
    margin-left: 40px;
    float: left;
    margin-bottom: 50px;
  }
  .cancel{
    float:left;
  }

</style>
