<template>
  <NavBar></NavBar>
  <ImgBar></ImgBar>
  <SecondPart></SecondPart>
  <ProductInformation></ProductInformation>
  <LocationBar></LocationBar>
  <FamilyAji></FamilyAji>
  <BannerBar></BannerBar>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ImgBar from "./components/ImgBar.vue";
import SecondPart from "./components/SecondPart.vue";
import ProductInformation from "./components/ProductInformation.vue";
import LocationBar from "./components/LocationBar.vue";
import FamilyAji from "./components/FamilyAji.vue";
import BannerBar from "./components/BannerBar.vue";
export default {
  components: {
    NavBar,
    ImgBar,
    SecondPart,
    ProductInformation,
    LocationBar,
    FamilyAji,
    BannerBar,
  },
};
</script>

<style></style>
