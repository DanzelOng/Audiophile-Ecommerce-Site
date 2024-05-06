import {
  useEffect,
  useReducer,
  useContext,
  useCallback,
  createContext,
  ReactNode,
} from 'react';

export type CartItem = {
  cartName: string;
  cartImg: string;
  price: number;
  qty: number;
};

type CartStateType = {
  cart: CartItem[];
};

// initial reducer state
const initialState: CartStateType = {
  cart: [
    {
      cartName: 'XX99 MK II',
      cartImg: '/assets/cart/image-xx99-mark-two-headphones.jpg',
      price: 2999,
      qty: 0,
    },
    {
      cartName: 'XX99 MK I',
      cartImg: '/assets/cart/image-xx99-mark-one-headphones.jpg',
      price: 1750,
      qty: 0,
    },
    {
      cartName: 'XX59',
      cartImg: '/assets/cart/image-xx59-headphones.jpg',
      price: 899,
      qty: 0,
    },
    {
      cartName: 'ZX9',
      cartImg: '/assets/cart/image-zx9-speaker.jpg',
      price: 4500,
      qty: 0,
    },
    {
      cartName: 'ZX7',
      cartImg: '/assets/cart/image-zx7-speaker.jpg',
      price: 3500,
      qty: 0,
    },
    {
      cartName: 'YX1',
      cartImg: '/assets/cart/image-yx1-earphones.jpg',
      price: 599,
      qty: 0,
    },
  ],
};

// define initializer function to return initial state
function initializer(initState: CartStateType) {
  const result: string | null = localStorage.getItem('localCart');
  return result ? JSON.parse(result) : initState;
}

////////// Reducer Set Up //////////

// define reducer action types
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
}

// define type for reducer params
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: { cartName: string; qty?: number };
};

// define reducer
function reducer(state: CartStateType, action: ReducerAction): CartStateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT: {
      const cart: CartItem[] = state.cart.map((item) => {
        return item.cartName === action.payload!.cartName
          ? { ...item, qty: item.qty + action.payload!.qty! }
          : item;
      });

      return { ...state, cart };
    }

    case REDUCER_ACTION_TYPE.DECREMENT: {
      const cart: CartItem[] = state.cart.map((item) => {
        return item.cartName === action.payload!.cartName
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

      return { ...state, cart };
    }

    case REDUCER_ACTION_TYPE.CLEAR_CART:
      return initialState;

    default:
      throw new Error('Unknown Action ');
  }
}

////////// Context Set Up //////////

// create custom context
function useCartContext(initialState: CartStateType) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  // memoize cart functions
  const incrementItem = useCallback((qty: number, cartName: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INCREMENT,
      payload: { cartName, qty },
    });
  }, []);

  const decrementItem = useCallback((cartName: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DECREMENT,
      payload: { cartName },
    });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.CLEAR_CART,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(state));
  }, [state]);

  return { state, incrementItem, decrementItem, clearCart };
}

// define type of Context values
type CartContextType = ReturnType<typeof useCartContext>;

// define initital context value
const initCartContextValue: CartContextType = {
  state: initialState,
  incrementItem: () => undefined,
  decrementItem: () => undefined,
  clearCart: () => undefined,
};

// create Context
const CartContext = createContext<CartContextType>(initCartContextValue);

// define type for Cart provider
type CartProviderProps = {
  children: ReactNode;
};

// create Cart provider
export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartContext.Provider value={useCartContext(initialState)}>
      {children}
    </CartContext.Provider>
  );
}

// create custom cart hook
export default function useCart() {
  const {
    state: { cart },
    incrementItem,
    decrementItem,
    clearCart,
  } = useContext(CartContext);
  return { cart, incrementItem, decrementItem, clearCart };
}
