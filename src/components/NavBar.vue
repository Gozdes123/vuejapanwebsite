<template>
  <nav class="flex inline-block mt-2 sticky top-0 bg-[white] z-10">
    <div class="logo pl-10 pt-3">
      <img src="../assets/japanwebsite/logo_01.svg" alt="" />
    </div>
    <!--用一個div包除了logo以外的所有東西，再用一個nav包ul li -->
    <div class="body w-[100%] flex items-center">
      <nav class="w-[60%]">
        <ul class="flex gap-6 justify-end">
          <li>Home</li>
          <li>商品情報</li>
          <li>店鋪情報</li>
          <li>企業情報</li>
          <li>客服中心</li>
        </ul>
      </nav>
      <div class="w-[40%] ml-10">
        <i class="fa-solid fa-magnifying-glass"></i>檢索
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

<style></style>
