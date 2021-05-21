import logo from '../asset/logo.jpg';
import menu from '../asset/icon/menu.png';
import close from '../asset/icon/x.png';
import { useState } from 'react';

const NavBar = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar__menu-btn">
					<img
						src={show ? close : menu}
						alt="menu btn"
						onClick={() => setShow(!show)}
					/>
				</div>
				<div className="navbar__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className={`navbar__items ${show && 'show'}`}>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#service">Service</a>
						</li>
						<li>
							<a href="#contact-us">Contact Us</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
