<template>
  <div>
    <div class="mt-20">
      <div class="w-[65%] m-auto flex">
        <!-- <p class="text-[40px] pt-3">商品情報</p> -->
        <p class="pt-10 information w-1/2">
          &emsp;&emsp;職人が選び抜いた鰹節を、あなたのご家庭で
        </p>
        <p class="text-right w-1/2 pt-10 information2">すべての商品を見る</p>
      </div>
      <div class="w-[65%] flex gap-10 m-auto pt-10">
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/01.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_01@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[0].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[0].content }}</p>
          </div>
        </div>
        <div class="">
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/02@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_02@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[1].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[1].content }}</p>
          </div>
        </div>
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/03@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_03@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[2].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[2].content }}</p>
          </div>
        </div>
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/04@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_04@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[3].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[3].content }}</p>
          </div>
        </div>
      </div>
      <div class="w-[65%] flex gap-10 m-auto pt-10">
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/05@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_05@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[4].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[4].content }}</p>
          </div>
        </div>
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/06@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_2106_06@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[5].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[5].content }}</p>
          </div>
        </div>
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/07@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_07@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[6].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[6].content }}</p>
          </div>
        </div>
        <div>
          <div class="relative overflow-hidden">
            <img
              src="../assets/japanwebsite/12@2x.jpg"
              alt=""
              class="scale-100 ease-out duration-500 hover:scale-105"
            />
            <img
              src="../assets/japanwebsite/product_info_img_12@2x.png"
              alt=""
              class="absolute top-40 left-20 w-[70%] h-[50%]"
            />
          </div>
          <div class="text-[20px] pt-7">
            <p>{{ ProdctInformation[7].title }}</p>
          </div>
          <div class="text-[14px] text-[#76716f]">
            <p>{{ ProdctInformation[7].content }}</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["ProdctInformation"]) },
};
</script>

<style scoped>
/* 商品情報 */
.information::before {
  content: "商品情報";
  font-size: 40px;
}
.information2::before {
  content: "";
  font-size: 40px;
}
</style>
