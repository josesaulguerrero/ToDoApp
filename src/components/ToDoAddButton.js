// libraries
import { useState } from 'react';

// assets
import '../assets/styles/AddButton.css';
import addLogo from '../assets/images/plus.svg';

// components
import AddModal from './AddModal';

const ToDoAddButton = (props) => {

   const [isVisible, setIsVisible] = useState(false);
   const handleOnClick = () => {
      setIsVisible(true);
   };

   return (
      <>
         <button onClick={handleOnClick} type="button" title='Add new ToDo' className="AddButton">
            <img width='60px' src={addLogo} alt="Add task" />
         </button>
         {(isVisible) && <AddModal isVisible={isVisible} setIsVisible={setIsVisible} />}
      </>
   );
};

export default ToDoAddButton;
