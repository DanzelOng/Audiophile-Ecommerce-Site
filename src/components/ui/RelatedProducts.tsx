import { type RelatedProductImgs } from '../../data/data';
import ResponsiveImage from './ResponsiveImage';
import Button from './Button';

type RelatedProductsProps = {
  images: RelatedProductImgs[];
};

function RelatedProducts({ images }: RelatedProductsProps) {
  return (
    <section className='related-products'>
      <h3 className='related-products__heading'>You May Also Like</h3>
      <ul
        role='list'
        aria-label='related-products'
        className='related-products__links'
      >
        {images.map((image, index) => (
          <li key={index} className='related-products__product'>
            <div className='related-products__img-container'>
              <ResponsiveImage
                className='related-products__img'
                images={image.images}
                title={image.name}
              />
            </div>
            <div className='related-products__content'>
              <h5 className='related-products__productHeading'>{image.name}</h5>
              <Button type='regular' href={`/${image.category}/${image.slug}`}>
                See Product
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RelatedProducts;
