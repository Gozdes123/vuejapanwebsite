import { createStore } from "vuex";

export default createStore({
  state: {
    ProdctInformation: [
      {
        title: "だし",
        content: "鰹節と昆布の旨みを味わう",
      },
      {
        title: "つゆ・白だし・たれ・ぽん酢",
        content: "料理の味を決めるこだわりの1本",
      },
      {
        title: "本節・削り節",
        content: "専門店ならではの豊富なラインナップ",
      },
      {
        title: "鰹節削り器",
        content: "削りたての新鮮な美味しさをご家庭でも",
      },
      {
        title: "贈り物",
        content: "毎日の食事を少し特別にする贈り物",
      },
      {
        title: "ふりかけ・ご飯の素",
        content: "本格的なだしがごはんの味を引き立てる",
      },
      {
        title: "メニュー専用調味料",
        content: "和食も洋食も、だしで美味しく簡単に",
      },
      {
        title: "業務用商品",
        content: "ご要望に合う商品の開発もします",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
