import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { menuList } from "../Data";
import { BsCalendar3 } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const openMenu = useCallback(() => setOpen(!open), [open]);

	const [scrolled, setScrolled] = useState(null);

	useEffect(() => {
		const scrollEffect = () => {
			setScrolled(window.scrollY > 100);
		};
		window.addEventListener("scroll", scrollEffect);

		return () => window.removeEventListener("scroll", scrollEffect);
	}, [scrolled]);
	return (
		<>
			<nav className={`${scrolled ? "srolled-navbar" : ""} navbar`}>
				<div className="nav-container">
					{/*
					Logo
				*/}

					<Link to="home" spy={true} smooth={true} duration={0} offset={0}>
						<img src={logo} alt="logo" className="brand-logo" />
					</Link>
					{/*
						Menu
				*/}
					<div className="d-none d-md-inline-flex gap-4">
						{menuList.map(({ link, href }) => (
							<Link
								key={link}
								to={href}
								spy={true}
								smooth={true}
								duration={0}
								offset={-100}
								className="menu-link">
								{link}
							</Link>
						))}
					</div>
					{/*
						Buttons
				*/}
					<div>
						<a href="#" className="btn btn-primary btn-sm d-none d-lg-block">
							<div className="icon-btn">
								<div className="icon">
									<BsCalendar3 />
								</div>
								<span className="btn-double-text" data-text="Book online">
									Book online
								</span>
							</div>
						</a>

						<div onClick={openMenu} className="d-block d-md-none menu-btn">
							<HiMenuAlt3
								fontSize={20}
								className={`${open ? "d-none" : "d-block"}`}
							/>
							<HiOutlineX
								fontSize={20}
								className={`${open ? "d-block" : "d-none"}`}
							/>
						</div>
					</div>
				</div>

				{/*
					Mobile menu
			*/}
			</nav>
			<div className={`${open ? "active" : ""} mobile-menu `}>
				{open && (
					<div className="d-flex gap-4 flex-column">
						{menuList.map(({ link, href, delay }) => (
							<Link
								key={link}
								to={href}
								spy={true}
								smooth={true}
								duration={0}
								offset={-100}
								onClick={openMenu}
								className="mobile-menu-link">
								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										duration: .4,
										delay: `${delay}`
									}}>
									{link}
								</motion.div>
							</Link>
						))}
					</div>
				)}
			</div>
			<div
				onClick={openMenu}
				className={`${open ? "active" : ""} overlay `}></div>
		</>
	);
};

export default NavBar;
