import { actionTypes } from '../actions';

export const reducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
      case actionTypes.ADD_TODO:
         localStorage.setItem('initialData', JSON.stringify({
            ...state,
            ToDos: [
               payload,
               ...state.ToDos
            ]
         }));
         return { ...JSON.parse(localStorage.getItem('initialData')) };
      case actionTypes.EDIT_TODO:
         localStorage.setItem('initialData', JSON.stringify({
            ...state,
            ToDos: [
               ...state.ToDos.map(todo => {
                  if (todo.ID !== payload.ID)
                     return { ...todo };
                  else {
                     return {
                        ...todo,
                        name: payload.name,
                     };
                  }
               })
            ]
         }));
         return {
            ...JSON.parse(localStorage.getItem('initialData'))
         };
      case actionTypes.COMPLETE_TODO:
         let completedTask = null;
         localStorage.setItem('initialData', JSON.stringify({
            ...state,
            ToDos: [
               ...state.ToDos.map(todo => {
                  if (todo.ID !== payload)
                     return { ...todo };
                  else {
                     const newCompletedTask = {
                        ...todo,
                        completed: true
                     };
                     completedTask = newCompletedTask;
                     return newCompletedTask;
                  }
               })
            ],
            completedToDos: [
               completedTask,
               ...state.completedToDos,
            ]
         }));
         return {
            ...JSON.parse(localStorage.getItem('initialData'))
         };
      case actionTypes.DELETE_ALL:
         localStorage.setItem('initialData', JSON.stringify({
            ...state,
            ToDos: [],
            completedToDos: []
         }));

         return {
            ...JSON.parse(localStorage.getItem('initialData'))
         };
      case actionTypes.DELETE_TODO:
         localStorage.setItem('initialData', JSON.stringify({
            ...state,
            ToDos: [
               ...state.ToDos.filter(todo => todo.ID !== payload.ID)
            ],
            completedToDos: [
               ...state.completedToDos.filter(todo => todo.ID !== payload.ID)
            ],
         }));
         return {
            ...JSON.parse(localStorage.getItem('initialData'))
         };
      default:
         return state;
   }
};