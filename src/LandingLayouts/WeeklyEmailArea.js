import React from "react";
import Modal from "../components/Modal";

import JobHunt from "../svg/JobHunt";
import HighFive from "../svg/HighFive";

export default function WeeklyEmailArea() {
	const [showModal, setShowModal] = React.useState(false);
	const [email, setEmail] = React.useState("");

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		handleShow();
	};

	return (
		<>
			<form className="weekly-email-area" onSubmit={handleOnSubmit}>
				<div className="weekly-svg">
					<JobHunt />
				</div>
				<div className="weekly-email">
					<h1>Sign up weekly new jobs </h1>
					<div className="weekly">
						<input
							type="email"
							required
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit">Sign me up</button>
					</div>
				</div>
			</form>
			<Modal text={email} show={showModal} handleClose={handleClose}>
				<HighFive />
				<div className="info-success">
					Congratulations! We send weekly the new open jobs to your email : 
					<span className="strong-text">{email}</span>
				</div>
			</Modal>
		</>
	);
}
