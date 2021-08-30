// libraries
import { useContext, useState } from "react";
// import { v4 as key } from 'uuid';

// components
import { context } from "../context/AppContext";
import ToDoTask from './ToDoTask';
import ToDoSearch from "./ToDoSearch";

// assets 
import '../assets/styles/List.css';

const ToDoList = props => {
   const { data: { ToDos } } = useContext(context);
   const [query, setQuery] = useState('');

   const filteredToDos = ToDos.filter(todo => {
      return todo.name.toLowerCase().trim().includes(query.toLowerCase().trim());
   });

   // console.log(JSON.parse(localStorage.getItem('initialData')));

   // const filteredToDos = JSON.parse(localStorage.getItem('initialData')).ToDos.filter(todo => {
   //    return todo.name.toLowerCase().trim().includes(query.toLowerCase().trim());
   // });

   return (
      <section className="ToDoList">
         <ToDoSearch query={query} setQuery={setQuery} />
         <h2 className="ToDoList__title">Your ToDos:</h2>
         <section className="ToDoList__items">
            {filteredToDos.length > 0
               ? filteredToDos.map(todo =>
                  <ToDoTask key={todo.ID} todo={todo} />
               )
               : <h4 className='ToDoList__empty' >There is nothing over here...</h4>
            }
         </section>
      </section>
   );
};

export default ToDoList;
