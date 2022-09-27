<template>
  <NavBar></NavBar>
  <ImgBar></ImgBar>
  <SecondPart></SecondPart>
  <ProductInformation></ProductInformation>
  <LocationBar></LocationBar>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ImgBar from "./components/ImgBar.vue";
import SecondPart from "./components/SecondPart.vue";
import ProductInformation from "./components/ProductInformation.vue";
import LocationBar from "./components/LocationBar.vue";
export default {
  components: {
    NavBar,
    ImgBar,
    SecondPart,
    ProductInformation,
    LocationBar,
  },
};
</script>

<style></style>
