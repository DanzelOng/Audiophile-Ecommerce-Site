import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Main from '../layout/Main';
import Navigation from '../components/ui/Navigation';
import Button from '../components/ui/Button';
import capitalize from '../utils/capitalize';

type PageNotFoundProps = {
  type?: string;
};

function PageNotFound({ type = 'page' }: PageNotFoundProps) {
  const navigate = useNavigate();
  return (
    <Main className='mt-5'>
      <Helmet>
        <title>{capitalize(type)} Not Found</title>
      </Helmet>
      <div className='pageNotFound'>
        <div className='pageNotFound__wrapper | container'>
          <Button type='navigation' onClick={() => navigate('/')}>
            Back to Home &#8592;
          </Button>
          <div className='pageNotFound__text'>
            <p>Sorry, we can't find the {type} you're looking for</p>
            <p>Let's get you back on track...</p>
          </div>
          <div className='pageNotFound__empty-navigation'>
            <h6 className='pageNotFound__empty-heading'>
              Check Out Our Products
            </h6>
            <Navigation
              dataAttrName='navigation-mode'
              dataAttrValue='desktop'
            />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default PageNotFound;
