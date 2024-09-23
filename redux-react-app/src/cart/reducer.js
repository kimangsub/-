const initialState = {
    cart : []
};

function cartReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART' :
            //이미 추가되어 있으면 개수만 늘리기
            const exsistingProduct = state.cart.find(item => item.id === action.id);
            if(exsistingProduct){
                return{
                    ...state,
                    cart : state.cart.map(item => item.id === action.id ? {...item, quantity : item.quantity + 1} : item)
                }
            } else {
            //추가가 안되어 있으면 추가하기
                return{
                    ...state, 
                    cart : [...state.cart, {id : action.id, name : action.name, quantity : 1}]
                }
            }
        case 'REMOVE_FROM_CART' :
            return{
                ...state,
                cart : state.cart.filter(item => item.id !== action.id)
            }
            // {cart : [{...}, {...}]}
        default : 
            return state;
    }
}

export default cartReducer;