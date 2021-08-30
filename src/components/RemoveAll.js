// libraries
import { useContext } from 'react';

// assets
import '../assets/styles/RemoveAll.css';
import removeLogo from '../assets/images/trash.svg';

// components
import { DeleteAll } from '../actions';
import { context } from '../context/AppContext';

const RemoveAll = (props) => {
   const { dispatch } = useContext(context);
   const handleOnClick = () => {
      dispatch(DeleteAll());
   };

   return (
      <>
         <button onClick={handleOnClick} type="button" title='Remove all ToDos' className="RemoveButton">
            <img width='40px' src={removeLogo} alt="Delete all tasks" />
         </button>
      </>
   );
};

export default RemoveAll;