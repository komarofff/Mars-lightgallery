<template>

  <div  class="container mx-auto">
  <lightgallery :key="componentKey"
      :settings="{ speed: 500, plugins: plugins }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
      class="min-w-screen  flex flex-row justify-center items-start flex-wrap"
  >


    <a v-for="photo in arr"
        data-lg-size="1406-1390"
        class="gallery-item w-image h-88 flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer  "
        :data-src="photo.img_src"
        :data-sub-html="'<h4> Sol - '+photo.sol+'</h4>'+'<h4>'+photo.camera.name+'</h4> <p>'+ photo.camera.full_name +' </p>'"
        :key="photo.id"
    >
      <img
          style="object-fit:cover;"
          class="img-responsive w-full h-full object-cover "
          :src="photo.img_src"
          :key="photo.img_src"
      />
      <p class="text-center"> {{ photo.camera.full_name }}</p>
      <p class="text-xl">Sol - {{ photo.sol }}</p>
      <p class="text-xl">ID - {{ photo.id }}</p>
     <p class="text-xl">Earth date - {{ photo.earth_date }}</p>

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
    if(this.photoList[i] !== undefined) {
      this.arr.push(this.photoList[i])
    }
  }
  },
  data: () => ({
    plugins: [lgZoom, lgVideo,lgThumb],
    arr:[],
    componentKey: 0
  }),
  watch:{
    photoList(){
      this.arr =[]
      for(let i=0;i<this.amount;i++){
        if(this.photoList[i] !== undefined) {
          this.arr.push(this.photoList[i])
        }
      }
      this.forceRerender()
  }
  },
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
    forceRerender() {
      this.componentKey += 1
    }
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
  margin: 10px;
}
.w-image{
  width: 20%;
  align-self: stretch;
}
@media(max-width:1280px){
  .w-image {
    width: 30%;
  }
}
@media(max-width:960px){
  .w-image {
    width: 40%;
  }
}
@media(max-width:960px){
  .w-image {
    width: 46%;
  }
}
@media(max-width:600px){
  .w-image {
    width: 100%;
  }
}
</style>
