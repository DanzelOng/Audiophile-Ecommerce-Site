import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { getProducts } from '../data/data';
import useCart from '../context/CartContext';
import Main from '../layout/Main';
import AudioGearSection from '../components/ui/AudioGearSection';
import Navigation from '../components/ui/Navigation';
import Button from '../components/ui/Button';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import RelatedProducts from '../components/ui/RelatedProducts';
import convertToSGD from '../utils/convertToSGD';
import capitalize from '../utils/capitalize';
import PageNotFound from './PageNotFound';

type ProductsProps = {
  currentPage: string;
};

function ProductItem({ currentPage }: ProductsProps) {
  const [qty, setQty] = useState(1);
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const { incrementItem } = useCart();

  let category = currentPage.split('/')[1];
  const products = getProducts[category as keyof typeof getProducts];
  const product = products.filter((product) => product.slug === productSlug)[0];

  // render product not found if user enters invalid product slug URL
  if (!product) {
    return <PageNotFound type='product' />;
  }

  category = category.slice(0, -1);

  const incrementClick = () => {
    setQty((qty) => qty + 1);
  };

  const decrementClick = () => {
    if (qty === 1) return;
    setQty((qty) => qty - 1);
  };

  const onItemAdd = () => {
    toast.success(`Added ${product.name} to cart`, {
      className: 'react-toast',
      id: 'product',
    });
  };

  return (
    <Main className='container mt-5'>
      <Helmet>
        <meta name='description' content={product.description} />
        <title>{`Audiophile | ${capitalize(category)} - ${
          product.name
        } `}</title>
      </Helmet>
      <Button type='navigation' onClick={() => navigate(-1)}>
        Go Back &#8592;
      </Button>
      <div className='product-container'>
        <section className={`${category}-product`}>
          <div className={`${category}-product__img-container`}>
            <ResponsiveImage
              className={`${category}-product__img`}
              images={product.images}
              title={product.name}
            />
          </div>
          <div className={`${category}-product__content`}>
            {product.new && (
              <span className={`${category}-product__subheading`}>
                New Product
              </span>
            )}
            <h3 className={`${category}-product__heading`}>{product.name}</h3>
            <p className={`${category}-product__description`}>
              {product.description}
            </p>
            <span className={`${category}-product__price`}>
              {convertToSGD(product.price)}
            </span>
            <div className={`${category}-product__qtySelection`}>
              <div className={`${category}-product__qtySelection-wrapper`}>
                <button className='btn btn--increment' onClick={decrementClick}>
                  -
                </button>
                <span>{qty}</span>
                <button className='btn btn--decrement' onClick={incrementClick}>
                  +
                </button>
              </div>
              <Button
                type='regular'
                onClick={() => {
                  incrementItem(qty, product.cartName);
                  onItemAdd();
                }}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </section>
        <section className={`${category}-features`}>
          <div className={`${category}-features__content`}>
            <h3 className={`${category}-features__heading`}>Features</h3>
            <div className={`${category}-features__info`}>
              {product.features.split('\n').map((paragraph, index) => (
                <p key={index} className={`${category}-features__text`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className={`${category}-items`}>
            <h3 className={`${category}-items__heading`}>In The Box</h3>
            <ul
              className={`${category}-items__list`}
              role='list'
              aria-label='Items list'
            >
              {product.includes.map((item, index) => (
                <li key={index}>
                  <span className={`${category}-items__qty`}>
                    {item.quantity}x
                  </span>
                  <span className={`${category}-items__item`}>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${category}-gallery`}>
          {product.gallery.map((gallery, index) => (
            <div
              className={`${category}-gallery-container${index + 1}`}
              key={gallery.attribute}
            >
              <ResponsiveImage
                className={`${category}-gallery__img`}
                images={gallery.images}
                title={`gallery ${index + 1}`}
              />
            </div>
          ))}
        </section>
        <RelatedProducts images={product.other} />
      </div>
      <Navigation dataAttrName='navigation-mode' dataAttrValue='desktop' />
      <AudioGearSection />
    </Main>
  );
}

export default ProductItem;
