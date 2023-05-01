import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useAppSelector } from '../stores/hooks';

type Props = {
  children: ReactNode;
};

export default function LayoutGuest({ children }: Props) {
  const router = useRouter();
  const { user, mount } = useAuth();
  console.log('mount ', mount);

  useEffect(() => {
    if (user && mount) {
      router.push('/dashboard');
    }
  }, [user, mount]);

  const darkMode = useAppSelector((state) => state.style.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">{children}</div>
    </div>
  );
}
