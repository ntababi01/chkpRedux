import './App.css';
import AddTask from './component/AddTask';
import ListTak from './component/ListTask';
function App() {
  return (
    <div className="App">
     <h1 className='r1' >My App</h1>
      <AddTask/>
      <ListTak/>
    </div>
  );
}

export default App;
