const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "CHANGE_BURGER": {
      let burger = { ...state.burger };
      let menu = { ...state.menu };
      let total = state.total;
      let [name, amount] = action.payload;
      if (amount === -1 && burger[name] < 1) {
        return { ...state };
      }
      burger[name] += amount;
      total += amount * menu[name];

      return { ...state, burger, total };
    }
    default:
      return state;
  }
};
