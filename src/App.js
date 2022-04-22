import CreateEmployee from './component/CreateEmployee';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeList from './component/EmployeeList';
import EmployeeEdit from './component/EmployeeEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/EmployeeList' element={<EmployeeList />} />
          <Route path='/EmployeeEdit/:id' element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
