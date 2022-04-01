import MyGrid from './components/MyGrid';
/*function App() {
  let students = [
    {
      name: "Ujjwal Jamuar",
      age: 21
    }, {
      name: "Shakshi",
      age: 20
    }, {
      name: "Prateek",
      age: 21
    }, {
      name: "Chandan",
      age: 21
    }, {
      name: "Anas",
      age: 21
    }, {
      name: "Somesh",
      age: 21
    }
  ]
  return <>
    <ClassStateComp/>
    <hr/>
    <FunctionStateComp/>
    <ClassComponent/>
    <hr></hr>
    {students.map(students =>
      <>
        <First name={students.name} />
        <Second age={students.age} />
        <hr></hr>
      </>)}
  </>
}*/
function App(){
  return (
    <>
      <MyGrid/>
    </>
  );
}


export default App;