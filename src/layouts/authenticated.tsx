import React, { ReactNode, useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js';
import menuAside from '../menu-aside';
import menuNavBar from '../menu-nav-bar';
import BaseIcon from '../components/template/BaseIcon';
import NavBar from '../components/template/NavBar';
import NavBarItemPlain from '../components/template/NavBarItemPlain';
import AsideMenu from '../components/template/AsideMenu';
import FooterBar from '../components/template/FooterBar';
import { useAppDispatch, useAppSelector } from '../stores/hooks';
import FormField from '../components/template/FormField';
import { useAuth } from '../context/authContext';

type Props = {
  children: ReactNode;
};

export default function LayoutAuthenticated({ children }: Props) {
  const dispatch = useAppDispatch();
  const { user, mount } = useAuth();
  const darkMode = useAppSelector((state) => state.style.darkMode);

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);
  const router = useRouter();

  console.log('user IN  AUTHENCATED ', user);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false);
      setIsAsideLgActive(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router.events, dispatch]);

  useEffect(() => {
    console.log('mount HERE ', mount, ' user ', user);
    if (!user && mount) {
      router.push('/login');
    }
  }, [user, mount]);

  const layoutAsidePadding = 'xl:pl-60';

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar menu={menuNavBar} className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}>
          <NavBarItemPlain display="flex lg:hidden" onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}>
            <BaseIcon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain display="hidden lg:flex xl:hidden" onClick={() => setIsAsideLgActive(true)}>
            <BaseIcon path={mdiMenu} size="24" />
          </NavBarItemPlain>

          <NavBarItemPlain
            useMargin
            // eslint-disable-next-line no-console
            onClick={() => console.log('click')}
          >
            <Formik
              initialValues={{
                search: '',
              }}
              // eslint-disable-next-line no-alert
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  <Field name="search" placeholder="Search" />
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
        <FooterBar>Delaware</FooterBar>
      </div>
    </div>
  );
}
