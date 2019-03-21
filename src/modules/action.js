// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_DETAIL: "GET_DETAIL"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getDetail = dia => ({
    type: Types.GET_DETAIL,
    payload: dia
  });
  
  export default {
    createItem,
    deleteItem,
    getDetail,
    Types
  };