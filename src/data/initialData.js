if (!localStorage.getItem('initialData')) {
   localStorage.setItem('initialData', JSON.stringify({
      ToDos: [],
      completedToDos: []
   }));
}

export const initialData = JSON.parse(localStorage.getItem('initialData'));

// export const initialData = {
//    ToDos: [

//    ],
//    completedToDos: [

//    ]
// };