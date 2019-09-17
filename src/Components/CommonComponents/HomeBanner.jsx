import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import {
	ListGroupItem,
	Card,
	Carousel,
	Jumbotron,
	Image,
	Button,
	Container,
	Row,
	Col
} from "react-bootstrap";

export default function SimpleCard() {
	return (
		<div className="mainBody">
			{/* <Image width="100%" src={require("./banner.jpg")} fluid /> */}

			<Carousel>
				<Carousel.Item>
					<Jumbotron className="Jumbo" fluid>
						<h1>Toronto Techie </h1>
						<br />
						<h5>For a stressfree in-Home Computer Assistance </h5>
						<br />
					</Jumbotron>
					<Carousel.Caption>
						<p className="content">
							The Extremes of Good and Evil Cicero, written in 45 BC. This book
							is very popular during the Renaissance.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Jumbotron className="Jumbo" fluid>
						<h1>In-Home affodable Service </h1>
						<br />
						<h5>For a cheap in-Home Computer Assistance </h5>
						<br />
					</Jumbotron>
					<Carousel.Caption>
						<p className="content">
							The Extremes of Good and Evil Cicero, written in 45 BC. This book
							is very popular during the Renaissance.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
