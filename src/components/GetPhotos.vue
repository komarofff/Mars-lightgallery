<template>
  <!--  {{ query }}-->
  <div class="w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-end mb-6">
    <div class="flex flex-col justify-start items-center w-full ">
      <p class="mb-2 text-lg">Number of images:</p>
      <input type="number" min="1" max="50" v-model="amount"
             class="border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none">
    </div>
    <div class="flex flex-col justify-start items-center w-full ">
      <p class="mb-2 text-lg">Select date:</p>
      <input type="date" v-model="date"
             class="border border-gray-200 text-lg rounded-lg w-full p-2 h-12  focus:border-4 focus:border-blue-200 outline-none">
    </div>
    <div class="flex justify-center">
      <button @click="getData" class="bg-blue-600 text-white text-lg rounded-lg py-2 px-8 self-center h-12"> Submit
      </button>
    </div>

  </div>

  <!--  <div v-for="item in dataFromServer" class="min-w-screen  grid grid-cols-1 md:grid-cols-4 gap-20">-->
  <!--    <template v-for="(photo,idx) in item">-->
  <!--      <div v-if="idx < amountOfPhotos" @click="openGallery(idx)"-->
  <!--           class="flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer" >-->
  <!--        <img :src="photo.img_src" class="w-full h-full object-cover"-->
  <!--            >-->
  <!--        <p class="text-xl">{{ photo.id }}</p>-->
  <!--        <p>{{ photo.earth_date }}</p>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--    <p v-if="item.length == 0" class="col-start-1 col-end-5  text-lg text-gray-700">No photos found on this date.</p>-->
  <!--  </div>-->


      <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
      >

        <template v-for="item in dataFromServer">
          <template v-for="(photo,idx) in item">
            <template v-if="idx < amountOfPhotos" >
        <a

            data-lg-size="1406-1390"
            class="gallery-item"
            :data-src="photo.img_src"
            data-sub-html="<h4>title</h4><p>description</p>"
        >
          <img
              class="img-responsive"
              :src="photo.img_src"
          />
        </a>
<!--                      <p class="text-xl">{{ photo.id }}</p>-->
<!--                      <p>{{ photo.earth_date }}</p>-->
          </template>
          </template>
<!--           <p v-if="item.length == 0" class="col-start-1 col-end-5  text-lg text-gray-700">No photos found on this date.</p>-->
        </template>

      </lightgallery>


</template>

<script>
import axios from "axios";
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumb from 'lightgallery/plugins/thumbnail';

export default {
  emits: ['startGallery'],
  data() {
    return {
      today: new Date(),
      dataFromServer: [],
      amount: 1,
      amountOfPhotos: 0,
      page: 1,
      date: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + (new Date().getDate())).slice(-2),
      query: null,
      plugins: [lgZoom, lgVideo, lgThumb],
    }
  },
  beforeMount() {
    this.query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=${this.date}`
  },
  watch: {
    amount() {
      if (this.amount > 50) {
        this.amount = 50
      }
    }
  }
  ,
  computed: {
    getData() {
      this.amountOfPhotos = this.amount
      if (this.amount <= 25) {
        this.query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=${this.date}&page=1`
      } else {
        this.query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=${this.date}`
      }
      axios.get(this.query)
          .then(response => {
            this.dataFromServer = response.data
          })
    }
  },
  methods: {
    openGallery(idx) {
      this.$emit('startGallery', this.dataFromServer, idx, this.amount)
    },
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
  components: {
    Lightgallery,
  }
}
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