import { getProducts } from '../data/data';
import Main from '../layout/Main';
import Button from '../components/ui/Button';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import Navigation from '../components/ui/Navigation';

type ProductsProps = {
  currentPage: string;
};

function Products({ currentPage }: ProductsProps) {
  const products =
    getProducts[currentPage.split('/')[1] as keyof typeof getProducts];
  const category = currentPage.slice(1);
  return (
    <Main className='pt-10'>
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
    </Main>
  );
}

export default Products;
