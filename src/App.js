import React, { useState, useEffect } from 'react';
import Header from './components/Header/';
import Wrapper from './components/Wrapper/';
import EmployeeCard from './components/EmployeeCard/';
import Search from './components/Search/';
import Dropdown from './components/Dropdown/';
import Employees from './employees.json';

function App() {
  const [employees, setEmployees] = useState(Employees);

  useEffect(() => {
    console.log("render")
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <Dropdown />
      <Wrapper>
      {employees.map(employee => (
          <EmployeeCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
