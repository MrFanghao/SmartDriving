<template>
  <div class="q-pa-md">
    <q-card class="mycard">
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3 text-grey-7"
        active-color="primary"
        indicator-color="purple"
        align="justify"
      >
        <q-tab name="我们是谁" label="我们是谁" />
        <q-tab name="企业文化" label="企业文化" />
        <q-tab name="发展历程" label="发展历程" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="bg-white text-black">
        <q-tab-panel name="我们是谁" style="height: 800px">
          <div class="text-h6">杭州电子科技大学——智行团队</div>
          <q-separator color="orange" inset />
          <q-separator color="orange" inset />

          <div
            class="q-pa-md column items-start q-gutter-md"
            style="width: 600px; height: 600px"
          >
            <q-img src="https://www.cdqcxy.com/uploads/quanguo/15523565188.png">
            </q-img>
            <q-card
              class="my-card text-white"
              style="
                background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
                width: 600px;
                height: 420px;
              "
            >
              <q-card-section>
                <div class="text-h6">智行团队</div>
                <div class="text-subtitle2">来自杭州电子科技大学计算机专业</div>
              </q-card-section>
              <q-separator dark inset />
              <q-card-section>
                智行团队，汇聚了杭州电子科技大学计算机专业的精英力量，是一支充满活力和创新精神的团队。我们专注于汽车的智能化、电动化技术的研发与应用，致力于推动汽车行业的科技革新。
                我们的核心工作涵盖了汽车的开发、测试及验证等多个环节，旨在为整车厂提供全方位、定制化的解决方案。我们深知汽车行业的复杂性和多样性，因此我们的团队不仅具备深厚的计算机专业背景，还对汽车行业有深入的了解和研究。
                在测试验证方面，我们运用先进的测试技术和方法，确保汽车在各种极端条件下的稳定性和安全性。我们提供的仿真解决方案能够模拟真实的驾驶环境，帮助整车厂在研发阶段发现并解决问题，从而提高产品的质量和性能。
                在评价方面，我们建立了一套科学的评价体系，对汽车的各项性能进行客观、全面的评估。我们的评价报告不仅为整车厂提供了决策依据，也为消费者提供了购车参考。
                此外，我们还服务于电子电器动力总成、底盘、自动驾驶等多个部门，为他们提供技术支持和解决方案。我们与这些部门紧密合作，共同推动汽车行业的进步和发展。
                智行团队凭借专业的技术实力、丰富的行业经验和良好的服务口碑，赢得了广大客户的信任和赞誉。我们将继续秉承创新、务实的理念，为汽车行业的智能化、电动化发展贡献更多的力量。
              </q-card-section>
            </q-card>
          </div>
          <div style="width: 100%">
            <q-chat-message
              name="客户"
              avatar="https://cdn.quasar.dev/img/avatar1.jpg"
              :text="['如何了解关于我们团队更多的信息']"
              bg-color="amber-7"
            />
            <q-chat-message
              name="团队负责人"
              avatar="https://cdn.quasar.dev/img/avatar5.jpg"
              :text="['有任何疑问可以把你的疑问发送至hzdzkjdx.edu.hdu.cn']"
              text-color="white"
              sent
              bg-color="black"
            />
          </div>
        </q-tab-panel>

        <q-tab-panel name="企业文化" style="height: 800px">
          <div class="q-pa-md">
            <div class="q-col-gutter-md row items-start">
              <div class="col-6">
                <q-img src="../assets/001.jpeg"> </q-img>
              </div>

              <div class="col-6">
                <q-img src="../assets/002.jpeg"> </q-img>
              </div>

              <div class="col-6">
                <q-img src="../assets/003.jpeg"> </q-img>
              </div>

              <div class="col-6">
                <q-img src="../assets/004.jpeg"> </q-img>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="发展历程" style="height: 800px">
          <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary">
              <q-timeline-entry heading> 2022 </q-timeline-entry>

              <q-timeline-entry title="团队成立" subtitle="2022.7">
                <div>初始团队成立，共同学习人工智能领域相关知识</div>
              </q-timeline-entry>

              <q-timeline-entry
                title="论文复现"
                subtitle="2022.8-2022.12"
                icon="delete"
              >
                <div>
                  我们团队初期实现了SiamDW等众多计算机视觉领域的经典模型，并取得了不错的成果。
                </div>
              </q-timeline-entry>

              <q-timeline-entry heading> 2023</q-timeline-entry>

              <q-timeline-entry title="项目提出" subtitle="2023.3">
                <div>
                  在学校领导、老师的帮助下，我们深入分析市场现状，针对目前自动驾驶领域存在的问题及现状，我们提出了全天候自动驾驶辅助系统
                </div>
              </q-timeline-entry>

              <q-timeline-entry title="项目实践" subtitle="2023.4-2023.8">
                <div>
                  开发深度学习和机器视觉算法，用于处理和理解传感器收集的数据，包括目标检测、物体识别、轨迹预测等。同时，研发适应不同天气条件下的图像增强算法，以提高恶劣天气下系统的感知能力。
                </div>
              </q-timeline-entry>
              <q-timeline-entry
                title="项目完善"
                subtitle="2023.9-2023.12"
                color="orange"
                icon="done_all"
              >
                <div>
                  收集并整理全天候自动驾驶辅助系统的具体需求，包括功能模块、性能指标、适用场景等。
                  制定详细的需求规格说明书，并完成初步的概念设计和架构设计。成功完成了web端及手机端的开发并且申报了软著
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("我们是谁"),
    };
  },
};
</script>
<style scoped="scss">
.mycard {
  height: 800px;
}
</style>
