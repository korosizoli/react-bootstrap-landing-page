import React from "react";
import { BsFillTelephonePlusFill, BsCalendar3 } from "react-icons/bs";
import ctaImg from "../assets/cta-avatar.jpg";
import { docList } from "../Data";

const Appointment = () => {
	return (
		<section id="appointment">
			<div className="container">
				<div className="grid">
					<div className="g-col-12 g-col-lg-5">
						<h2 className="section-title">Request an appointment</h2>

						<p className="body1 mb-4">
							Your information will be forwarded to a scheduling specialist who
							will contact you.
						</p>

						<div className="d-flex flex-wrap gap-3 align-items-center">
							<div className="d-flex">
								<div className="cta-icon bg-primary text-white">
									<BsFillTelephonePlusFill fontSize={24} />
								</div>
								<img className="cta-avatar object-fit-cover" src={ctaImg} alt="avatar" />
							</div>

							<div>
								<h6 className="fw-semibold">For urgent matters</h6>

								<a 
									className="phone-number text-decoration-none fw-bold fs-5" 
									href="tel:1234567890"
								>
									+1 234 567 890
								</a>
							</div>
						</div>
					</div>

					<div className="g-col-12 g-col-lg-7 mt-4 mt-lg-0">
						<form action="">
							<div className="grid gap-0 gap-md-4">
								<div className="g-col-12 g-col-md-6">
									<input
										required
										type="text"
										name="name"
										className="form-control mb-4"
										placeholder="Patient's full name"
									/>

									<input
										required
										type="email"
										name="email"
										className="form-control mb-4"
										placeholder="Patient's email"
									/>

									<input
										required
										type="date"
										name="date"
										className="form-control mb-4"
									/>
								</div>
								
								<div className="g-col-12 g-col-md-6">
									<select required name="select" className="form-control mb-4">
										<option value>Select doctor</option>
										{docList.map(({ name, spec }, idx) => (
											<option key={idx}>
												{name} - {spec}
											</option>
										))}
									</select>

									<textarea
										required
										className="form-control mb-3"
										name="message"
										cols="40"
										rows="4"
										placeholder="Your message"></textarea>
								</div>
							</div>

							<div className="d-flex gap-4 align-items-center justify-content-between flex-wrap">
								<p className="privacy">
									We are committed to protecting your privacWe will never
									collect information about ywithout your explicit consent.
								</p>

								<button type="submit" className="btn btn-primary">
									<div className="icon-btn">
										<div className="icon">
											<BsCalendar3 />
										</div>
										<span
											className="btn-double-text"
											data-text="Book appointment">
											Book appointment
										</span>
									</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appointment;
