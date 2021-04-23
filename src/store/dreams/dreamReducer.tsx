const initialState: DreamState = {
  dreams: [
    { id: '1', title: 'Dream 1', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '2', title: 'Dream 2', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '3', title: 'Dream 3', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' },
    { id: '4', title: 'Dream 4', description: 'Lorem ipsum something easy', date: '12/12/2020', type: 'sad' }
  ]
} 

const dreamReducer = 
(state: DreamState = initialState, action: DreamAction): DreamState => {
  return state;
}

export default dreamReducer
