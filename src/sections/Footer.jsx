import React from "react";
import { Link } from "react-scroll";
import logoDark from "../assets/logo_dark.svg";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { menuList } from "../Data";

const Footer = () => {
	return (
		<footer>
			<div className="wrapper text-white">
				<div className="container">
					<div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">

							<Link 
								className="footer-logo order-1"
								to="home" 
								spy={true} 
								smooth={true} 
								duration={0} 
								offset={0}
							>
								<img src={logoDark} className="brand-logo" alt="logo" />
							</Link>

							<div className="footer-social-links d-flex gap-2 mt-2 order-2 order-md-3">
								<a
									target="_blank"
									href="https://www.facebook.com/"
									className="hover-link p-2 d-inline-flex">
									<BsFacebook fontSize={20} />
								</a>
								<a
									target="_blank"
									href="https://www.instagram.com/"
									className="hover-link p-2 d-inline-flex">
									<BsInstagram fontSize={20} />
								</a>
								<a
									target="_blank"
									href="https://twitter.com/home"
									className="hover-link p-2 d-inline-flex">
									<BsTwitterX fontSize={20} />
								</a>
							</div>

							<div className="footer-menu d-flex gap-3 flex-wrap mx-auto order-3 order-md-2">
								{menuList.map(({href, link}) => (
									<Link
										key={link}
										to={href}
										spy={true}
										smooth={true}
										duration={0}
										offset={-100}
										className="menu-link mx-auto fw-normal"
									>
										{link}
									</Link>
								))}
							</div>

					</div>
				</div>
			</div>

			<div className="container">
				<div className="footer-bottom d-flex align-items-center justify-content-between flex-wrap">
					<p>
						Created by{" "}
						<a
							target="_blank"
							href="https://github.com/korosizoli?tab=repositories"
							className="hover-link fw-semibold"
						>
							Zoltán Kőrösi
						</a>
					</p>
					<div></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
