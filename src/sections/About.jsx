import React from "react";
import { BsCalendar3, BsFillStarFill } from "react-icons/bs";
import image1 from "../assets/about1.jpg";
import image2 from "../assets/about2.jpg";

const About = () => {
	return (
		<section id="about">
			<div className="container">
				<div className="about grid">
					{/* 
						About / Images
					*/}
					<div className="position-relative g-col-12 g-col-lg-6">
						<img src={image1} alt="hospital building" className="about-img1" />
						<img src={image2} alt="doctor" className="about-img2" />
					</div>
					{/* 
						About / Content
					*/}
					<div className="g-col-12 g-col-lg-6">
						<h6 className="subtitle2">About med+ hospital</h6>
						<h2 className="section-title">
							Welcome to our <span className="highlight">med+</span> hospital.
						</h2>
						<p className="body1">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Cupiditate, voluptates saepe sed officiis similique laborum fuga!
							Enim dolore, nihil illo perspiciatis illum praesentium doloremque!
						</p>

						<div className="d-block d-md-flex align-items-center my-4 my-md-5">
							<div className="rates d-flex align-items-center gap-3">
								<p className="counter">700+</p>

								<div className="stars d-flex gap-1">
									<BsFillStarFill />
									<BsFillStarFill />
									<BsFillStarFill />
									<BsFillStarFill />
									<BsFillStarFill />
								</div>
							</div>

							<p className="desc">5 star reviews from our satisfied people.</p>
						</div>

						<div className="d-flex gap-3 flex-wrap">
							<a href="#" className="btn btn-secondary">
								<span className="btn-double-text" data-text="About med+">
									About med+
								</span>
							</a>

							<a href="#" className="btn btn-outline-secondary">
								<div className="icon-btn">
									<div className="icon">
										<BsCalendar3 />
									</div>
									<span className="btn-double-text" data-text="Check timetable">
										Check timetable
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
