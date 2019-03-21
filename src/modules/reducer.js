import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  info: [{month:'March', day:'20', max: '38', min: '18'}, {month:'March', day:'21', max: '30', min: '20'}, {month:'March', day:'22', max: '33', min: '17'}, {month:'March', day:'23', max: '31', min: '19'}],
  weather: {min: '', max: ''}
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.GET_DETAIL: {
      let info = _.cloneDeep(state);
      let itemSearch = _.find(state.info, {day: action.payload});
      let newWeather = {min: itemSearch.min, max: itemSearch.max};
      return newWeather;
      
    }

    default:
      return state;
  }
};

export default todoReducer;
