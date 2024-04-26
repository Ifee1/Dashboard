import React from "react";
import "./sidebar.css";

function SideBar() {
	return (
		<div className="sideBar">
			<div className="iconsDiv">
				<div className="icon1">
					<img
						className="icons"
						src="./houseSvg.svg"
						alt=""
					/>
				</div>

				<img
					className="icons"
					src="./pieChartSvg.svg"
					alt=""
				/>
				<img
					className="icons"
					src="./messageSvg.svg"
					alt=""
				/>
				<img
					className="icons"
					src="./radioSvg.svg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default SideBar;
