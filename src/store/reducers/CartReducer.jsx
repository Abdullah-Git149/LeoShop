const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}
let findPro, index
const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, quantity } = action.payload
            const check = state.products.find(pro => pro.id === product.id)
            if (check) {
                return state
            } else {
                const Tprice = state.totalPrice + product.discountPrice * quantity
                const Tquantity = state.totalQuantities + quantity
                product.quantity = quantity
                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: Tprice,
                    totalQuantities: Tquantity

                }

            }

        case 'INC':

            findPro = state.products.find((pro => pro.id === action.payload))
            index = state.products.findIndex(pro => pro.id === action.payload)
            findPro.quantity += 1;
            state.products[index] = findPro
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.discountPrice,
                totalQuantities: state.totalQuantities + 1
            }
        case 'DEC':
            findPro = state.products.find((pro => pro.id === action.payload))
            index = state.products.findIndex(pro => pro.id === action.payload)
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro
                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.discountPrice,
                    totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state
            }
        case 'REMOVE':
            findPro = state.products.find((pro => pro.id === action.payload))
            const filtered = state.products.filter(pro => pro.id !== action.payload)
            return{
                ...state,
                products:filtered,
                totalPrice: state.totalPrice - findPro.discountPrice * findPro.quantity,
                totalQuantities: state.totalQuantities - findPro.quantity
            }
        default:
            return state
    }
}
export default CartReducer