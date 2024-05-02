import { Link } from 'react-router-dom';
import { categoryNavigations } from '../../data/data';

type CategoryNavigatorProps = {
  dataAttrName: string;
  dataAttrValue: string;
  ariaHiddenStatus?: boolean;
  setOpenMobileNav?: React.Dispatch<React.SetStateAction<boolean>>;
};

type DataProps = {
  [key: string]: string;
};

const root = document.getElementById('root') as HTMLDivElement;

function Navigation({
  dataAttrName,
  dataAttrValue,
  ariaHiddenStatus,
  setOpenMobileNav,
}: CategoryNavigatorProps) {
  const dataProps = {} as DataProps;
  dataProps[`data-${dataAttrName}`] = dataAttrValue;
  const ariaHidden =
    ariaHiddenStatus !== undefined ? !ariaHiddenStatus : undefined;

  return (
    <section
      className='audio-products'
      {...dataProps}
      aria-hidden={ariaHidden}
      role='navigation'
    >
      {categoryNavigations.map((category, index) => (
        <div key={index} className={`audio-products__${category.category}`}>
          <img
            className='audio-products__image'
            src={category.src}
            alt={category.category}
          />
          <div className={`audio-products__content`}>
            <span>{category.category}</span>
            <Link
              to={category.url}
              className='audio-products__link'
              onClick={
                setOpenMobileNav
                  ? () => {
                      if (root.hasAttribute('data-overlay')) {
                        root.removeAttribute('data-overlay');
                        setOpenMobileNav(false);
                      }
                    }
                  : () => {
                      if (root.hasAttribute('data-overlay')) {
                        root.removeAttribute('data-overlay');
                      }
                    }
              }
            >
              Shop
              <img className='audio-products_link-image' src={category.arrow} />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Navigation;
