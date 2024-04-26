import React, { useEffect, useState } from "react";

import {
	IconCircleCaretRight,
	IconClockFilled,
	IconEaseIn,
	IconChartLine,
	IconStarFilled,
	IconChevronRight,
	IconDots,
	IconCar,
	IconShoppingBag,
	IconBrandNetflix,
	IconHighlight,
} from "@tabler/icons-react";

function Charts() {
	const [mobileView, setMobileView] = useState(window.innerWidth <= 999);
	const [slide1, setSlide1] = useState(true);
	const [slide2, setSlide2] = useState(false);

	useEffect(() => {
		function handleResize() {
			setMobileView(window.innerWidth <= 999);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function toggleSlide(slideNumber) {
		if (slideNumber === 1) {
			setSlide1(!slide1);
			setSlide2(false);
		} else if (slideNumber === 2) {
			setSlide2(!slide2);
			setSlide1(false);
		}
	}

	return (
		<div className="overallChart">
			{mobileView && (
				<section className="slideDiv">
					<div
						className={`slide1 ${slide1 ? "clicked" : ""}`}
						onClick={() => toggleSlide(1)}
					>
						<img
							className="toggleIcon"
							src="/atmtogglesvg.svg"
							alt=""
						/>
					</div>
					<div
						className={`slide1 ${slide2 ? "clicked" : ""}`}
						onClick={() => toggleSlide(2)}
					>
						<img
							className="toggleIcon"
							src="/chartstogglesvg.svg"
							alt=""
						/>
					</div>
				</section>
			)}

			{mobileView ? (
				slide1 ? (
					<div className="slide1Div">
						<div className="smallChartsContainer">
							<div className="smallCharts">
								<div className="iconDiv">
									<IconChartLine
										size={20}
										color="grey"
									/>
								</div>
								<div className="chartVisitors">
									<h4>Visitors</h4>
									<h3>10,320</h3>
								</div>
							</div>
							<div className="smallCharts">
								<div className="iconDiv">
									<IconEaseIn
										size={20}
										color="grey"
									/>
								</div>
								<div className="chartVisitors">
									<h4>Customers</h4>
									<h3>4,628</h3>
								</div>
							</div>
							<div className="smallCharts">
								<div className="iconDiv">
									<IconChartLine
										size={20}
										color="white"
									/>
								</div>
								<div className="chartVisitors">
									<h4 style={{ color: "#ffff" }}>Orders</h4>
									<h3 style={{ color: "#ffff" }}>2,980</h3>
								</div>
							</div>
						</div>
						<div className="bigChart">
							<img
								className="bigChartImage"
								src="/barChart.jpg"
								alt=""
							/>
						</div>
						<div className="smallTabsContainer">
							<div className="smallImage">
								<div className="imageText">
									<p>Spent time</p>
									<p>4h 26min</p>
								</div>
								<img
									className="smallTabImage"
									src="/smallChart.png"
									alt=""
								/>
							</div>
							<div className="smallTabText">
								<div className="nameAndPix">
									<img
										className="tabImage"
										src="/femaleAvatar.jpg"
										alt=""
									/>
									<div className="name">
										<h4>Lily Donovan</h4>
										<p>Business Trainer</p>
									</div>
								</div>
								<span>How to properly manage your personal budget?</span>
								<div className="videoLogs">
									<div className="eachTab">
										<IconCircleCaretRight
											size={20}
											color="purple"
										/>
										<p>Video</p>
									</div>
									<div className="eachTab">
										<IconClockFilled
											size={20}
											color="blue"
										/>
										<p>15 mins</p>
									</div>
									<div className="eachTab">
										<IconStarFilled
											size={20}
											color="red"
										/>
										<p>12 Likes</p>
									</div>
								</div>

								<div className="connectButtonDiv">
									<h4>5 days ago</h4>
									<button className="connectButton">
										Connect
										<IconChevronRight />
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="slide2Div">
						<div className="sideChart">
							<IconHighlight
								color="#7f7a76"
								className="pen"
							/>
							<div className="amountDiv">
								<h3>$10,600</h3>
							</div>
							<div className="circles">
								<div className="outerCircle">
									<div className="tinyCircle"></div>
									<div className="innerCircle">
										<h3>38%</h3>
									</div>
								</div>
							</div>
							<div className="myCard">
								<h3>My card</h3>
								<IconDots />
							</div>
							<div className="creditCard">
								<img
									className="atmCard"
									src="/atmCard.jpg"
									alt=""
								/>
							</div>
							<div className="transactionDiv">
								<h3>Transaction</h3>
								<img
									className="redPlus"
									src="/redPlus.svg"
									alt=""
								/>
							</div>
							<div className="transactionContainer">
								<div className="transactionItemDiv">
									<div className="transactionIcon">
										<IconCar color="#ff0000" />
									</div>
									<div className="transactionItem">
										<p>Taxi</p>
										<p>01.21pm</p>
									</div>
								</div>
								<div className="transactionAmount">
									<h2>$9.20</h2>
								</div>
							</div>

							<div className="transactionContainer">
								<div className="transactionItemDiv">
									<div className="transactionIcon">
										<IconShoppingBag color="#ff0000" />
									</div>
									<div className="transactionItem">
										<p>Shopping</p>
										<p>11:15AM</p>
									</div>
								</div>
								<div className="transactionAmount">
									<h2>$142.00</h2>
								</div>
							</div>

							<div className="transactionContainer">
								<div className="transactionItemDiv">
									<div className="transactionIcon">
										<IconBrandNetflix color="#ff0000" />
									</div>
									<div className="transactionItem">
										<p>Netflix</p>
										<p>Jan 10, 2020</p>
									</div>
								</div>
								<div className="transactionAmount">
									<h2>$24.99</h2>
								</div>
							</div>
						</div>
					</div>
				)
			) : (
				<div className="overallChart">
					<div className="charts">
						<div className="smallChartsContainer">
							<div className="smallCharts">
								<div className="iconDiv">
									<IconChartLine
										size={20}
										color="grey"
									/>
								</div>
								<div className="chartVisitors">
									<h4>Visitors</h4>
									<h3>10,320</h3>
								</div>
							</div>
							<div className="smallCharts">
								<div className="iconDiv">
									<IconEaseIn
										size={20}
										color="grey"
									/>
								</div>
								<div className="chartVisitors">
									<h4>Customers</h4>
									<h3>4,628</h3>
								</div>
							</div>
							<div className="smallCharts">
								<div className="iconDiv">
									<IconChartLine
										size={20}
										color="white"
									/>
								</div>
								<div className="chartVisitors">
									<h4 style={{ color: "#ffff" }}>Orders</h4>
									<h3 style={{ color: "#ffff" }}>2,980</h3>
								</div>
							</div>
						</div>
						<div className="bigChart">
							<img
								className="bigChartImage"
								src="/barChart.jpg"
								alt=""
							/>
						</div>
						<div className="smallTabsContainer">
							<div className="smallImage">
								<div className="imageText">
									<p>Spent time</p>
									<p>4h 26min</p>
								</div>
								<img
									className="smallTabImage"
									src="/smallChart.png"
									alt=""
								/>
							</div>
							<div className="smallTabText">
								<div className="nameAndPix">
									<img
										className="tabImage"
										src="/femaleAvatar.jpg"
										alt=""
									/>
									<div className="name">
										<h4>Lily Donovan</h4>
										<p>Business Trainer</p>
									</div>
								</div>
								<span>How to properly manage your personal budget?</span>
								<div className="videoLogs">
									<div className="eachTab">
										<IconCircleCaretRight
											size={20}
											color="purple"
										/>
										<p>Video</p>
									</div>
									<div className="eachTab">
										<IconClockFilled
											size={20}
											color="blue"
										/>
										<p>15 mins</p>
									</div>
									<div className="eachTab">
										<IconStarFilled
											size={20}
											color="red"
										/>
										<p>12 Likes</p>
									</div>
								</div>

								<div className="connectButtonDiv">
									<h4>5 days ago</h4>
									<button className="connectButton">
										Connect
										<IconChevronRight />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="sideChart">
						<IconHighlight
							color="#7f7a76"
							className="pen"
						/>
						<div className="amountDiv">
							<h3>$10,600</h3>
						</div>
						<div className="circles">
							<div className="outerCircle">
								<div className="tinyCircle"></div>
								<div className="innerCircle">
									<h3>38%</h3>
								</div>
							</div>
						</div>
						<div className="myCard">
							<h3>My card</h3>
							<IconDots />
						</div>
						<div className="creditCard">
							<img
								className="atmCard"
								src="/atmCard.jpg"
								alt=""
							/>
						</div>
						<div className="transactionDiv">
							<h3>Transaction</h3>
							<img
								className="redPlus"
								src="/redPlus.svg"
								alt=""
							/>
						</div>
						<div className="transactionContainer">
							<div className="transactionItemDiv">
								<div className="transactionIcon">
									<IconCar color="#ff0000" />
								</div>
								<div className="transactionItem">
									<p>Taxi</p>
									<p>01.21pm</p>
								</div>
							</div>
							<div className="transactionAmount">
								<h2>$9.20</h2>
							</div>
						</div>

						<div className="transactionContainer">
							<div className="transactionItemDiv">
								<div className="transactionIcon">
									<IconShoppingBag color="#ff0000" />
								</div>
								<div className="transactionItem">
									<p>Shopping</p>
									<p>11:15AM</p>
								</div>
							</div>
							<div className="transactionAmount">
								<h2>$142.00</h2>
							</div>
						</div>

						<div className="transactionContainer">
							<div className="transactionItemDiv">
								<div className="transactionIcon">
									<IconBrandNetflix color="#ff0000" />
								</div>
								<div className="transactionItem">
									<p>Netflix</p>
									<p>Jan 10, 2020</p>
								</div>
							</div>
							<div className="transactionAmount">
								<h2>$24.99</h2>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Charts;
