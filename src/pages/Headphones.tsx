import { headphones } from '../data/data';
import Main from '../layout/Main';
import Button from '../components/ui/Button';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import Navigation from '../components/ui/Navigation';

function Headphones() {
  return (
    <Main className='pt-10'>
      <ul
        className='headphone-products'
        role='list'
        aria-label='Headphone products'
      >
        {headphones.map((headphone) => (
          <li className='headphone' key={headphone.id}>
            <div className='headphone__img-container'>
              <ResponsiveImage
                className='headphone__img'
                images={headphone.preview}
                title={headphone.name}
              />
            </div>
            <div className='headphone__content'>
              {headphone.id === 1 && (
                <span className='headphone__subheading'>New Product</span>
              )}
              <h3 className='headphone__heading'>{headphone.name}</h3>
              <p className='headphone__description'>{headphone.description}</p>
              <Button type='regular' href={headphone.slug}>
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

export default Headphones;
