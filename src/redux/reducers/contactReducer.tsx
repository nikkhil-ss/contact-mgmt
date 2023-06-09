const initialState = [
  {
    id: 0,
    name: "Nikhil Singh",
    number: 1234567890,
    email: "nikhil@gmail.com",
  },
  {
    id: 1,
    name: "Aman ",
    number: 23456765,
    email: "aman@gmail",
  },
];

const contactReducer = (
  state = initialState,
  action:any
) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
