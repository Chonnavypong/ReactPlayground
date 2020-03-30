import React from "react";
import styled from "styled-components";
import { DivFooterY } from "./../../componentsStyle/footer";

const Button = styled.button`
	cursor: pointer;
	background: transparent;
	font-size: 16px;
	border-radius: 3px;
	color: ${props => (props.primary ? "violet" : "palevioletred")};
	border: ${props =>
		props.primary ? "2px solid violet" : "2px solid palevioletred"};
	margin: 0 1em;
	padding: 0.25em 1em;
	transition: 0.5s all ease-out;
	&:hover {
		color: white;
		background-color: ${props => (props.primary ? "violet" : "palevioletred")};
	}
`;

const DivFooter = styled.div`
	background-color: red;
	color: white;
	padding: 20px;
	text-align: center;
`;

const Footer = () => {
	return (
		<>
			<div
				style={{
					backgroundColor: "lightblue",
					height: 100,
					marginTop: 10,
					padding: 20,
					textAlign: "center"
				}}
			>
				<p> React Router v5 Browser Example (c) {new Date().getFullYear()} </p>
			</div>
			<div className="container">
				<div className="row">
					<Button className="col-md-5">I am a Button</Button>
					<Button primary className="col-md-5">
						I am a Button
					</Button>
				</div>
			</div>
			<DivFooter>
				<p> Footer </p>
			</DivFooter>
			<DivFooterY>
				<p> import Style </p>
			</DivFooterY>
		</>
	);
};

export default Footer;
