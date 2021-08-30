// libraries

// assets
import '../assets/styles/App.css';

// components
import ToDoCounter from './ToDoCounter';
import ToDoList from './ToDoList';
import ToDoAddButton from './ToDoAddButton';
import RemoveAll from './RemoveAll';

const Home = () => {

  return (
    <div className="App">
      <div className="Container">
        <h1 className="App__title" >Create your ToDo List 😎️</h1>
        <ToDoCounter />
        <ToDoList />
        <RemoveAll />
        <ToDoAddButton />
      </div>
    </div>
  );
};

export default Home;
