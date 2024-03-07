import React from "react";
import {
	BsFacebook,
	BsTwitterX,
	BsEnvelope,
	BsMessenger,
} from "react-icons/bs";
import { docList } from "../Data";

const Doctors = () => {
	return (
		<div id="doctors" className="doctors-section bg-primary-light">
			<div className="container">
				{/* 

					=============== Process ===============

				*/}
				<div className="process p-4 bg-primary text-white">
					<div className="grid justify-content-center align-items-center">
						<div className="g-col-12 g-col-xl-3 px-3">
							<h3 className="text-center text-xl-start mb-3">
								Find the right <span className="highlight2">doctor</span> for
								you.
							</h3>
						</div>

						<div className="g-col-12 g-col-xl-9 px-3">
							<div className="grid ">
								<div className="g-col-12 g-col-md-6 g-col-lg-4 mx-auto">
									<div className="d-flex align-items-center gap-3">
										<div className="process-number fw-medium">
											<p>01</p>
										</div>

										<div className="process-content">
											<h6 className="fw-bold">Search doctor</h6>
											<p className="opacity-75">Lorem ipsum dolor</p>
										</div>
									</div>
								</div>

								<div className="g-col-12 g-col-md-6 g-col-lg-4 mx-auto">
									<div className="d-flex align-items-center gap-3">
										<div className="process-number fw-medium">
											<p>02</p>
										</div>

										<div className="process-content">
											<h6 className="fw-bold">Book schedule</h6>
											<p className="opacity-75">Sit amet consectetur</p>
										</div>
									</div>
								</div>

								<div className="g-col-12 g-col-lg-4 mx-auto">
									<div className="d-flex align-items-center gap-3">
										<div className="process-number fw-medium">
											<p>03</p>
										</div>

										<div className="process-content">
											<h6 className="fw-bold">Make a payment</h6>
											<p className="opacity-75">Adipiscing elit sed</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* 

					=============== Doctors list ===============

				*/}
				<h2 className="section-title text-center">
					<span className="highlight">Qualified</span> doctors
				</h2>

				<div className="grid doc-list">
					{docList.map(
						(
							{ img, name, spec, facebook, messenger, twitter, mail }
						) => (
							<div
								key={name}
								className="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3">
								<div className="doc-card d-flex flex-column align-items-center p-5 bg-white">
									<div className="doc-avatar mb-4 overflow-hidden">
										<img className="object-fit-cover" src={img} alt="doctor" />
									</div>
									<h5>{name}</h5>
									<p className="doc-desc text-center mb-4">
										Specialize in{" "}
										<a href="#" className="doc-link fw-bold text-decoration-none">
											{spec}
										</a>{" "}
										<br />
										at med+ hospital.
									</p>
									<div className="d-flex gap-4 align-items-center justify-content-center border-top w-100 pt-3">
										<a href={facebook} target="_blank" className="doc-link p-2">
											<BsFacebook fontSize={20} />
										</a>
										<a href={messenger} target="_blank" className="doc-link p-2">
											<BsMessenger fontSize={20} />
										</a>
										<a href={twitter} target="_blank" className="doc-link p-2">
											<BsTwitterX fontSize={20} />
										</a>
										<a href={mail} target="_blank" className="doc-link p-2">
											<BsEnvelope fontSize={20} />
										</a>
									</div>
								</div>
							</div>
						)
					)}
				</div>
				{/* 
				
					=============== Section footer ===============

				*/}
				<div className="doc-footer d-flex gap-3 flex-wrap justify-content-center align-items-center mt-5">
					<span className="badge bg-primary rounded-pill py-2 px-3 text-uppercase">Trust</span>
					<p className="doc-footer-text text-center fw-semibold">
						Genuine 10000+ people trusting medcare hospital treatment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Doctors;
