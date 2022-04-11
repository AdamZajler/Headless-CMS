import Image from "next/image";
import { useEffect } from "react/cjs/react.development";
import { initSwiper } from "./initSwiper";

export function HomePageSlider() {
	useEffect(() => {
		initSwiper();
	}, []);

	return (
		<>
			<div className="swiper-container mx-auto w-full overflow-hidden" style={{ height: "60vh" }}>
				<div className="swiper-wrapper">
					<div className="swiper-slide overflow-hidden">
						<div className="slide-inner absolute w-full h-full left-0 top-0 bg-cover bg-center">
							<Image
								src={"http://wordpress.local/wp-content/uploads/2022/04/strony-internetowe-rybnik.webp"}
								layout="fill"
								objectFit={"cover"}
								objectPosition={"center"}
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className="swiper-slide overflow-hidden">
						<div className="slide-inner absolute w-full h-full left-0 top-0 bg-cover bg-center">
							<Image
								src={"http://wordpress.local/wp-content/uploads/2022/04/strony-internetowe-rybnik.webp"}
								layout="fill"
								objectFit={"cover"}
								objectPosition={"center"}
								quality="100"
								priority={true}
							/>
						</div>
					</div>
					<div className="swiper-slide overflow-hidden">
						<div className="slide-inner absolute w-full h-full left-0 top-0 bg-cover bg-center">
							<Image
								src={"http://wordpress.local/wp-content/uploads/2022/04/strony-internetowe-rybnik.webp"}
								layout="fill"
								objectFit={"cover"}
								objectPosition={"center"}
								quality="100"
								priority={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
