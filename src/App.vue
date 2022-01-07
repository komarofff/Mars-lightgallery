<template>
  <div class="container mx-auto flex flex-col justify-start items-center px-2">
    <img src="../public/nasa.png" class="mb-12">
    <GetPhotos
        @startGallery="startShow"
    ></GetPhotos>
  </div>

</template>

<script>

import GetPhotos from "./components/GetPhotos";
export default {
  data() {
    return {
      showGallery: false,
      dataForGallery: [],
      idx: 0,
      amount: 0

    }
  },
  methods: {
    startShow(someData,idxStart,amountOfPhotos) {
      this.showGallery = true
      this.dataForGallery =  someData
      this.idx = idxStart
      this.amount = amountOfPhotos
    },
    closeShow() {
      this.showGallery = false
    }
  },
  name: 'App',
  components: {
    GetPhotos,
  }
}
</script>

<style>
#app {
  font-family: 'Space Grotesk';
}

</style>
