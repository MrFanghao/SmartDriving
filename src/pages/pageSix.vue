<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md items-start">
      <div>
        <q-img
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/0679eadc5ca27a4c8a76bd6e46aebfe8.png"
        >
          <div class="absolute-bottom text-subtitle1 text-center">语义分割</div>
        </q-img>
      </div>
      <div>
        <q-img
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/572477e8fa1ae478819305de02f7346d.png"
        >
          <div class="absolute-bottom text-subtitle1 text-center">目标检测</div>
        </q-img>
      </div>
      <div>
        <q-img
          src="http://cos.aaicon.com/%E4%BA%A7%E5%93%81%E4%B8%AD%E5%BF%83/%E8%89%BE%E6%8E%A7%E6%99%BA%E9%A9%BE/uploads/20231207/98f026e85d99670c6f32923b7a710df1.png"
        >
          <div class="absolute-bottom text-subtitle1 text-center">模拟驾驶</div>
        </q-img>
        <div>
          <q-btn color="primary" :to="{ name: 'page4' }"> 返回列表</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
