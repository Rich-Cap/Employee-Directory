import React, { useState } from 'react';
import Header from './components/Header/';
import Wrapper from './components/Wrapper/';
import EmployeeCard from './components/EmployeeCard/'
import Employees from './employees.json';

function App() {
  const [employees, setEmployees] = useState({
    Employees
  });

  return (
    <div className="App">
      <Header />
      <Wrapper>
      {Employees.map(employee => (
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
