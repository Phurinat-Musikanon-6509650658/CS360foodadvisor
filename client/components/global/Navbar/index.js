import delve from 'dlv';
import Cta from './cta';
import LocalSwitch from './localSwitch';
import Logo from './logo';
import Nav from './nav';
import Link from 'next/link';

import GitHubButton from 'react-github-btn';

const Navigation = ({ navigation, pageData, type }) => {
  return (
    <header className="text-gray-600 bg-white body-font border-b-2">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo
          button={delve(navigation, 'leftButton')}
          locale={delve(pageData, 'attributes.locale')}
        />

        <Nav
          links={delve(navigation, 'links')}
          locale={delve(pageData, 'attributes.locale')}
        /> 

        <Link href="/profile">
          <a type="button" className="ml-10 mr-10">
            Profile
          </a>
        </Link> 

        <Link href="/Login">
          <a type="button" className="py-4 px-6 bg-primary hover:bg-primary-darker text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-full hidden lg:block">
            LOGIN
          </a>
        </Link>
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
