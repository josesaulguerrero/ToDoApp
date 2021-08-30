import '../assets/styles/Search.css';

const ToDoSearch = ({ query, setQuery }) => {
   const handleOnChange = event => {
      setQuery(event.target.value);
   };

   return (
      <input type="text" onChange={handleOnChange} className="search" value={query} placeholder="Search ToDo" />
   );
};

export default ToDoSearch;
