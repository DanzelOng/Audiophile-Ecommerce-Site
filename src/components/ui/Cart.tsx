import { motion } from 'framer-motion';
import useCart from '../../context/CartContext';
import Button from './Button';
import convertToSGD from '../../utils/convertToSGD';

const variants = {
  initial: { y: -150, scale: 0 },
  animate: { y: 0, scale: 1 },
  exit: {
    y: -150,
    scale: 0,
    transition: {
      mass: 1.5,
      velocity: 5,
    },
  },
};

const root = document.getElementById('root') as HTMLDivElement;

type CartProps = {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setOpenCart }: CartProps) {
  const { cart, incrementItem, decrementItem, clearCart } = useCart();
  const isEmpty = cart.every((product) => product.qty === 0);
  return (
    <motion.div
      key='modal'
      className='cart'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
      transition={{ type: 'spring', duration: 0.6 }}
    >
      {isEmpty ? (
        <p className='cart__empty | text-align'>Your cart is currently empty</p>
      ) : (
        <>
          <div className='cart__info'>
            <h5 className='cart__heading'>
              {`Cart (${cart.reduce(
                (acc, item) => (item.qty !== 0 ? acc + item.qty : acc),
                0
              )})`}
            </h5>
            <button
              className='btn'
              onClick={() => {
                clearCart();
              }}
            >
              <span className='cart__removeAll'>Remove all</span>
            </button>
          </div>
          <ul className='cart__items' role='list' aria-label='Cart Items'>
            {cart.map((product, index) =>
              product.qty !== 0 ? (
                <li className='cart__item' key={index}>
                  <img
                    className='cart__img'
                    src={product.cartImg}
                    alt={product.cartName}
                  />
                  <div className='cart__itemInfo'>
                    <span className='cart__productName' role='heading'>
                      {product.cartName}
                    </span>
                    <span className='cart__productPrice' role='paragraph'>
                      {convertToSGD(product.price)}
                    </span>
                  </div>
                  <div className='cart__itemQtyControls'>
                    <button
                      className='btn btn--increment'
                      onClick={() => decrementItem(product.cartName)}
                    >
                      -
                    </button>
                    <span>{product.qty}</span>
                    <button
                      className='btn btn--decrement'
                      onClick={() => incrementItem(1, product.cartName)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ) : null
            )}
          </ul>
          <div className='cart__totalPriceSummary'>
            <span className='cart__totalPriceText'>Total</span>
            <span className='cart__totalPrice'>
              {/* VAT is calculated as 20% of the product total */}
              {convertToSGD(
                cart.reduce(
                  (acc, item) =>
                    item.qty !== 0 ? acc + item.price * item.qty : acc,
                  0
                ) * 1.2
              )}
            </span>
          </div>
          <Button
            type='checkout'
            href='/checkout'
            onClick={() => {
              root.removeAttribute('cart-overlay');
              setOpenCart(false);
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </motion.div>
  );
}

export default Cart;
