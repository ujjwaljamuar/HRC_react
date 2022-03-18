import './App.css';

import First from './components/First';
import Second from './components/Second';
import ClassComponent from './components/ClassComponent';


function App() {
  let students = [
    {
      name: "Ujjwal Jamuar",
      age: 26
    }, {
      name: "Shakshi",
      age: 20
    }, {
      name: "Prateek",
      age: 21
    }, {
      name: "Mishra",
      age: 21
    }
  ]
  return <>
    <ClassComponent/>
    <hr></hr>
    {students.map(students =>
      <>
        <First name={students.name} />
        <Second age={students.age} />
        <hr></hr>
      </>)}
  </>
}

export default App;
