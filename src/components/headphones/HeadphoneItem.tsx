import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { headphones } from '../../data/data';
import Main from '../../layout/Main';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import ResponsiveImage from '../ui/ResponsiveImage';
import RelatedProducts from '../ui/RelatedProducts';

function HeadphoneItem() {
  const [qty, setQty] = useState(1);
  const { headphoneSlug } = useParams();
  const navigate = useNavigate();

  const headphone = headphones.filter(
    (headphone) => headphone.slug === headphoneSlug
  )[0];

  const incrementClick = () => {
    setQty((qty) => qty + 1);
  };

  const decrementClick = () => {
    if (qty === 1) return;
    setQty((qty) => qty - 1);
  };

  return (
    <Main className='mt-5'>
      <Button type='navigation' onClick={() => navigate(-1)}>
        Go Back &#8592;
      </Button>
      <div className='product-container'>
        <section className='headphone-product'>
          <div className='headphone-product__img-container'>
            <ResponsiveImage
              className='headphone-product__img'
              images={headphone.images}
              title={headphone.name}
            />
          </div>
          <div className='headphone-product__content'>
            {headphone.new && (
              <span className='headphone-product__subheading'>New Product</span>
            )}
            <h3 className='headphone-product__heading'>{headphone.name}</h3>
            <p className='headphone-product__description'>
              {headphone.description}
            </p>
            <span className='headphone-product__price'>
              {new Intl.NumberFormat('en-SG', {
                style: 'currency',
                currency: 'SGD',
                minimumFractionDigits: 0,
              }).format(headphone.price)}
            </span>
            <div className='headphone-product__qtySelection'>
              <div className='headphone-product__qtySelection-wrapper'>
                <button className='btn' onClick={decrementClick}>
                  -
                </button>
                <span>{qty}</span>
                <button className='btn' onClick={incrementClick}>
                  +
                </button>
              </div>
              <Button type='regular'>Add To Cart</Button>
            </div>
          </div>
        </section>
        <section className='headphone-features'>
          <div className='headphone-features__content'>
            <h3 className='headphone-features__heading'>Features</h3>
            <div className='headphone-features__info'>
              {headphone.features.split('\n').map((paragraph, index) => (
                <p key={index} className='headphone-features__text'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className='headphone-items'>
            <h3 className='headphone-items__heading'>In The Box</h3>
            <ul
              className='headphone-items__list'
              role='list'
              aria-label='Items list'
            >
              {headphone.includes.map((item, index) => (
                <li key={index}>
                  <span className='headphone-items__qty'>{item.quantity}x</span>
                  <span className='headphone-items__item'>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='headphone-gallery'>
          {headphone.gallery.map((gallery, index) => (
            <div
              className={`headphone-gallery-container${index + 1}`}
              key={gallery.attribute}
            >
              <ResponsiveImage
                className='headphone-gallery__img'
                images={gallery.images}
                title={`gallery ${index + 1}`}
              />
            </div>
          ))}
        </section>
        <RelatedProducts images={headphone.other} />
      </div>
      <Navigation dataAttrName='navigation-mode' dataAttrValue='desktop' />
    </Main>
  );
}

export default HeadphoneItem;
