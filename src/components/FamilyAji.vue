<template>
  <div class="mt-20">
    <div class="w-[65%] m-auto flex">
      <!-- <p class="text-[40px] pt-3">商品情報</p> -->
      <p class="pt-10 information w-1/2">&emsp;&emsp;家庭でプロの味を再現</p>
      <p class="text-right w-1/2 pt-10 information2">レシピ一覽を見る</p>
    </div>
    <div class="w-[65%] m-auto">
      <div class="w-[100%] flex">
        <div class="w-1/2 overflow-hidden">
          <img
            src="../assets/japanwebsite/bc1e8d41952ec4bc131fe90f54d79fd13907b52c-thumb-584xauto-4295.jpg"
            alt=""
            class="scale-100 ease-out duration-500 hover:scale-105"
          />
        </div>
        <div class="w-1/2 ml-10">
          <div class="w-[100%] flex">
            <div class="w-1/2 mr-4 mb-4 overflow-hidden">
              <img
                src="../assets/japanwebsite/a77b98d15965e7943ad6a07bf1723c8731157e8e-thumb-276xauto-4579.jpg"
                alt=""
                class="scale-100 ease-out duration-500 hover:scale-105"
              />
            </div>
            <div class="w-1/2 ml-4 mb-4 overflow-hidden">
              <img
                src="../assets/japanwebsite/H1_b-thumb-276xauto-4318.jpg"
                alt=""
                class="scale-100 ease-out duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div class="w-[100%] flex">
            <div class="w-1/2 mr-4 mt-4 overflow-hidden">
              <img
                src="../assets/japanwebsite/recipe_img_04.jpg"
                alt=""
                class="scale-100 ease-out duration-500 hover:scale-105"
              />
            </div>
            <div class="w-1/2 ml-4 mt-4 overflow-hidden">
              <img
                src="../assets/japanwebsite/recipe_img_05.jpg"
                alt=""
                class="scale-100 ease-out duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
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
