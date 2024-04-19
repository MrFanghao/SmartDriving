<template>
  <div>
    <q-input
      v-model="searchInput"
      outlined
      dense
      placeholder="搜索地点"
      class="search-input"
      @keyup.enter="searchLocation"
    />
    <div id="container"></div>
    <div id="my-panel"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

window._AMapSecurityConfig = {
  securityJsCode: "998c3d3aff8f3044887841beaee4d820",
};

const map = ref(null);
const searchInput = ref("");
let auto = null;
let placeSearch = null;

onMounted(async () => {
  try {
    const AMap = await AMapLoader.load({
      key: "1b63c5233b4ce5acc2024b037021225e",
      version: "2.0",
      plugins: [
        "AMap.ControlBar",
        "AMap.ToolBar",
        "AMap.Driving",
        "AMap.StationSearch",
      ],
    });

    map.value = new AMap.Map("container", {
      pitch: 50,
      viewMode: "3D",
      rotateEnable: true,
      pitchEnable: true,
      zoom: 17,
      rotation: -15,
      zooms: [2, 20],
    });
    var toolbar = new AMap.ToolBar();
    map.value.addControl(toolbar);
    var controlBar = new AMap.ControlBar({
      //控制地图旋转插件
      position: {
        right: "10px",
        top: "10px",
      },
    });
    map.value.addControl(controlBar);
    searchLocation();
    // var canvas = document.createElement("canvas");
    // canvas.width = canvas.height = 200;
    // var context = canvas.getContext("2d");
    // context.fillStyle = "rgb(0,100,255)";
    // context.strokeStyle = "white";
    // context.globalAlpha = 1;
    // context.lineWidth = 2;
    // var radious = 0;
    // //调用 canvas 进行绘制
    // var draw = function () {
    //   context.clearRect(0, 0, 200, 200);
    //   context.globalAlpha = (context.globalAlpha - 0.01 + 1) % 1;
    //   radious = (radious + 1) % 100;
    //   context.beginPath();
    //   context.arc(100, 100, radious, 0, 2 * Math.PI);
    //   context.fill();
    //   context.stroke();
    //   AMap.Util.requestAnimFrame(draw);
    // };
    // //创建 canvas 图层
    // var CanvasLayer = new AMap.CanvasLayer({
    //   canvas: canvas, //Canvas DOM 对象
    //   bounds: new AMap.Bounds([116.328911, 39.937229], [116.342659, 39.946275]), //图片范围大小的经纬度，传入西南和东北的经纬度坐标
    //   zooms: [3, 18],
    // });
    // //将 canvas 添加到地图
    // map.value.addLayer(CanvasLayer);
    // draw();
    // var driving = new AMap.Driving({
    //   //驾车路线规划策略，0是速度优先的策略
    //   policy: 0,
    //   //map 指定将路线规划方案绘制到对应的 AMap.Map 对象上
    //   map: map,
    //   //panel 指定将结构化的路线详情数据显示的对应的 DOM 上，传入值需是 DOM 的 ID
    //   panel: "my-panel",
    // });
    // var points = [
    //   { keyword: "北京市地震局（公交站）", city: "北京" },
    //   { keyword: "亦庄文化园（地铁站）", city: "北京" },
    // ];
    // //搜索完成后，将自动绘制路线到地图上
    // driving.search(points);
    // var station = new AMap.StationSearch({
    //   city: "010", //限定查询城市，可以是城市名（中文/中文全拼）、城市编码
    // });
    // //执行关键字查询
    // station.search("东直门", function (status, result) {
    //   //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误
    //   if (status === "complete" && result.info === "OK") {
    //     var stationArr = result.stationInfo; //查询成功时，result.stationInfo 即为公交站点详细信息
    //     for (var i = 0; i < stationArr.length; i++) {
    //       //绘制点标记 Marker
    //       var marker = new AMap.Marker({
    //         //点标记中显示的图标
    //         icon: new AMap.Icon({
    //           image: "//a.amap.com/jsapi_demos/static/resource/img/pin.png",
    //           size: new AMap.Size(32, 32),
    //           imageSize: new AMap.Size(32, 32),
    //         }),
    //         offset: new AMap.Pixel(-16, -32), //点标记显示位置偏移量
    //         position: stationArr[i].location, //点标记在地图上显示的位置
    //         map: map, //显示该覆盖物的地图对象
    //       });
    //       //构造 marker 的信息窗体
    //       marker.info = new AMap.InfoWindow({
    //         content: stationArr[i].name, //信息窗体的显示内容
    //         offset: new AMap.Pixel(0, -30),
    //       });
    //       //鼠标悬停时显示该 marker 的信息窗体
    //       marker.on("mouseover", function (e) {
    //         e.target.info.open(map, e.target.getPosition());
    //       });
    //     }
    //   }
    //   //将覆盖物调整到合适视野
    //   map.value.setFitView();
    // });
  } catch (e) {
    console.log(e);
  }
});

const searchLocation = () => {
  auto = new AMap.AutoComplete({
    input: "tipinput", // 确保页面上有 id 为 "tipinput" 的元素
  });

  placeSearch = new AMap.PlaceSearch({
    map: map.value,
  });

  auto.on("select", selectSite);
};

const selectSite = (e) => {
  // 处理选中事件
  console.log(e);
};

// 暴露给模板的响应式状态和方法
defineExpose({
  searchInput,
  searchLocation,
});
</script>

<style lang="scss">
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 835px;
}
</style>
