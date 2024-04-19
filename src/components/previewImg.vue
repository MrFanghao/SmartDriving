<template>
  <div class="headImg">
    <div
      v-touch-pan.prevent="changeSeparator"
      :class="['contentSplitterContainer', { rounded: props.rounded }]"
      @mousemove="changeSeparator"
    >
      <div
        style="pointer-events: none"
        class="full-height full-width overflow-hidden"
      >
        <q-splitter
          v-model="splitter"
          class="full-height full-width"
          :limits="[4, 96]"
          separator-class="splitter__divider"
          before-class="overflow-hidden"
          after-class="overflow-hidden"
        >
          <template v-slot:before>
            <img
              :src="beforeImg"
              class="full-height absolute-top-left"
              :alt="name + '-bf'"
              :title="name + '-bf'"
              loading="lazy"
            />
          </template>
          <template v-slot:separator>
            <div class="dividerBtn"></div>
            <div v-if="props.draggerBtnVisible" class="draggerBtn"></div>
            <div
              :class="[
                'imageTag',
                'imageTag--original',
                {
                  'imageTag--small': props.size === 'small',
                  'imageTag--withBg': props.textWithBg,
                },
              ]"
            >
              {{ Array.isArray(props.tags) ? props.tags[0] : "原始图像" }}
            </div>
            <div
              :class="[
                'imageTag',
                'imageTag--ai4x',
                {
                  'imageTag--small': props.size === 'small',
                  'imageTag--withBg': props.textWithBg,
                },
              ]"
            >
              {{ Array.isArray(props.tags) ? props.tags[1] : $t(type) }}
            </div>
          </template>
          <template v-slot:after>
            <img
              :src="afterImg"
              class="full-height absolute-top-right"
              :alt="name + '-af'"
              :title="name + '-af'"
              loading="lazy"
            />
          </template>
        </q-splitter>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  beforeImg: {
    type: String,
    required: true,
  },
  afterImg: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
  },
  size: {
    type: String,
    default: "medium",
  },
  name: {
    type: String,
    required: true,
  },
  draggerBtnVisible: {
    type: Boolean,
    default: true,
  },
  textWithBg: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
});
const splitter = ref(50);
function changeSeparator(event) {
  const dom = document.querySelector(".contentSplitterContainer");
  let x;
  if (event.type === "mousemove") {
    x = (event.offsetX / dom.offsetWidth) * 100;
    splitter.value = x;
    event.preventDefault();
  } else if (event.touch) {
    x = (event.delta.x / dom.offsetWidth) * 100;
    splitter.value += x;
  }
}
const type = computed(() => {
  switch (props.type) {
    case "NOPR":
      return "去雨后";
    case "NCP":
      return "分割后";
    case "AIU":
      return "识别后";
    default:
      return "Nero AI";
  }
});
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0px;
}
.splitter__divider {
  width: 0 !important;
}
</style>
<style lang="scss" scoped>
.contentSplitterContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform-origin: left bottom;
}
.rounded {
  border-radius: 10px;
}
.dividerBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0px;
  height: 100%;
  border: 1px solid white;
}
.draggerBtn {
  width: 40px;
  height: 40px;
  background-image: url("../assets/arrow_black.svg");
  background-size: 100%;
  top: 85%;
  transform: translate(-50%, -16%);
}
.imageTag {
  width: fit-content;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 85%;
  word-break: keep-all;
  white-space: nowrap;
}
.imageTag--small {
  font-size: 12px;
}
.imageTag--withBg {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1em;
  border-radius: 1em;
}
.imageTag--original {
  left: 0%;
  transform: translateX(-136%);
  transition: opacity 2s;
}
.imageTag--ai4x {
  right: 0%;
  transform: translateX(22px);
}
.headImg {
  width: inherit;
  height: 100%;
  overflow: hidden;
}
@media (min-width: 0px) and (max-width: 767.9px) {
  .draggerBtn {
    width: 25px;
    height: 25px;
    top: 80%;
  }
  .imageTag {
    font-size: 12px;
    top: 80%;
  }
}
@media (min-width: 768px) and (max-width: 1023.9px) {
  .draggerBtn {
    width: 32px;
    height: 32px;
    top: 80%;
  }
  .imageTag--original {
    transform: translate(-140%, 2px);
  }
  .imageTag--ai4x {
    transform: translate(30%, 2px);
  }
  .imageTag {
    font-size: 12px;
    top: 80%;
  }
}
@media (min-width: 1024px) and (max-width: 1639.9px) {
  .draggerBtn {
    width: 38px;
    height: 38px;
  }
}
</style>
