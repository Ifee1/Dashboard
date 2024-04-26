import { useState } from "react";
import Charts from "./charts";
import Navbar from "./navBar";
import SideBar from "./sideBar";

function App() {
	// const [mobileView, setMobileView] = useState(window.innerWidth <= 999);

	return (
		<div className="dashboard">
			<div className="whiteDiv">
				<SideBar />
				<Navbar />
				<Charts />
			</div>
		</div>
	);
}

export default App;

// <div className="whiteDiv">
//  <Navbar />
//  <Charts />

// </div>

