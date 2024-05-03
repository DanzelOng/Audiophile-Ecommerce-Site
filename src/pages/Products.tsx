import { Helmet } from 'react-helmet-async';
import { getProducts, categoryMetaInfo, TMetaInfo } from '../data/data';
import Main from '../layout/Main';
import AudioGearSection from '../components/ui/AudioGearSection';
import Button from '../components/ui/Button';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import Navigation from '../components/ui/Navigation';
import capitalize from '../utils/capitalize';

type ProductsProps = {
  currentPage: string;
};

function Products({ currentPage }: ProductsProps) {
  const products =
    getProducts[currentPage.split('/')[1] as keyof typeof getProducts];
  const category = currentPage.slice(1);
  return (
    <Main className='container pt-10'>
      <Helmet>
        <meta
          name='description'
          content={categoryMetaInfo[category as keyof TMetaInfo]}
        />
        <title>{`Audiophile | ${capitalize(category)}`}</title>
      </Helmet>
      <ul
        className={`${category}-products`}
        role='list'
        aria-label={`${category} products`}
      >
        {products.map((product) => (
          <li className={category} key={product.id}>
            <div className={`${category}__img-container`}>
              <ResponsiveImage
                className={`${category}__img`}
                images={product.preview}
                title={product.name}
              />
            </div>
            <div className={`${category}__content`}>
              {product.id === 1 && (
                <span className={`${category}__subheading`}>New Product</span>
              )}
              <h3 className={`${category}__heading`}>{product.name}</h3>
              <p className={`${category}__description`}>
                {product.description}
              </p>
              <Button type='regular' href={product.slug}>
                See Product
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Navigation dataAttrName='navigation-mode' dataAttrValue='desktop' />
      <AudioGearSection />
    </Main>
  );
}

export default Products;
