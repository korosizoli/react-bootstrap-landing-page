import React from 'react'
import bannerImg from '../assets/vision-banner.jpg'

const Vision = () => {
	return (
		<section id="vision">
			<div className="container">
				<div className='row'>
					<div className="col-12 col-lg-6 px-lg-5 mb-5 mb-lg-0">
						<div className="vision-banner">
							<img src={bannerImg} alt="image" />
						</div>
					</div>

					<div className="col-12 col-lg-6 ps-lg-5">
						<div className="vision-content">
							<h6 className="subtitle2">
								Our mission and vision
							</h6>
							<h2 className="section-title">
								Latest medicine,<br /> <span className="highlight">exceptional</span> care.
							</h2>
							<p className="body1 mb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt totam voluptatibus.
							</p>
							<div className="accordion" id='accordion'>
								<div className="accordion-item mb-4">
									<p className="accordion-header">
										<button
											className='accordion-button'
											type='button'
											data-bs-toggle="collapse"
											data-bs-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											<span className="number">01</span>
											Our mission #1
										</button>
									</p>
									<div
										id='collapseOne'
										className='accordion-collapse collapse show'
										data-bs-parent='#accordion'
									>
										<div
											className='accordion-body'
										>
											<p>
												Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate unde nostrum corrupti ex minus harum nobis, culpa quaerat! Eveniet, hic.
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item mb-4">
									<p className="accordion-header">
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle="collapse"
											data-bs-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											<span className="number">02</span>
											Our mission #2
										</button>
									</p>
									<div
										id='collapseTwo'
										className='accordion-collapse collapse'
										data-bs-parent='#accordion'
									>
										<div
											className='accordion-body'
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus ab quasi commodi? Fugit, quos. Temporibus distinctio officiis rem eaque.
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<p className="accordion-header">
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle="collapse"
											data-bs-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											<span className="number">03</span>
											Our mission #3
										</button>
									</p>
									<div
										id='collapseThree'
										className='accordion-collapse collapse'
										data-bs-parent='#accordion'
									>
										<div
											className='accordion-body'
										>
											<p>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam rerum sint et illum dolorum tempora ea placeat impedit quisquam.
											</p>
										</div>
									</div>
								</div>
						</div>

						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Vision