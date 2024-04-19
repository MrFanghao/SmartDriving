const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "page1",
        name: "page1",
        component: () => import("pages/pageOne.vue"),
      },
      {
        path: "page2",
        name: "page2",
        component: () => import("pages/pageTwo.vue"),
      },
      {
        path: "page3",
        name: "page3",
        component: () => import("pages/pageThree.vue"),
      },
      {
        path: "page4",
        name: "page4",
        component: () => import("pages/pageFour.vue"),
      },
      {
        path: "page5",
        name: "page5",
        component: () => import("pages/pageFive.vue"),
      },
      {
        path: "page6",
        name: "page6",
        component: () => import("pages/pageSix.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
