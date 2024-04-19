<template>
  <div class="q-pa-md column items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="splitterContainer">
          <previewImg
            :beforeImg="sample1bf"
            :afterImg="sample1af"
            type="NOPR"
            name="face_enhancement_sample"
          />
        </div>
        <q-card-section>
          <div class="text-h4">
            适应全天候——路况图像去雨去雾
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          <a class="text-h6">
            在下雨等恶劣天气条件下，自动驾驶面临着重大挑战。比如在雨天拍摄的照片往往受到雨滴的影响，导致图像质量下降，难以看清目标物体。
            因此，图像去雨去雾技术能够帮助我们恢复清晰的图像，提高视觉质量。
            在自动驾驶、安防监控等领域，去雨技术更是发挥着不可或缺的作用。
          </a>
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="directions" />
        <q-btn color="primary"> 立即查看 </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="splitterContainer">
          <previewImg
            :beforeImg="sample2bf"
            :afterImg="sample2af"
            type="AIU"
            name="face_enhancement_sample"
          />
        </div>
        <q-card-section>
          <div class="text-h4">
            路况检测——行人识别
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          <a class="text-h6">
            行人检测技术有很强的使用价值，它可以与行人跟踪，行人重识别等技术结合，应用于汽车无人驾驶系统(ADAS)，智能机器人，智能视频监控，人体行为分析，客流统计系统，智能交通等领域。
          </a>
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="directions" />
        <q-btn color="primary"> 立即查看 </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal>
        <div class="splitterContainer">
          <previewImg
            :beforeImg="sample3bf"
            :afterImg="sample3af"
            type="NCP"
            name="face_enhancement_sample"
          />
        </div>

        <q-card-section>
          <div class="text-h4">
            路况理解-语义分割
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          <a class="text-h6">
            图像语义分割是将图像在像素级别上进行分类,自动驾驶汽车通过这项技术能从简单的道路图像中感知大量环境信息,例如区分出障碍物,可行驶区域,道路交通标志线等
          </a>
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="directions" />
        <q-btn color="primary"> 立即查看 </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup>
import previewImg from "src/components/previewImg.vue";
const sample1bf =
  "https://p6-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/91e5ff49134c4b85aa72f3d38c540da3~noop.webp?lk3s=125a4689&x-expires=1716089604&x-signature=CnU8O%2FC62H%2BNNvZ%2FgP7ccYNSOo4%3D";
const sample1af =
  "https://p3-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/d4cea81884f345209d17e90d67b010a1~noop.webp?lk3s=125a4689&x-expires=1716089604&x-signature=q4MFxeb%2BN%2B696e8C6cbmyWNKIAI%3D";
const sample2bf = "src/assets/person1.png";
const sample2af = "src/assets/person2.png";
const sample3bf = "src/assets/car1.png";
const sample3af = "src/assets/car2.png";
</script>
<style scoped lang="scss">
.my-card {
  width: 100%;
}
.PhotoRestoreContent {
  width: 1200px;
}

.splitterContainer {
  width: 540px;
  height: 360px;
}
</style>
