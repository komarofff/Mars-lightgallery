<template>
  <!--  {{ query }}-->
  <div class="w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-20 items-end mb-6">
    <div class="flex flex-col justify-start items-center w-full ">
      <p class="mt-4 md:mt-0 mb-2 text-lg">Number of images:</p>
      <input type="number" min="1" max="50" v-model="amount"
             class="border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none">
    </div>
    <div class="flex flex-col justify-start items-center w-full ">
      <p class="mt-4 md:mt-0  mb-2 text-lg">Select date:</p>
      <input type="date" v-model="date"
             class="border border-gray-200 text-lg rounded-lg w-full p-2 h-12  focus:border-4 focus:border-blue-200 outline-none">
    </div>
    <div class="flex justify-center">
      <button @click="getData" class="w-1/2 md:w-full mt-4 md:mt-0 border border-blue-600 hover:bg-white bg-blue-600 text-white hover:text-blue-600 text-lg rounded-lg py-2 px-8 self-center h-12"> Submit
      </button>
    </div>

  </div>
  <p v-if="!noData" class="col-start-2 col-end-5  text-lg text-gray-700 mt-4">No photos found on this date.</p>


</template>

<script>
import axios from "axios";


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
      noData: true
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
    },
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
            if(this.dataFromServer.photos.length>0) {
              this.$emit('startGallery', this.dataFromServer, 5, this.amount)
              this.noData = true
            }else{
              this.noData = false
              this.$emit('startGallery', [], 5, 0)
            }
          })

    }
  },
  methods: {
    openGallery(idx) {
      this.$emit('startGallery', this.dataFromServer, idx, this.amount)
    },

  },
}
</script>

<style lang="css">


body {
  margin: 0;
}

</style>