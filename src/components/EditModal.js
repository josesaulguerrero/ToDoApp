import { useContext, useState } from 'react';

// assets
import ReactDOM from 'react-dom';
import '../assets/styles/Modal.css';

// components
import { EditToDo } from '../actions';
import { context } from '../context/AppContext';

const EditModal = ({ isVisible, setIsVisible, ID, name }) => {

   const { dispatch } = useContext(context);
   const [value, setValue] = useState(name);

   const closeModal = () => {
      setIsVisible(!isVisible);
   };

   const handleOnChange = event => {
      setValue(event.target.value);
   };

   const handleOnSubmit = (event) => {
      event.preventDefault();
      dispatch(EditToDo({
         ID,
         name: value,
      }));
      closeModal();
   };

   // console.log('newName', newname);

   const content = (
      <section className={(isVisible) ? 'Modal--visible' : 'Modal--hidden'}>
         <form className="Form" onSubmit={handleOnSubmit}>
            <label htmlFor='name'>Enter your new ToDo description</label>
            <textarea autoFocus onChange={handleOnChange} className="Form__input" id='name' name='name' required placeholder="Your new ToDo description" value={value} />
            <section className="Form__buttons">
               <button onClick={closeModal} className="Form__button cancel" type='button' title='cancel' >Cancel</button>
               <button className="Form__button add" type="submit" title='Add ToDo'>Rename task!</button>
            </section>
         </form >
      </section >
   );
   return (
      ReactDOM.createPortal(content, document.getElementById('modal'))
   );
};

export default EditModal;