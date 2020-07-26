import React from 'react';

const Search = () => {
	return (
		<div>
			<form className="form-inline">
				<div className="form-group mx-sm-3 mb-2">
					<label htmlFor="inputEmployeeSearch" className="sr-only">Search Employee</label>
					<input className="form-control" placeholder="Search Employee" />
				</div>
				<button type="submit" className="btn btn-primary mb-2">Search</button>
			</form>
		</div>
	);
}

export default Search;