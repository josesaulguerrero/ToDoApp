// libraries
import { useContext, useState } from 'react';

// assets
import '../assets/styles/Task.css';
import doneLogo from '../assets/images/check.svg';
import editLogo from '../assets/images/edit.svg';

// components
import { context } from '../context/AppContext';
import RemoveButton from './RemoveButton';

// actions
import { CompleteToDo } from '../actions';
import EditModal from './EditModal';

const ToDoTask = ({ todo }) => {
   const logosWidth = '20px';
   const { name, completed, ID } = todo;
   const [isVisible, setIsVisible] = useState(false);

   const { dispatch } = useContext(context);

   const handleOnEdit = event => {
      setIsVisible(true);
   };

   return (
      <>
         <article className="Task">
            <section className="content">
               {completed
                  ? <h4 className="Task__title striked" >{name}</h4>
                  : <h4 className="Task__title" >{name}</h4>
               }
            </section>
            <section className="Task__buttons">
               <button onClick={() => dispatch(CompleteToDo(ID))} className="button complete-button" disabled={completed} title="complete task">
                  <span>Done!</span>
                  <img width={logosWidth} src={doneLogo} alt="complete task" />
               </button>
               <button onClick={handleOnEdit} className="button edit-button" disabled={completed} title="edit task">
                  <span>Edit</span>
                  <img width={logosWidth} src={editLogo} alt='edit task' />
               </button>
            </section>
            <RemoveButton ID={ID} />
         </article>
         {isVisible && <EditModal ID={ID} name={name} isVisible={isVisible} setIsVisible={setIsVisible} />}
      </>
   );
};

export default ToDoTask;
