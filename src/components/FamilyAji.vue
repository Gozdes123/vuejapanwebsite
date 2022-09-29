<template>
  <div class="mt-20">
    <div class="w-[80%] m-auto flex">
      <!-- <p class="text-[40px] pt-3">商品情報</p> -->
      <p class="pt-10 information w-1/2">&emsp;&emsp;家庭でプロの味を再現</p>
      <p class="text-right w-1/2 pt-10 information2">レシピ一覽を見る</p>
    </div>
    <div class="w-[80%] flex m-auto">
      <div class="w-1/2">
        <img
          src="../assets/japanwebsite/bc1e8d41952ec4bc131fe90f54d79fd13907b52c-thumb-584xauto-4295.jpg"
          alt=""
        />
      </div>

      <div class="w-1/2 flex flex-wrap">
        <img
          src="../assets/japanwebsite/a77b98d15965e7943ad6a07bf1723c8731157e8e-thumb-276xauto-4579.jpg"
          alt=""
          class="ml-2"
        />
        <img
          src="../assets/japanwebsite/H1_b-thumb-276xauto-4318.jpg"
          alt=""
          class="ml-8"
        />
        <img
          src="../assets/japanwebsite/recipe_img_04.jpg"
          alt=""
          class="ml-2 pt-8"
        />
        <img
          src="../assets/japanwebsite/recipe_img_05.jpg"
          alt=""
          class="ml-8 pt-8"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 商品情報 */
.information::before {
  content: "にんべんのレシピ";
  font-size: 40px;
}
.information2::before {
  content: "";
  font-size: 40px;
}
</style>
