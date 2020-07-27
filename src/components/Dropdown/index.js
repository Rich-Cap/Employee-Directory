import React from 'react';

const Dropdown = () => {
	return (
		<div className="dropdown-inline">
        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Department
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="Engineering">Engineering</a>
          <a className="dropdown-item" href="Accounting">Sales</a>
          <a className="dropdown-item" href="HR">Human Resources</a>
        </div>
      </div>
	);
}

export default Dropdown;