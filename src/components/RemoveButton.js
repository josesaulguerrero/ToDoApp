// libraries
import { useContext } from "react";

// context
import { context } from "../context/AppContext";

// actions
import { DeleteToDo } from "../actions";

// assets
import deleteLogo from "../assets/images/cancel.svg";
import '../assets/styles/RemoveButton.css';

const RemoveButton = ({ ID }) => {

   const { dispatch } = useContext(context);

   const handleOnClick = () => {
      dispatch(DeleteToDo({
         ID,
      }));
   };

   return (
      <button onClick={handleOnClick} className="delete-button" >
         <img width="25px" src={deleteLogo} alt="Delete this task" />
      </button>
   );
};

export default RemoveButton;
