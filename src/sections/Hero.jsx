import React from "react";
import heroBg from "../assets/hero-banner.jpg";
import image from "../assets/hero-image.png";
import { BsFillWebcamFill, BsInfoCircle } from "react-icons/bs";

const Hero = () => (
	<section id="home">
		<div className="wrapper">
			<div className="hero overflow-hidden">
				<img 
				className="w-100 h-100 object-fit-cover"
					src={heroBg} 
					alt="background image" 
				/>
				<div className="container">
					<div className="grid">
						<div className="g-col-12 g-col-lg-5">
							<div>
								<h6 className="subtitle1">Tell us your problem!</h6>
								<h1>
									Most <span className="highlight">trusted</span> health partner
									for your life.
								</h1>

								<div className="d-flex gap-3 flex-wrap mt-5">
									<a href="#" className="btn btn-secondary">
										<span className="btn-double-text" data-text="Find a dcotor">
											Find a dcotor
										</span>
									</a>

									<a href="#" className="btn btn-outline-secondary">
										<div className="icon-btn">
											<div className="icon">
												<BsFillWebcamFill />
											</div>
											<span className="btn-double-text" data-text="Video Call">
												Video Call
											</span>
										</div>
									</a>
								</div>
							</div>
						</div>

						<div className="d-none d-lg-block g-col-lg-7">
							<div className="hero-banner position-relative w-100 h-100">
								<img 
									className="object-fit-contain"
									src={image} 
									alt="image" 
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="info-bar d-flex justify-content-center align-items-center text-center text-white bg-primary">
				<div className="info-title d-flex align-items-center gap-2">
					<BsInfoCircle fontSize={32} />
					<h6 className="fw-semibold">Covid-19 information</h6>
				</div>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
					hic!
				</p>
			</div>
		</div>
	</section>
);

export default Hero;
