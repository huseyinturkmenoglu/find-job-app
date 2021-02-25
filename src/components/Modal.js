import React from "react";

const Modal = ({ children, show, handleClose }) => {
	const showModal = show ? "modal display-block" : "modal display-none";

	return (
		<div className={showModal}>
			<div className="modal-body">
				{children}
				<button className="btn-modal" onClick={() => handleClose()}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
