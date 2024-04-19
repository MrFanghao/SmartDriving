<template>
  <div class="q-pa-md column items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/2383ac31a6c64e76a4594c96f9324a06.png"
        />

        <q-card-section>
          <div class="text-h6">
            封闭场地测试-L3功能测试 <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          {{ text1 }}
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="more" />
        <q-btn flat> 仿真测试 </q-btn>
        <q-btn flat> 数据实验 </q-btn>
        <q-btn flat color="primary"> 查看详情 </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/0679eadc5ca27a4c8a76bd6e46aebfe8.png"
        />

        <q-card-section>
          <div class="text-h6">
            开放道路测试-大模型样本采集及处理
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          {{ text2 }}
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="more" />
        <q-btn flat> 语义分割 </q-btn>
        <q-btn flat> 样本采集 </q-btn>
        <q-btn flat color="primary" :to="{ name: 'page6' }"> 查看详情</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/5221ac6d77e7df5c68f3bdf0a91adec4.png"
        />

        <q-card-section>
          <div class="text-h6">
            开放道路测试-功能测试及对标
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          {{ text3 }}
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="more" />
        <q-btn flat> 设备调试 </q-btn>
        <q-btn flat> 样本采集 </q-btn>
        <q-btn flat color="primary"> 查看详情</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/%E5%BC%80%E6%94%BE%E9%81%93%E8%B7%AF%E6%B5%8B%E8%AF%95-%E5%BD%B1%E5%AD%90%E7%B3%BB%E7%BB%9F%E5%BC%80%E7%8E%AF%E6%B5%8B%E8%AF%95%E9%AA%8C%E8%AF%812.png"
        />

        <q-card-section>
          <div class="text-h6">
            开放道路测试-影子系统开环测试验证
            <q-badge color="primary">v1.0.0+</q-badge>
          </div>
          {{ text4 }}
        </q-card-section>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat round icon="more" />
        <q-btn flat> 设备调试 </q-btn>
        <q-btn flat> 样本采集 </q-btn>
        <q-btn flat color="primary"> 查看详情</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      text1:
        "封闭场地测试-L3功能测试是针对自动驾驶系统中L3级别功能进行的一系列严格测试。L3级别的自动驾驶系统能够在特定环境下实现自动驾驶，但在某些复杂或不确定的情况下，仍需驾驶员接管控制权。因此，确保L3功能的稳定性和安全性至关重要。在封闭场地测试中，我们模拟了多种道路环境和驾驶场景，以全面评估L3功能的性能。测试场地内设有复杂的交通标志、道路标线以及模拟的车辆和行人，以模拟真实世界中的驾驶挑战。同时，我们还利用先进的测试设备和传感器，实时收集和分析车辆在测试过程中的各项数据，确保测试结果的准确性和可靠性。",
      text2:
        "开放道路测试是自动驾驶技术研发过程中的关键环节，其中大模型样本的采集与处理尤为重要。大模型样本涵盖了各种复杂的道路环境、驾驶场景以及车辆交互情况，对于训练和提升自动驾驶系统的性能具有至关重要的作用。在开放道路测试中，我们采用先进的传感器和数据采集设备，实时记录车辆在行驶过程中的各项数据。这些数据包括但不限于车辆位置、速度、加速度、方向盘角度、刹车和油门踏板状态等车辆状态信息，以及周围环境的图像、视频、雷达点云等感知数据。采集到的原始样本数据需要经过一系列的处理步骤，才能用于自动驾驶系统的训练。首先，我们会对数据进行清洗和过滤，去除噪声和异常值，确保数据的准确性和可靠性。其次，我们会对数据进行标注和分类，为后续的模型训练提供必要的标签信息。最后，我们还会对数据进行增强和扩充，通过模拟和变换等手段，增加样本的多样性和泛化能力。",
      text3:
        "开放道路测试是自动驾驶技术发展的重要验证环节，其中功能测试及对标分析更是关键步骤。功能测试旨在全面检验自动驾驶系统在实际道路环境中的各项功能表现，确保车辆在各种驾驶场景下都能安全、稳定地运行。在开放道路测试中，我们会对自动驾驶系统的感知、决策、规划、控制等核心功能进行细致的测试。通过模拟和应对各种复杂的交通状况，如拥堵、路口、超车、变道等，我们评估系统的响应速度、决策准确性以及行驶稳定性。同时，我们还关注系统的舒适性，确保乘客在自动驾驶模式下的乘坐体验。除了功能测试，对标分析也是开放道路测试的重要组成部分。我们会选择市场上同级别的自动驾驶车辆或系统作为对标对象，通过对比分析，找出自身系统在性能、安全性、稳定性等方面的优势和不足。这有助于我们更好地了解市场需求和竞争态势，为自动驾驶系统的优化和改进提供有力支持。",
      text4:
        "在自动驾驶技术的研发过程中，开放道路测试是不可或缺的一环，而影子系统开环测试验证则是其中一项重要的测试方法。影子系统开环测试验证旨在通过模拟实际驾驶场景，对自动驾驶系统的性能进行全面、客观的评估，以确保其在实际应用中的安全性与可靠性。影子系统，作为一种测试工具，能够在实际道路环境中，同步收集自动驾驶系统和人类驾驶员的驾驶数据。在测试过程中，自动驾驶系统虽然不会实际控制车辆，但会实时处理感知数据并生成驾驶决策，这些决策会与人类驾驶员的实际操作进行对比和分析。通过这种方式，我们可以深入了解自动驾驶系统在各种驾驶场景下的表现，从而发现潜在的问题和改进空间。",
    };
  },
};
</script>

<style lang="sass" scoped></style>
