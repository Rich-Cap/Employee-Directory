import React, { useState } from 'react';

const Search = () => {
	const [value, setvalue] = useState();

	const handleChange = (e) => {
		console.log(e.target.value)
	}

	return (
		<div>
			<form className="form-inline">
				<div className="form-group mx-sm-3 mb-2">
					<label htmlFor="inputEmployeeSearch" className="sr-only">Search Employee</label>
					<input className="form-control" value='value' placeholder="Search Employee" onChange={() => handleChange()}/>
				</div>
				<button type="submit" value="submit" className="btn btn-primary mb-2">Search</button>
			</form>
		</div>
	);
}

export default Search;