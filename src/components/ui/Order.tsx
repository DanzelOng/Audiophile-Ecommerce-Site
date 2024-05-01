import { useState } from 'react';
import { type CartItem } from '../../context/CartContext';
import Button from './Button';
import useCart from '../../context/CartContext';
import convertToSGD from '../../utils/convertToSGD';
import orderConfirmation from '/assets/svgs/checkout/icon-order-confirmation.svg';

const root = document.getElementById('root') as HTMLDivElement;

type OrderProps = {
  setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Order({ setOrderOpen }: OrderProps) {
  const [viewItems, setViewItems] = useState(false);
  const { cart, clearCart } = useCart();
  const orderedProductsCount = cart.filter(
    (product) => product.qty !== 0
  ).length;

  // early return cart is empty
  if (!orderedProductsCount) return;

  const firstProduct = cart.find((product) => product.qty !== 0) as CartItem;
  return (
    <div key='orderModal' className='orderModal'>
      <div className='orderModal__wrapper'>
        <img
          src={orderConfirmation}
          alt='Order confirmation logo'
          width={64}
          height={64}
        />
        <h3 className='orderModal__heading'>
          Thank You<br></br> For Your Order
        </h3>
        <p className='orderModal__text'>
          You will receive an email confirmation shortly.
        </p>
        <div className='orderModal__summary'>
          {orderedProductsCount !== 1 ? (
            <div className='orderModal__summaryWrapper'>
              <ul
                role='list'
                aria-label='Cart Items'
                className='orderModal__cartItems'
              >
                {!viewItems ? (
                  <li key={firstProduct.cartName} className='orderModal__item'>
                    <img
                      src={firstProduct.cartImg}
                      alt={firstProduct.cartName}
                      width={50}
                      height={50}
                    />
                    <div className='orderModal__itemContainer'>
                      <div className='orderModal__itemInfo'>
                        <h6 className='orderModal__itemHeading'>
                          {firstProduct.cartName}
                        </h6>
                        <span className='orderModal__itemPrice'>
                          {convertToSGD(firstProduct.price)}
                        </span>
                      </div>
                      <span className='orderModal__itemQty'>
                        x{firstProduct.qty}
                      </span>
                    </div>
                  </li>
                ) : (
                  cart.map(
                    (product) =>
                      product.qty !== 0 && (
                        <li key={product.cartName} className='orderModal__item'>
                          <img
                            src={product.cartImg}
                            alt={product.cartName}
                            width={50}
                            height={50}
                          />
                          <div className='orderModal__itemContainer'>
                            <div className='orderModal__itemInfo'>
                              <h6 className='orderModal__itemHeading'>
                                {product.cartName}
                              </h6>
                              <span className='orderModal__itemPrice'>
                                {convertToSGD(product.price)}
                              </span>
                            </div>
                            <span className='orderModal__itemQty'>
                              x{product.qty}
                            </span>
                          </div>
                        </li>
                      )
                  )
                )}
              </ul>
              <button
                className='btn btn--viewItems'
                onClick={() => setViewItems((state) => !state)}
              >
                {!viewItems
                  ? `and ${orderedProductsCount - 1} other item${
                      orderedProductsCount - 1 !== 1 ? '(s)' : ''
                    }`
                  : `View less`}
              </button>
            </div>
          ) : (
            <div className='orderModal__cartItem'>
              <img
                src={firstProduct.cartImg}
                alt={firstProduct.cartName}
                width={50}
                height={50}
              />
              <div className='orderModal__cartItem-container'>
                <div className='orderModal__cartItem-description'>
                  <h6>{firstProduct.cartName}</h6>
                  <span>{convertToSGD(firstProduct.price)}</span>
                </div>
                <span className='orderModal__cartItem-qty'>
                  x{firstProduct.qty}
                </span>
              </div>
            </div>
          )}
          <div className='orderModal__totalPrice'>
            <span className='orderModal__totalPrice-text'>Grand Total</span>
            <span className='orderModal__totalPrice-amount'>
              {convertToSGD(
                cart.reduce(
                  (acc, item) =>
                    item.qty !== 0 ? acc + item.qty * item.price : acc,
                  0
                ) *
                  1.2 +
                  50
              )}
            </span>
          </div>
        </div>
        <Button
          type='regular'
          href='/'
          onClick={() => {
            setOrderOpen(false);
            root.removeAttribute('order-overlay');
            clearCart();
          }}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}

export default Order;
