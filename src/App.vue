<template>
  <div class="container mx-auto flex flex-col justify-start items-center px-2">
    <img src="../public/nasa.png" class="mb-12">
    <GetPhotos
        @startGallery="startShow"
    ></GetPhotos>

<!--    <template v-if="showGallery && !showBigGallery">-->
<!--      <div v-for="item in dataForGallery" class="min-w-screen  grid grid-cols-1 md:grid-cols-4 gap-20">-->
<!--        <template v-for="(photo,idx) in item">-->
<!--          <div v-if="idx < amount" @click="showBigGallery = true"-->
<!--               class="flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer">-->
<!--            <img :src="photo.img_src" class="w-full h-full object-cover"-->
<!--            >-->
<!--            <p class="text-xl">{{ photo.id }}</p>-->
<!--            <p>{{ photo.earth_date }}</p>-->
<!--          </div>-->
<!--        </template>-->
<!--        <p v-if="item.length == 0" class="col-start-1 col-end-5  text-lg text-gray-700">No photos found on this-->
<!--          date.</p>-->
<!--      </div>-->
<!--    </template>-->

  </div>

  <new-gallery
      v-if="showGallery"
      :photoList="dataForGallery.photos"
      :amount="amount"
      :startIndex="idx"
  ></new-gallery>
</template>

<script>
import NewGallery from "./components/NewGallery";
import GetPhotos from "./components/GetPhotos";

export default {
  data() {
    return {
      showGallery: false,
      dataForGallery: [],
      idx: 0,
      amount: 0,
      showBigGallery: false

    }
  },
  methods: {
    startShow(someData, idxStart, amountOfPhotos) {
      this.showGallery = true
      this.dataForGallery = someData
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
    NewGallery
  }
}
</script>

<style>
#app {
  font-family: 'Space Grotesk';
}

</style>
