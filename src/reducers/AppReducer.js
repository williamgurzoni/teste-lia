const date = new Date();
const format = { year: 'numeric', month: 'long', day: 'numeric' };

const INITIAL_STATE = {
  name: 'William',
  lab: '',
  exam: '',
  time: '',
  date: date.toLocaleDateString('pt-BR', format),
};

export default (state = INITIAL_STATE, action) => {
  console.log('Reducer: ', action.type, action.payload);
  switch (action.type) {
    case 'SET_LAB':
      return { ...state, lab: action.payload };
    case 'SET_EXAM':
      return { ...state, exam: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
