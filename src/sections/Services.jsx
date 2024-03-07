import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { servicesList } from "../Data";
import { BsStarFill } from "react-icons/bs";

const Services = () => {
	return (
		<div id="services">
			<div className="wrapper bg-primary-light section">
				<div className="container">
					<div className="grid">
						<div className="g-col-12 g-col-lg-4 mb-5 mb-lg-0">
							<h6 className="subtitle2">Our advance services</h6>

							<h2 className="section-title">Our clinical departments.</h2>

							<p className="body1">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
								commodi?
							</p>

							<a href="#" className="btn btn-secondary mt-4">
								<span className="btn-double-text" data-text="All treatments">
									All treatments
								</span>
							</a>
						</div>

						<div className="g-col-12 g-col-lg-8 ps-lg-5">
							<Swiper
								spaceBetween={32}
								slidesPerView={1}
								loop={true}
								breakpoints={{
									576: {
										slidesPerView: 2,
										spaceBetween: 32,
									},
								}}>
								{servicesList.map(({ title, desc, icon }) => (
									<SwiperSlide key={title}>
										<div className="service-card">
											<div className="service-card-icon mb-4">{icon}</div>
											<h5>{title}</h5>
											<p className="body1 mb-4">{desc}</p>
											<a href="#" className="link-btn">
												<BsPlusCircleFill />
												<span>Know more</span>
											</a>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>

					<div className="row justify-content-center align-items-center mt-5">
						<div className="col-12 col-sm-6 col-lg-4 p-3 border-sm">
							<div className="d-block d-sm-flex gap-3 align-items-center justify-content-center text-center text-sm-start">
								<span className="counter">4.98</span>

								<div className="">
									<div className="">
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
										<BsStarFill />
									</div>

									<p className="desc">1,234 rating</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-6 col-lg-4 p-3 border-md">
							<div className="d-block d-sm-flex gap-3 align-items-center justify-content-center text-center text-sm-start">
								<div>
									<span className="counter">98%</span>
								</div>

								<p className="desc">
									Genuine positive
									<br />
									feedback.
								</p>
							</div>
						</div>

						<div className="col-12 col-lg-4 p-3">
							<div className="d-block d-sm-flex gap-3 align-items-center justify-content-center text-center text-sm-start">
								<div>
									<span className="counter">200+</span>
								</div>

								<p className="desc">
									Daily patients <br />
									consulted.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
