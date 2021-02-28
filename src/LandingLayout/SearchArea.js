import React from "react";
import { Link } from "react-router-dom";

import { persons } from "../assets/api/data.json";

export default function SearchArea() {
	return (
		<div className="searchArea">
			<div className="searchArea-btn">
				<div className="search-input">
					<div className="search-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</div>
					<div className="filter-input">
						<input
							type="text"
							placeholder="Search remote jobs..."
						/>
					</div>
				</div>
			</div>
			<div className="searchJobs">
				{persons.map((person) => (
					<div className="job" key={person.id}>
						<div className="firm-logo">
							<div className="firm">{person.company_name}</div>
						</div>
						<div className="job-title">
							{person.job}
						</div>
					</div>
				))}
			</div>
			<div className="searchMode">
				<div className="more-jobs">
					<Link to="/jobLists">More Jobs...</Link>
				</div>
			</div>
		</div>
	);
}
