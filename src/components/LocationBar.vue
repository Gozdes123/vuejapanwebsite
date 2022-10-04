<template>
  <div class="mt-20">
    <div class="w-[65%] m-auto flex xl:w-[80%]">
      <!-- <p class="text-[40px] pt-3">商品情報</p> -->
      <p class="pt-10 information w-1/2">
        &emsp;&emsp;にんべんの美味しさをお店で体験
      </p>
      <p class="text-right w-1/2 pt-10 information2">すべての商品を見る</p>
    </div>
    <div class="flex gap-2 pt-10">
      <div class="w-[33%] relative overflow-hidden">
        <img
          src="../assets/japanwebsite/shop_img_01.jpg"
          alt=""
          class="scale-100 ease-out duration-500 hover:scale-105"
        />
        <img
          src="../assets/japanwebsite/shop_logo_01.svg"
          alt=""
          class="absolute top-5 right-5"
        />
        <div class="absolute bottom-10 left-10">
          <p class="text-white text-[28px]">日本橋本店</p>
          <p class="text-white">本物のだしの美味しさを体験</p>
        </div>
      </div>
      <div class="w-[33%] relative overflow-hidden">
        <img
          src="../assets/japanwebsite/shop_img_02.jpg"
          alt=""
          class="scale-100 ease-out duration-500 hover:scale-105"
        />
        <img
          src="../assets/japanwebsite/shop_logo_02.svg"
          alt=""
          class="absolute top-5 right-5"
        />
        <div class="absolute bottom-10 left-10">
          <p class="text-white text-[28px]">日本橋だし場</p>
          <p class="text-white">｢一汁一飯｣ をコンセプトに自慢のだしをお届け</p>
        </div>
      </div>
      <div class="w-[33%] relative overflow-hidden">
        <img
          src="../assets/japanwebsite/shop_img_03.jpg"
          alt=""
          class="scale-100 ease-out duration-500 hover:scale-105"
        />
        <img
          src="../assets/japanwebsite/shop_logo_03.svg"
          alt=""
          class="absolute top-5 right-5"
        />
        <div class="absolute bottom-10 left-10">
          <p class="text-white text-[28px]">日本橋だし場 はなれ</p>
          <p class="text-white">かつお節だしの奥深さを味わう和ダイニング</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.information::before {
  content: "店舗情報";
  font-size: 40px;
}
.information2::before {
  content: "";
  font-size: 40px;
}
</style>
