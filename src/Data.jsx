export const menuList = [
	{
		link: 'Home',
		href: 'home',
		delay: .3,
	},
	{
		link: 'About us',
		href: 'about',
		delay: .36,
	},
	{
		link: 'Services',
		href: 'services',
		delay: .42,
	},
	{
		link: 'Our Vision',
		href: 'vision',
		delay: .48,
	},
	{
		link: 'Doctors',
		href: 'doctors',
		delay: .54,
	},
]

import { BsHeartPulse,
	BsBandaid,  
	BsDropletHalf,
	BsGem} from "react-icons/bs";

export const servicesList = [
	{
		icon: <BsHeartPulse />,
		title: "Cardiology",
		desc: "Sapiente aliquid impedit dolor, ipsum ab eaque? Id, repellendus quos.",
	},
	{
		icon: <BsBandaid />,
		title: "General Surgery",
		desc: "Sapiente aliquid impedit dolor, ipsum ab eaque? Id, repellendus quos.",
	},
	{
		icon: <BsDropletHalf />,
		title: "Blood Test",
		desc: "Sapiente aliquid impedit dolor, ipsum ab eaque? Id, repellendus quos.",
	},
	{
		icon: <BsGem />,
		title: "Premium Care",
		desc: "Sapiente aliquid impedit dolor, ipsum ab eaque? Id, repellendus quos.",
	},
]

import doc1 from "./assets/doc1.jpg"
import doc2 from "./assets/doc2.jpg"
import doc3 from "./assets/doc3.jpg"
import doc4 from "./assets/doc4.jpg"

export const docList = [
	{
		img: doc1,
		name: 'Dr. Bernard Beer',
		spec: 'psychiatry',
		facebook: 'https://www.facebook.com/',
		messenger: 'https://www.messenger.com/',
		twitter: 'https://twitter.com/home',
		mail: 'mailto:name@email.com',
	},
	{
		img: doc2,
		name: 'Dr. Beverly Brandy',
		spec: 'cancer',
		facebook: 'https://www.facebook.com/',
		messenger: 'https://www.messenger.com/',
		twitter: 'https://twitter.com/home',
		mail: 'mailto:name@email.com',
	},
	{
		img: doc3,
		name: 'Dr. William Wine',
		spec: 'pediatrics',
		facebook: 'https://www.facebook.com/',
		messenger: 'https://www.messenger.com/',
		twitter: 'https://twitter.com/home',
		mail: 'mailto:name@email.com',
	},
	{
		img: doc4,
		name: 'Dr. Ruby Rum',
		spec: 'psychiatry',
		facebook: 'https://www.facebook.com/',
		messenger: 'https://www.messenger.com/',
		twitter: 'https://twitter.com/home',
		mail: 'mailto:name@email.com',
	},
]