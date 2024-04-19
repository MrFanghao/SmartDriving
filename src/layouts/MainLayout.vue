<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          智行 全天候驾驶辅助系统
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab class="col-1" to="/page1" label="首页" />
        <q-route-tab class="col-1" to="/page2" label="产品中心" />
        <q-route-tab class="col-1" to="/page3" label="城市地图" />
        <q-route-tab class="col-1" to="/page4" label="解决方案" />
        <q-route-tab class="col-1" to="/page5" label="关于我们" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-expansion-item>
        <template v-slot:header="{ expanded }">
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            用户： {{ expanded ? "Herny" : "Herny" }}
          </q-item-section>
        </template>

        <q-card>
          <q-card-section> 暂无个人信息 </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="bluetooth" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section> 蓝牙设备 </q-item-section>
        </template>
        <q-card>
          <q-card-section> 已连接 </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-separator />
      <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-icon color="purple" name="signal_wifi_off" />
          </q-item-section>

          <q-item-section> Wifi设置 </q-item-section>
        </template>

        <q-card>
          <q-card-section> 已连接 </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
