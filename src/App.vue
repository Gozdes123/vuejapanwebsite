<template>
  <NavBar></NavBar>
  <ImgBar></ImgBar>
  <SecondPart></SecondPart>
  <ProdectInformation></ProdectInformation>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ImgBar from "./components/ImgBar.vue";
import SecondPart from "./components/SecondPart.vue";
import ProdectInformation from "./components/ProdectInformation.vue";
export default {
  components: {
    NavBar,
    ImgBar,
    SecondPart,
    ProdectInformation,
  },
};
</script>

<style></style>
