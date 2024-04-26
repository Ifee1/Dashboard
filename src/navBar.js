import React, { useEffect, useState } from "react";
import "./navbar.css";

import {
	IconBellRinging,
	IconUser,
	IconSearch,
	IconMenu2,
	IconX,
} from "@tabler/icons-react";

function NavBar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [mobileView, setMobileView] = useState(window.innerWidth <= 999);

	useEffect(() => {
		function handleResize() {
			setMobileView(window.innerWidth <= 999);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function toggleNav() {
		setIsNavOpen(!isNavOpen);
	}

	return (
		<div className="bigNav">
			<button
				id="buttonMobileNav"
				className={isNavOpen ? "open" : ""}
				onClick={toggleNav}
			>
				{!isNavOpen ? <IconMenu2 size={40} /> : <IconX size={40} />}
			</button>

			<main
				id="navBar"
				className={isNavOpen ? "open" : ""}
			>
				<div className="bigDiv">
					<div className="searchDiv">
						<IconSearch
							size={20}
							color="grey"
						/>
					</div>

					<div className="tagsDiv">
						<h4>Feedback</h4>
						<h4>Contact</h4>
						<h4>Help</h4>
					</div>
				</div>

				<div className="avatarDiv">
					<IconBellRinging
						className="avatarDivIcon"
						size={20}
						color="grey"
					/>
					<IconUser
						className="avatarDivIcon"
						size={20}
						color="grey"
					/>
				</div>
			</main>
		</div>
	);
}

export default NavBar;
