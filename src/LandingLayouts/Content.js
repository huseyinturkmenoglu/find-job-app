import React from "react";
import { Link } from "react-router-dom";
import OnePerson from "../images/mateus-campos-felipe-bg.png";

export default function Content() {
	return (
		<div className="content">
			<div className="content-message">
				<div className="messages">
					<h1>Find a new remote jobs</h1>
					<p className="p-one">We compare remote jobs all around.</p>
					<p className="p-two">
						We are sending the remote jobs according to
						<span className="underline">
							your skills and interests.
						</span>
					</p>
					<Link className="connect-btn" to="/new"> Connect With Us</Link>
				</div>
			</div>
			<div className="content-image">
				<img src={OnePerson} />
			</div>
		</div>
	);
}
