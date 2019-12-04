import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedSeed: null,
    waiting:0,
    activeBtn:0,
    seeds: [
      {
        /* 3 월 심기
        3-6개월 정도 걸림. */
        name: '라벤더',
        price: '300 ',
        info: '라벤더는 꿀풀과의 상록 여러해살이풀로, 지중해 연안이 원산지다. 허브차, 아로마테라피, 관상용으로 이용된다. 봄에 보라색이나 흰색 또는 분홍색의 꽃을 핀다 ',
        floriography: '꽃말은 "침묵"으로, 흥분을 가라 앉히는 진정제 효과가 있는데서 이러한 꽃말이 생겼다 ',
        flowerImgSrc: 'http://www.womansense.org/imgdata/jb_breaknews_com/201406/2014062119295558.jpg',
        seedImgSrc: 'http://ogok.co.kr/data/editor/goods/1/2017/08/4724_15031299882800.jpg '
      },
      {
        /* 6,9 월 심기
        매년 자람. */
        name: '채송화 ',
        price: '300 ',
        info: '양지바른 곳이면 어디서나 잘 자란다. 또 꽃은 7~10월에 피고 맑은날 낮에 피며 오후 2시경에 시든다 . 꽃 한송이의 수명은 짧으나 다른 꽃이 계속 피므로 오랫동안 꽃을 보고 즐길 수가 있다. ',
        floriography: '천진난만, 순진함, 가련',
        flowerImgSrc: 'https://mblogthumb-phinf.pstatic.net/20160607_201/kdy3748_14653045015114WAvl_JPEG/086.JPG?type=w800 ',
        seedImgSrc: 'https://mblogthumb-phinf.pstatic.net/20160601_155/syjeong29_1464728360860x9Qet_JPEG/%25EC%25B1%2584%25EC%2586%25A1%25ED%2599%2594_%25EA%25BD%2583%25EC%2594%25A8.jpg?type=w800 '
      },
      {
        name: '안개꽃 ',
        price: '300 ',
        info: '5~6월에 활동. 보기와 다르게 튼튼하다. 추위에 강하고 보기와 달리 튼튼하다. 관상용, 꽃꼿이용, 드라이플라워로 인기가 많다. ',
        floriography: '기쁨의 순간, 사랑의 성공, 죽도록 사랑해 ',
        flowerImgSrc: 'https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4OTZ/image/Led1ZTgWU8dfdYEc5tW-61CWRlU ',
        seedImgSrc: 'http://cfile232.uf.daum.net/image/1437384E5062AAED29C421'
        /*
         5~6월에 자잘하고 흰 꽃이 무리지어 핀다.
        꽃잎은 5장이고, 끝이 오목하다. 담홍색이나 선홍색의 품종도 있으며, 캅카스 원산으로 화단 및 꽃꽂이용으로 재배한다. 안개꽃은 한해살이풀로 가장 대중적인 품종은 흰꽃인 코벤트 가든 마킷이다. 이 꽃은 추위에 강한 올피기의 대륜인데, 화단심기와 절화용으로 인기가 있다. 붉은꽃에는 크림손·카르미네아가 있으며, 적화종은 소륜으로 키가 40∼50cm로 약간 크게 자란다.

        크기 : 30~45cm
        개화시기 : 5~8월
        원산지 : 카프카스 등 아시아
        파종 : 가을 파종 - 9월, 봄 파종 - 3월 하순~4월 상순
        */
      },
      {
        name: '국화 ',
        price: '300 ',
        info: '국화는 관상용으로 널리 쓰이며, 많은 원예 품종이 있다. 기온이 낮은 가을에 피는 특성으로 동양에서는 절개를 지키는 군자의 상징으로 삼았다. ',
        floriography: '진실, 짝사랑, 성실',
        flowerImgSrc: 'http://dn.joongdo.co.kr/mnt/images/file/2018y/10m/19d/2018101901001756600076011.jpg ',
        seedImgSrc: 'http://holyabba.com/wp/wp-content/uploads/2019/05/cornflower-seed-collecting-20190521-9.jpeg '
        /*
        국화속은 보통 여러해살이풀로서 줄기는 다소 목질화하고 겨울이면 지상부가 말라 죽으며 뿌리로 월동한다. 꽃은 두상화로 가을에 피는데 설상화와 관상화
        산국
        산과 들에서 자라며, 줄기는 높이 1 ~ 1.5m이고 위쪽에서 가지를 많이 치며 흰털이 나 있다. 10 ~ 11월에 가지 끝에서 다수의 두상화가 피는데, 지름 1.5cm 정도이고 설상화는 황색이다.
        감국
        산국과 비슷하나 꽃이 좀 커서 지름 2.5cm 정도이다.
        뇌향국화
        양지바른 산지에서 자라며, 높이 40 ~ 80cm이고 잎에는 향기가 있다. 10 ~ 11월에 백색 설상화와 황색 관상화로 된 두상화가 가지 끝에 다수 핀다. 두상화는 지름 3 ~ 5cm이다.
        산구절초
        산과 들에서 자라며, 높이 10 ~ 60cm이다. 두상화는 원줄기 끝과 가지 끝에 1개씩 피며 지름 3 ~ 6cm이고, 꽃은 보통 백색이지만 붉은 빛이 도는 것도 있다.
        */
      },
      {
        name: '봉숭아',
        price: '300',
        info: '봉숭아는 여름에 꽃을 피우는 대표적 관상초다. 4-5월 즈음에 심는 것이 좋으며, 진한 색감으로 물들이는데 쓰인다.',
        floriography: '소녀의 순정 ',
        flowerImgSrc: 'https://t1.daumcdn.net/cfile/tistory/99C203345B2CF80208 ',
        seedImgSrc: 'http://thumbnail.egloos.net/600x0/http://pds14.egloos.com/pds/200902/19/84/a0113084_499c96ca1ed05.jpg '
        /*
        약간 키가 큰 고성종과 중간 정도인 왜성종으로 나뉜다. 인도, 동남아 출신이고,
        어느 정도 강인하기 때문에 웬만한 강가나 진흙에선 모두 잘 살고, 공해에 강해서 조경용으로 널리 쓰인다.
        4~5월에 씨를 심으면 6월에 꽃이 핀다. 잎은 길쭉하고 톱니가 있는 형상이고, 꽃은 잎 겨드랑이 부분에 종모양이 주렁주렁 달려있는 형태이다.
        꽃잎 색은 빨강, 분홍, 주황, 보라, 하양으로 매우 다양하다. 열매는 타원형이고 털이 달려 있는데, 다 익으면 탁 터져서 씨를 사방에 흩뿌린다.
        */
      },
      {
        name: '로단테',
        price: '500',
        info: '꽃은 3∼4월에 피고 몇 개로 갈라진 줄기 끝에 두상화(頭狀花:꽃대 끝에 꽃자루가 없는 많은 작은 꽃이 모여 피어 머리 모양을 이룬 꽃)를 이루며 달린다.',
        floriography: '영원한 사랑',
        flowerImgSrc: 'http://m1.daumcdn.net/cfile236/R400x0/2169944C570F252D0798F8',
        seedImgSrc: 'https://www.researchgate.net/profile/Salza_Palpurina/publication/281857979/figure/fig5/AS:614259100758036@1523462190586/Detail-of-E-roseum-seed-plant-collected-in-the-Czech-Republic-photo-DB-Dittrichova.png'
      },
      {
        name: '페퍼민트',
        price: '300 ',
        info: '정신안정, 진통효과, 소화촉진, 천식, 결핵, 기관지염 완화, 항균, 체질개선, 시력유지 등의 효과가 있습니다.온도가 여름처럼 덥지도 않고 습도도 높지 않고 바람과 해가 적당한 그런 5월에 잘 자랍니다.',
        floriography: '다시한번 사랑하고 싶습니다. ',
        flowerImgSrc: 'http://mblogthumb1.phinf.naver.net/20150715_256/ufo5405_1436916826773FKMuy_JPEG/DSC01269.JPG?type=w2',
        seedImgSrc: 'http://mblogthumb3.phinf.naver.net/20160619_70/shakebobby99_1466314740608Pid8y_JPEG/-%B9%CC%B4%CF%C7%E3%BA%EA%C0%E7%B9%E8%BC%C2%C6%AE_%2818%29.jpg?type=w800'
      }

    ],
    sector: null,
    allArea: Array(Array(Array(),Array(),Array())
        ,Array(Array(),Array(),Array())
        ,Array(Array(),Array(),Array())),
    selectedArea: Array(),
  },
  getters: {
    selected: function (state) {
      return state.selectedSeed;
    },
    waiting: function (state) {
      return state.waiting;
    },
    getArea: function (state) {
      return state.allArea;
    },
    getSector: function (state) {
      return state.sector;
    },
    activeBtn: function (state) {
      return state.activeBtn;
    },
    selectedArea: function (state) {
      return state.selectedArea;
    }
  },
  mutations: {
    setArea: function(state){
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
          for(let l = 0; l < 10; l++){
            if(!(state.allArea[i][j][l]))
              state.allArea[i][j][l] = 0;
          }
        }
      }

      state.allArea[0][1][2] = "최원빈";
      state.allArea[0][1][3] = "최원빈";
      state.allArea[0][2][7] = "최원빈";
      state.allArea[0][0][0] = "권예찬";
      state.allArea[0][0][2] = "권예찬";
      state.allArea[0][0][1] = "권예찬";
      state.allArea[0][0][5] = "박종선";
      state.allArea[0][0][6] = "박종선";
      state.allArea[0][0][7] = "박종선";
      state.allArea[0][2][0] = "배수빈";
      state.allArea[0][2][1] = "배수빈";
      state.allArea[0][2][2] = "배수빈";
      state.allArea[0][0][9] = "고다혜";
      state.allArea[0][1][9] = "고다혜";
      state.allArea[0][2][9] = "고다혜";

      state.allArea[1][0][1] = "박종선";
      state.allArea[1][0][2] = "박종선";
      state.allArea[1][2][0] = "배수빈";
      state.allArea[1][2][1] = "배수빈";
      state.allArea[1][1][9] = "권예찬";
      state.allArea[1][1][8] = "권예찬";
      state.allArea[1][0][4] = "고다혜";
      state.allArea[1][0][5] = "고다혜";
      state.allArea[1][2][5] = "최원빈";
      state.allArea[1][2][6] = "최원빈";

      state.allArea[2][2][1] = "박종선";
      state.allArea[2][2][2] = "박종선";
      state.allArea[2][1][0] = "배수빈";
      state.allArea[2][1][1] = "배수빈";
      state.allArea[2][0][9] = "권예찬";
      state.allArea[2][0][8] = "권예찬";
      state.allArea[2][2][4] = "고다혜";
      state.allArea[2][2][5] = "고다혜";
      state.allArea[2][1][5] = "최원빈";
      state.allArea[2][1][6] = "최원빈";
    },
    selectingSeed: function (state, payload) {
      return state.selectedSeed = state.seeds[payload];
    },
    wait: function (state) {
      return state.waiting += 1;
    },
    selectArea: function (state, param) {
      state.selectedArea[0] = param[0];
      state.selectedArea[1] = param[1];
      state.selectedArea[2] = param[2];
    },
    selectSector: function (state, param) {
      state.sector = param;
    },
    changeActiveBtn: function (state, param) {
      state.activeBtn = param;
    },

  },
  actions: {
  },
  modules: {
  }
})
