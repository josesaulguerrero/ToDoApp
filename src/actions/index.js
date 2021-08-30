import { v4 as uuid } from 'uuid';

export const actionTypes = {
   ADD_TODO: 'ADD_TODO',
   EDIT_TODO: 'EDIT_TODO',
   COMPLETE_TODO: 'COMPLETE_TODO',
   DELETE_ALL: 'DELETE_ALL',
   DELETE_TODO: 'DELETE_TODO',
};

export const AddToDo = payload => ({
   type: actionTypes.ADD_TODO,
   payload: {
      name: payload,
      completed: false,
      ID: uuid()
   },
});

export const EditToDo = payload => ({
   type: actionTypes.EDIT_TODO,
   payload: payload,
});

export const CompleteToDo = payload => ({
   type: actionTypes.COMPLETE_TODO,
   payload: payload,
});

export const DeleteAll = () => ({
   type: actionTypes.DELETE_ALL,
});

export const DeleteToDo = payload => ({
   type: actionTypes.DELETE_TODO,
   payload,
});
