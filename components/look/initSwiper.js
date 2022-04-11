import Swiper, { Autoplay, Loop } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Autoplay]);

export function initSwiper() {
	let interleaveOffset = -0.5;

	let swiper = new Swiper(".swiper-container", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2000,
		},
		watchSlidesProgress: true,
		mousewheelControl: true,
		on: {
			progress: function (swiper, progress) {
				for (let i = 0; i < swiper.slides.length; i++) {
					let slide = swiper.slides[i];
					let translate, innerTranslate;
					progress = slide.progress;

					if (progress > 0) {
						translate = progress * swiper.width;
						innerTranslate = translate * interleaveOffset;
					} else {
						innerTranslate = Math.abs(progress * swiper.width) * interleaveOffset;
						translate = 0;
					}

					slide.querySelector("img").style.transform = `translate3d(${translate}px,0,0)`;

					slide.querySelector(".slide-inner").style.transform = `translate3d(${innerTranslate}px,0,0)`;
				}
			},

			touchStart: function (swiper) {
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].querySelector("img").style.transition = "";
				}
			},

			setTransition: function (swiper, speed) {
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].querySelector(".slide-inner").style.transition = `${speed}ms`;
					swiper.slides[i].querySelector("img").style.transition = `${speed}ms`;
				}
			},
		},
	});
}
