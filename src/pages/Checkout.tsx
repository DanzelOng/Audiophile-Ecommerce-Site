import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useCart from '../context/CartContext';
import Main from '../layout/Main';
import Button from '../components/ui/Button';
import Navigation from '../components/ui/Navigation';
import Form from '../components/ui/Form';
import convertToSGD from '../utils/convertToSGD';

type CheckoutProps = {
  setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Checkout({ setOrderOpen }: CheckoutProps) {
  const [{ hover, btnDisabled }, setFormState] = useState({
    formSubmitted: false,
    hover: false,
    btnDisabled: false,
  });

  const navigate = useNavigate();
  const { cart } = useCart();
  const isEmpty = cart.every((product) => product.qty === 0);

  let total: number;
  let grandTotal: number;
  if (!isEmpty) {
    // grand total includes 20% VAT Fee and $50 shipping fee
    total =
      cart.reduce(
        (acc, item) => (item.qty !== 0 ? acc + item.price * item.qty : acc),
        0
      ) * 1.2;
    grandTotal = total + 50;
  }

  return (
    <Main className='mt-5 bg-white-2'>
      {isEmpty ? (
        <div className='cart__empty'>
          <div className='container'>
            <Button type='navigation' onClick={() => navigate('/')}>
              Back to Home &#8592;
            </Button>
            <div className='cart__empty-text'>
              <p> Oops! It seems like your cart is empty at the moment.</p>
              <p>
                Please add some items to your cart before proceeding to
                checkout.
              </p>
            </div>
            <div className='cart__empty-navigation'>
              <h6 className='cart__empty-heading'>Check Out Our Products</h6>
              <Navigation
                dataAttrName='navigation-mode'
                dataAttrValue='desktop'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>
          <Button type='navigation' onClick={() => navigate(-1)}>
            Go Back &#8592;
          </Button>
          <div className='checkout-wrapper'>
            <Form setFormState={setFormState} setOrderOpen={setOrderOpen} />
            <div className='cartSummary'>
              <h6 className='cartSummary__heading'>Summary</h6>
              <ul
                className='cartSummary__items'
                role='list'
                aria-label='Cart Items'
              >
                {cart.map((item, index) =>
                  item.qty !== 0 ? (
                    <li className='cartItem' key={index}>
                      <img
                        className='cartItem__img'
                        src={item.cartImg}
                        alt={item.cartName}
                        width={64}
                        height={64}
                      />
                      <div className='cartItem__info'>
                        <span className='cartItem__name' role='heading'>
                          {item.cartName}
                        </span>
                        <span className='cartItem__price' role='paragraph'>
                          {convertToSGD(item.price)}
                        </span>
                      </div>
                      <span className='cartItem__qty'>x{item.qty}</span>
                    </li>
                  ) : null
                )}
              </ul>
              <section className='cartSummaryInfo'>
                <div>
                  <div className='cartSummaryInfo-totalContainer'>
                    <span className='cartSummaryInfo-title'>Total</span>
                    <span className='cartSummaryInfo-totalPrice'>
                      {convertToSGD(total!)}
                    </span>
                  </div>
                  <div className='cartSummaryInfo-shippingContainer'>
                    <span className='cartSummaryInfo-title'>Shipping</span>
                    <span className='cartSummaryInfo-shippingFee'>
                      {convertToSGD(50)}
                    </span>
                  </div>
                  <div className='cartSummaryInfo-vatContainer'>
                    <span className='cartSummaryInfo-title'>
                      Vat (Included)
                    </span>
                    <span className='cartSummaryInfo-vatFee'>
                      {convertToSGD(0.2 * total!)}
                    </span>
                  </div>
                </div>
                <div className='cartSummaryInfo-grandTotalContainer'>
                  <div>
                    <span className='cartSummaryInfo-title'>Grand Total</span>
                    <span className='cartSummaryInfo-grandTotal'>
                      {convertToSGD(grandTotal!)}
                    </span>
                  </div>
                  <button
                    className='btn btn--checkout'
                    disabled={btnDisabled}
                    type='submit'
                    form='checkoutForm'
                    onMouseEnter={() => {
                      if (btnDisabled) return;
                      setFormState((state) => ({ ...state, hover: true }));
                    }}
                    onMouseLeave={() => {
                      if (btnDisabled) return;
                      setFormState((state) => ({ ...state, hover: false }));
                    }}
                  >
                    {hover ? 'Continue' : 'Continue & Pay'}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </Main>
  );
}

export default Checkout;
