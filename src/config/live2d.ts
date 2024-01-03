import { loadOhMyLive2D } from "oh-my-live2d";

export default function loadOhMyLive2DConfig() {
  loadOhMyLive2D({
    sayHello: false,
    source: "https://l2d-model.vercel.app/Nindi",
    models: [
      {
        path: `/model.json`,
        scale: 1,
      },
    ],
    transitionTime: 0,
    tips: false,
    // {
    //   style: {
    //     width: 230,
    //     height: 100,
    //     offsetX: 0,
    //     offsetY: 100,
    //   },
    //   welcomeTips: {
    //     message: {
    //       daybreak: "Selamat pagi, Mari kita mulai hari ini dengan semangat!",
    //       morning: "Selamat beraktivitas!",
    //       noon: "Eh, ini waktunya makan siang, ayo makan bersama!",
    //       afternoon: "Selamat siang, jangan lupa minum air~",
    //       night: "Selamat datang di rumah~",
    //       dusk: "Terima kasih atas kerja keras mu！",
    //       lateNight: "Selamat malam, semoga mimpi indah~",
    //       weeHours: "Sudah jangan begadang lagi, tidur sekarang!",
    //     },
    //     persistTime: 5000,
    //   },
    //   idleTips: {
    //     message: [
    //       "Dunia begitu luas, aku ingin pergi ke mana saja~",
    //       "Hari ini cuaca bagus sekali~",
    //       "Aku ingin pergi ke pantai~",
    //       "Boleh ga ya bolos sekolah hari ini?",
    //     ],
    //     persistTime: 5000,
    //     interval: 1000,
    //   },
    //   copyTips: { message: "Hmmm...", persistTime: 5000 },
    // },
  });
}
