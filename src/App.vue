<template>
  <NavBar></NavBar>
  <ImgBar></ImgBar>
  <SecondPart></SecondPart>
  <ProductInformation></ProductInformation>
  <LocationBar></LocationBar>
  <FamilyAji></FamilyAji>
  <BannerBar></BannerBar>
  <NewsBar></NewsBar>
  <!-- <LastImage></LastImage> -->
  <LastBar></LastBar>
  <CopoyWright></CopoyWright>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ImgBar from "./components/ImgBar.vue";
import SecondPart from "./components/SecondPart.vue";
import ProductInformation from "./components/ProductInformation.vue";
import LocationBar from "./components/LocationBar.vue";
import FamilyAji from "./components/FamilyAji.vue";
import BannerBar from "./components/BannerBar.vue";
import NewsBar from "./components/NewsBar.vue";
// import LastImage from "./components/LastImage.vue";
import LastBar from "./components/LastBar.vue";
import CopoyWright from "./components/CopyWrite.vue";
export default {
  components: {
    NavBar,
    ImgBar,
    SecondPart,
    ProductInformation,
    LocationBar,
    FamilyAji,
    BannerBar,
    NewsBar,
    // LastImage,
    CopoyWright,
    LastBar,
  },
};
</script>

<style></style>
