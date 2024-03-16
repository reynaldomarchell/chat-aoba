import { loadOml2d } from "oh-my-live2d";

function loadOhMyLive2D() {
  loadOml2d({
    models: [
      {
        path: `Nindi/model.json`,
      },
    ],
    mobileDisplay: true,
    statusBar: {
      style: {
        display: "none",
      },
    },
    menus: {
      mobileItemStyle: {
        display: "none",
      },
      itemStyle: {
        display: "none",
      },
    },
    tips: {
      mobileStyle: {
        display: "none",
      },
      style: {
        display: "none",
      },
    },
    transitionTime: 0,
  });
}

export default loadOhMyLive2D;
