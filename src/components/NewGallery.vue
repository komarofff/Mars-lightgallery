<template>
  <div  class="container mx-auto">
  <lightgallery
      :settings="{ speed: 500, plugins: plugins }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
      class="min-w-screen  grid grid-cols-1 md:grid-cols-4 gap-20"
  >

    <!--    <div v-for="item in dataFromServer" class="min-w-screen  grid grid-cols-1 md:grid-cols-4 gap-20">-->
    <!--      <template v-for="(photo,idx) in item">-->
    <!--        <div v-if="idx < amountOfPhotos" @click="openGallery(idx)"-->
    <!--             class="flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer" >-->
    <!--          <img :src="photo.img_src" class="w-full h-full object-cover"-->
    <!--              >-->
    <!--          <p class="text-xl">{{ photo.id }}</p>-->
    <!--          <p>{{ photo.earth_date }}</p>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--      <p v-if="item.length == 0" class="col-start-1 col-end-5  text-lg text-gray-700">No photos found on this date.</p>-->
    <!--    </div>-->

    <a v-for="photo in arr"
        data-lg-size="1406-1390"
        class="gallery-item flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer"
        :data-src="photo.img_src"
        data-sub-html="<h4></h4> <p> </p>"

    >
      <img
          style="object-fit:cover;"
          class="img-responsive"
          :src="photo.img_src"
      />
      <p class="text-xl">{{ photo.id }}</p>
     <p>{{ photo.earth_date }}</p>
    </a>


  </lightgallery>
  </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumb from 'lightgallery/plugins/thumbnail';
export default {
props: ['photoList', 'startIndex', 'amount'],
    components: {
    Lightgallery,
  },
  beforeMount() {
  for(let i=0;i<this.amount;i++){
    this.arr.push(this.photoList[i])
  }
  },
  data: () => ({
    plugins: [lgZoom, lgVideo,lgThumb],
    arr:[]
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
};
</script>
<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.3/css/lg-thumbnail.css');

body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}

</style>
