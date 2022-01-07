<template>
  <button @click="Close()" class="text-white text-lg py-2 px-4 bg-red-500 fixed right-0 top-0 z-20"> close gallery
  </button>
  <div class="min-w-screen min-h-screen bg-black fixed inset-0 flex flex-col items-center text-white z-10 overflow-y-auto overflow-x-hidden">
    <div class="w-full flex flex-row justify-between items-center mt-12">
      <p @click="Left()" class="ml-2 text-4xl cursor-pointer hover:text-red-500">&#8592;</p>
<div class="w-full md:w-8/12 xl:w-4/12 h-new-screen overflow-hidden border border-gray-100 ">
      <img :src="startPhoto" alt="" class="w-full h-full object-cover  animation ">
</div>
      <p @click="Right()" class="mr-2 text-4xl cursor-pointer hover:text-red-500">&#8594;</p>
    </div>
    <div class="w-screen ">
<!--      <div class="w-big-full mt-12 flex justify-start items-center ml-2">-->
        <div class="w-full mt-12 flex justify-center items-center ml-2  flex-wrap">
        <template v-for="photo in array">
          <template v-for="(item,idx) in photo">
            <div v-if="idx < amount" class="mr-4 inline-block">
              <img :src="item.img_src" alt=""
                   class="w-32 h-32 object-cover border-4 border-gray-100 rounded-lg hover:border-red-400 mt-4"
                   :class="{active: activeIndex === idx}"
                   @click="changePhoto(idx)" :key="item.id">

            </div>
          </template>
        </template>
      </div>
    </div>


  </div>


</template>

<script>

export default {
  emits: ['closeGallery'],
  props: ['dataForGallery', 'index', 'amount'],
  name: "Gallery",
  data() {
    return {
      startPhoto: this.dataForGallery.photos[this.index].img_src,
      array: this.dataForGallery,
      isActive: false,
      isAnimated: true,
      activeIndex: 0
    }
  },
  methods: {
    Close() {
      this.$emit('closeGallery')
    },
    changePhoto(i) {
      this.startPhoto = this.dataForGallery.photos[i].img_src
      this.activeIndex = i
    },
    Left() {
      if (this.activeIndex > 0) {
        this.activeIndex--
      }
      this.startPhoto = this.dataForGallery.photos[this.activeIndex].img_src
    },
    Right() {
      if (this.activeIndex < (this.amount-1)) {
        this.activeIndex++
      }
      this.startPhoto = this.dataForGallery.photos[this.activeIndex].img_src

    },

  }

}
</script>

<style scoped>
@keyframes slide {
  0% {
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

}
.h-new-screen{
  height: 60vh;

}
.active {
  border: 4px solid rgb(248,113,113);
}

.w-big-full {
  min-width: 400vw;
  overflow-x: hidden;
}

.animation {
  animation: slide .3s ease-in-out;

}
</style>