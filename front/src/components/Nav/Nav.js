/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import KakaoLogin from '../Kakao/KakaoLogin';
// import KakaoShareButton from '../KakaoShare';

const navigation = [
  { name: 'Home', href: '/Home', current: false },
  { name: 'All cities', href: '/allcities', current: false },
  // { name: <KakaoLogout /> },
];

const kakao = [{ name: 'Logout', current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const logout = () => {
    sessionStorage.removeItem('getToken');
    alert('다음에 또 만나요👋');
  };
  return (
    <Disclosure as="nav" className="bg-transparent font-fred font-custom-sub">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/imgs/CountryGOGO.png"
                    alt="CountryGOGO"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/imgs/CountryGOGO.png"
                    alt="CountryGoGo"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300  hover:text-custom-main hover:text-xl ',
                          'px-3 py-1 rounded-md text-lg font-medium items-center justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {kakao.map((item) => (
                      <a
                        onClick={logout}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white cursor-pointer'
                            : 'text-amber-400  cursor-pointer hover:text-amber-600 hover:text-xl ',
                          'px-3 py-1 rounded-md cursor-pointer text-lg font-medium items-center justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-custom-main text-white'
                      : 'text-gray-300 hover:bg-custom-main hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
