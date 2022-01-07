<template>

  <div  class="container mx-auto">
  <lightgallery
      :settings="{ speed: 500, plugins: plugins }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
      class="min-w-screen  grid grid-cols-1 md:grid-cols-4 gap-20"
  >


    <a v-for="photo in arr"
        data-lg-size="1406-1390"
        class="gallery-item flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer"
        :data-src="photo.img_src"
        data-sub-html="<h4></h4> <p> </p>"

    >
      <img
          style="object-fit:cover;"
          class="img-responsive w-full h-full object-cover"
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
  watch:{
    photoList(){
    alert('array was changed')
      this.arr =[]
      for(let i=0;i<this.amount;i++){
        this.arr.push(this.photoList[i])
      }
  }
  },
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
