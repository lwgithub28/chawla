import React from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AllRoutes from "./AllRoutes.js";
function App() {
  return (
    <>
      <AllRoutes />
    </>
  );
}
export default App;

















// FadeSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// const FadeSlider = () => {
//   return (
//     <div className="w-full h-[400px] relative">
//       <Swiper
//         modules={[EffectFade, Autoplay, Navigation, Pagination]}
//         effect="fade"
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         pagination={{ clickable: true }}
//         navigation={true}
//         className="w-full h-full"
//         fadeEffect={{ crossFade: true }} // This line is KEY
//       >
//         <SwiperSlide>
//           <img
//             src="/images/slide1.jpg"
//             alt="Slide 1"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slide2.jpg"
//             alt="Slide 2"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slide3.jpg"
//             alt="Slide 3"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default FadeSlider;





