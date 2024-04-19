<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      v-model:fullscreen="fullscreen"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      height="835px"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cn.stonkam.com/uploadfile/upload/2023092217201447.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cn.stonkam.com/uploadfile/upload/2023072118231297.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cn.stonkam.com/uploadfile/upload/2023032814513938.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cn.stonkam.com/uploadfile/upload/2023050915081996.jpg"
      />
      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      fullscreen: ref(false),
    };
  },
};
</script>
