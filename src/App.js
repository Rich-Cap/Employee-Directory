import React, { useState } from 'react';
import Header from './components/Header/';
import Wrapper from './components/Wrapper/';
import Employees from './employees.json';

function App() {
  const [employees, setEmplyees] = useState({Employees});
  return (
    <div className="App">
      <Header />
      <Wrapper>
        
      </Wrapper>
    </div>
  );
}

export default App;
