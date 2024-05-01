import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import iconCashOnDelivery from '/assets/svgs/checkout/icon-cash-on-delivery.svg';

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPIN: string;
};

type FormProps = {
  setFormState: React.Dispatch<
    React.SetStateAction<{
      formSubmitted: boolean;
      hover: boolean;
      btnDisabled: boolean;
    }>
  >;
  setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const root = document.getElementById('root') as HTMLDivElement;

function Form({ setFormState, setOrderOpen }: FormProps) {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      paymentMethod: 'eMoney',
    },
  });

  const paymentMethod = watch('paymentMethod');

  // registers and unregisters payment method input fields based on user preference
  useEffect(() => {
    if (paymentMethod === 'eMoney') {
      register('eMoneyNumber');
      register('eMoneyPIN');
    } else {
      unregister('eMoneyNumber');
      unregister('eMoneyPIN');
    }
  }, [register, unregister, paymentMethod]);

  const onSubmit: SubmitHandler<FormValues> = () => {
    const toastId = toast.loading(`Submitting your order...`, {
      className: 'react-toast',
    });
    setFormState((state) => ({ ...state, btnDisabled: true }));
    setTimeout(() => {
      setFormState((state) => ({
        ...state,
        formSubmitted: true,
      }));
      toast.dismiss(toastId);
      reset();
      setOrderOpen(true);
      root.setAttribute('order-overlay', '');
      toast.success(`Your order has been received by us!`, {
        className: 'react-toast',
      });
    }, 2250);
  };

  return (
    <form id='checkoutForm' className='form' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='form__heading'>Checkout</h3>
      <section className='form__billingDetails'>
        <h6 className='form__billingDetails-heading'>Billing Details</h6>
        <div className='form__billingDetails-container'>
          <div className='form__billingDetails-nameContainer'>
            <div className={errors.name && 'invalid'}>
              <label htmlFor='name'>Name</label>
              {errors.name && <p className='errorMsg'>{errors.name.message}</p>}
            </div>
            <input
              type='text'
              id='name'
              placeholder='Alexei Ward'
              {...register('name', {
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Minimum of 3 characters',
                },
              })}
            />
          </div>
          <div className='form__billingDetails-emailContainer'>
            <div className={errors.email && 'invalid'}>
              <label htmlFor='email'>Email Address</label>
              {errors.email && (
                <p className='errorMsg'>{errors.email.message}</p>
              )}
            </div>
            <input
              type='gmail'
              id='email'
              placeholder='alexei@mail.com'
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Wrong format',
                },
              })}
            />
          </div>
          <div className='form__billingDetails-phoneNumberContainer'>
            <div className={errors.phoneNumber && 'invalid'}>
              <label htmlFor='phoneNumber'>Phone Number</label>
              {errors.phoneNumber && (
                <p className='errorMsg'>{errors.phoneNumber.message}</p>
              )}
            </div>
            <input
              type='text'
              id='phoneNumber'
              placeholder='+1 202-555-0136'
              {...register('phoneNumber', {
                required: 'This field is required',
                pattern: {
                  value: /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
                  message: 'Wrong format',
                },
              })}
            />
          </div>
        </div>
      </section>
      <section className='form__shippingInfo'>
        <h6 className='form__shippingInfo-heading'>Shipping Info</h6>
        <div className='form__shippingInfo-container'>
          <div className='form__shippingInfo-addressContainer'>
            <div className={errors.address && 'invalid'}>
              <label htmlFor='address'>Address</label>
              {errors.address && (
                <p className='errorMsg'>{errors.address.message}</p>
              )}
            </div>
            <input
              type='text'
              id='address'
              placeholder='1137 Williams Avenue'
              {...register('address', {
                required: 'This field is required',
              })}
            />
          </div>
          <div className='form__shippingInfo-zipcodeContainer'>
            <div className={errors.zipcode && 'invalid'}>
              <label htmlFor='zipcode'>Zip Code</label>
              {errors.zipcode && (
                <p className='errorMsg'>{errors.zipcode.message}</p>
              )}
            </div>
            <input
              type='text'
              id='zipcode'
              placeholder='10001'
              {...register('zipcode', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Must have 6 digits',
                },
                pattern: {
                  value: /[0-9]{4}/,
                  message: 'Cannot have non numeric characters',
                },
              })}
            />
          </div>
          <div className='form__shippingInfo-cityContainer'>
            <div className={errors.city && 'invalid'}>
              <label htmlFor='city'>City</label>
              {errors.city && <p className='errorMsg'>{errors.city.message}</p>}
            </div>
            <input
              type='text'
              id='city'
              placeholder='New York'
              {...register('city', {
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length of 3 characters',
                },
              })}
            />
          </div>
          <div className='form__shippingInfo-countryContainer'>
            <div className={errors.country && 'invalid'}>
              <label htmlFor='country'>Country</label>
              {errors.country && (
                <p className='errorMsg'>{errors.country.message}</p>
              )}
            </div>
            <input
              type='text'
              id='country'
              placeholder='United States'
              {...register('country', {
                required: 'This field is required',
                minLength: {
                  value: 3,
                  message: 'Minimum length of 3 characters',
                },
              })}
            />
          </div>
        </div>
      </section>
      <section className='form__paymentDetails'>
        <h6 className='form__paymentDetails-heading'> Payment Details</h6>
        <div className='form__paymentDetails-container'>
          <h6 className='form__paymentDetails-type'>Payment Method</h6>
          <div className='form__paymentDetails-radio1Container'>
            <input
              type='radio'
              id='eMoney'
              value='eMoney'
              {...register('paymentMethod')}
            />
            <label htmlFor='eMoney'>e-Money</label>
          </div>
          <div className='form__paymentDetails-radio2Container'>
            <input
              type='radio'
              id='cashOnDelivery'
              value='cashOnDelivery'
              {...register('paymentMethod')}
            />
            <label htmlFor='cashOnDelivery'>Cash on Delivery</label>
          </div>
          <AnimatePresence>
            {paymentMethod === 'eMoney' ? (
              <>
                <motion.div
                  layout
                  key='eMoneyNumber'
                  initial={{ scaleY: 0, transformOrigin: 'left' }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.15 }}
                  className='form__paymentDetails-eMoneyNumberContainer'
                >
                  <div className={errors.eMoneyNumber && 'invalid'}>
                    <label htmlFor='eMoneyNumber'>e-Money Number</label>
                    {errors.eMoneyNumber && (
                      <p className='errorMsg'>{errors.eMoneyNumber.message}</p>
                    )}
                  </div>
                  <input
                    type='text'
                    id='eMoneyNumber'
                    placeholder='238521993'
                    {...register('eMoneyNumber', {
                      required: 'This field is required',
                      minLength: {
                        value: 9,
                        message: 'Must have 9 digits',
                      },
                    })}
                  />
                </motion.div>
                <motion.div
                  layout
                  key='eMoneyPIN'
                  initial={{ scaleY: 0, transformOrigin: 'left' }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.15 }}
                  className='form__paymentDetails-eMoneyPINContainer'
                >
                  <div className={errors.eMoneyPIN && 'invalid'}>
                    <label htmlFor='eMoneyPIN'>e-Money PIN</label>
                    {errors.eMoneyPIN && (
                      <p className='errorMsg'>{errors.eMoneyPIN.message}</p>
                    )}
                  </div>
                  <input
                    type='text'
                    id='eMoneyPIN'
                    placeholder='6891'
                    {...register('eMoneyPIN', {
                      required: 'This field is required',
                      minLength: {
                        value: 4,
                        message: 'Must have 4 digits',
                      },
                      pattern: {
                        value: /[0-9]{4}/,
                        message: 'Cannot have non numeric characters',
                      },
                    })}
                  />
                </motion.div>
              </>
            ) : (
              <motion.div
                layout
                key='cashOnDelivery'
                className='cashOnDelivery'
              >
                <img
                  src={iconCashOnDelivery}
                  alt='Cash On Delivery'
                  width={48}
                  height={48}
                />
                <p className='cashOnDelivery__info'>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </form>
  );
}

export default Form;
