<template>
  <div>
    <div class="title-text">관리모드</div>
    <div class="container">
      <div class="select__zone">
        <br>
        <br>
        <br>
        <div class="fill">
          <div class="column"
               v-for="(column, columnNum) in getArea[page]"
               :key="columnNum">

            <div v-for="(row, rowNum) in column"
                 :key="rowNum">

              <v-btn v-if="(row === 0)"
                     class="box"
                     disabled
                     width="150px"
                     color="rgba(190,95,20,0.9)"
                     height="150px"
                     @click="clickBox(page, columnNum, rowNum)">
                {{ Number(columnNum) + 1 }} - {{ Number(rowNum) + 1 }}
              </v-btn>

              <v-btn v-else
                     class="box disable"
                     width="150px"
                     color="rgba(190,95,20,0.9)"
                     height="150px"
                     @click="clickBox(page, columnNum, rowNum)">
                {{ row }} <input type="checkbox" style="width: 20px; height: 20px">
              </v-btn>

            </div>
          </div>
        </div>
        <div class="select__area" >
        </div>
      </div>
    </div>
    <div class="controller">
      <v-btn class="buy" height="70px" @click="goBack()">홈으로</v-btn>
      <v-btn class="buy" height="70px" color="primary" @click="clickBuy()">확인하기</v-btn>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "SelectArea",
    data: function () {
      return {
        is_click: 0,
        is_sector: 0,
        page: 0,
        y: 0,
        x: 0,
      }
    },
    computed: {
      ...mapGetters({
        getArea: 'getArea',
        getAreas: 'getAreas',
      }),
    },
    methods: {
      ...mapMutations({
        selectArea: 'selectArea',
        changeActiveBtn: 'changeActiveBtn'
      }),
      clickBuy: function () {
        this.is_click = 0;
        this.$router.push('/');
        this.changeActiveBtn(0);
      },
      clickPage: function (paging) {
        this.page = paging;
        this.is_sector = 0;
      },
      goBack: function () {
        this.$router.go(-1);
      },
      clickBox: function (page, col, row) {
        let param = [];
        param.push(Number(page));
        param.push(Number(col));
        param.push(Number(row));

        this.selectArea(param);

        this.y = col;
        this.x = row;
        this.is_click = 1;
        this.is_sector = 1;
      }
    },
    created() {
      this.page = 1;
    }
  }
</script>

<style scoped>
  .table__paging {
    padding-left: 580px;
    float: left;
  }

  .paging__index {
    width: 150px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 25px;
    font-weight: bold;
  }

  .column {
    display: grid;
    grid-template-columns: 160px 160px 160px 160px 160px 160px 160px 160px 160px 160px;
    grid-template-rows: 160px;
  }

  .box {
    float: left;
    color: white;
    font-weight: bold;
    font-size: 25px;
  }

  .fill {
    width: calc(100% - 110px);
    padding-top: 20px;
    height: 510px;
    padding-left: 30px;
    background-color: rgba(160,98,26,0.80);
  }

  .select__area {
    font-weight: bold;
    font-size: 60px;
    color: #5182ac;
    padding-left: 650px;
    margin-top: 10px;
    width: 100%;
    float: left;
  }

  .controller {
    float: right;
    padding-right: 100px;
    position: relative;
  }

  .buy {
    width: 170px;
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }

  .text-display {
    display: none;
  }

  .text-ondisplay {
    display: inline;
  }

  .active {
    border: 1px gray solid
  }

</style>
