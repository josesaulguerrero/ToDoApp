// libraries
import { useContext } from 'react';

// context
import { context } from '../context/AppContext.js';

const ToDoCounter = () => {

   const { data: { completedToDos, ToDos } } = useContext(context);
   // const { completedToDos, ToDos } = JSON.parse(localStorage.getItem('initialData'));
   return (
      ToDos.length === completedToDos.length
         ? <h4 className="counter" >You have done all your tasks!</h4>
         : <h4 className="counter" >You have completed {completedToDos.length} of {ToDos.length} tasks</h4>
   );
};

export default ToDoCounter;
