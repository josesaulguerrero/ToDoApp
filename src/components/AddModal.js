// libraries
import { useContext, useState } from 'react';

// assets
import ReactDOM from 'react-dom';
import '../assets/styles/Modal.css';

// components
import { AddToDo } from '../actions';
import { context } from '../context/AppContext';

const AddModal = ({ isVisible, setIsVisible }) => {

   const { dispatch } = useContext(context);
   const [text, setValue] = useState('');

   const closeModal = (event) => {
      setIsVisible(!isVisible);
   };

   const handleOnChange = event => {
      setValue(event.target.value);
   };

   const handleOnSubmit = (event) => {
      event.preventDefault();
      dispatch(AddToDo(text));
      closeModal();
   };

   const content = (
      <section className={(isVisible) ? 'Modal--visible' : 'Modal--hidden'}>
         <form className="Form" onSubmit={handleOnSubmit}>
            <label htmlFor='name'>Enter your ToDo description</label>
            <textarea autoFocus onChange={handleOnChange} className="Form__input" id='name' name='name' value={text} required placeholder="Enter your ToDo description" />
            <section className="Form__buttons">
               <button onClick={closeModal} className="Form__button cancel" type='button' title='cancel' >Cancel</button>
               <button className="Form__button add" type="submit" title='Add ToDo'>Add Task!</button>
            </section>
         </form >
      </section >
   );
   return (
      ReactDOM.createPortal(content, document.getElementById('modal'))
   );
};

export default AddModal;
