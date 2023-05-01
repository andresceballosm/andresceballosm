import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import axios from 'axios';
import { auth } from '../firebaseConfig';

interface valueAuthContext {
  login: (email: any, password: any) => void;
  loading: boolean;
  user: any;
  logout: () => void;
  signup: ({ email, password, name, company, sector, photo }: any, action: any) => Promise<void>;
  error: string;
  token: string;
  mount: boolean;
  setMount: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<any>>;
}

export const authContext = createContext<valueAuthContext>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  login: (_values: any) => {},
  loading: false,
  user: null,
  mount: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  logout: () => {},
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-pattern
  signup: ({}: any) => {},
  error: '',
  token: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setMount: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setUser: () => {},
});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no Auth providers');
  return context;
};

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState();
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [mount, setMount] = useState(false);

  console.log('user ', user);
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // eslint-disable-next-line consistent-return
  const signup = async ({ email, password, name, company, sector, photo = '' }: any, action: any) => {
    try {
      const newUserRequest = await createUserWithEmailAndPassword(auth, email, password);
      const userData = newUserRequest?.user;
      if (userData) {
        const id = userData?.uid;
        setLoading(true);
        const res = await axios({
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/create`,
          data: { displayName: name, email, firebaseUid: id, photo, company, sector, role: 'admin' },
        });
        action(true, '');
        setLoading(false);
      }
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      action(false, err.code);
      setLoading(false);
    }
  };

  const logout = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUser(null);
    setToken('');
    signOut(auth);
  };

  const resetPassword = async (email: string) => sendPasswordResetEmail(auth, email);

  const fetchUserFromDB = async (tokenValue: string) => {
    if (tokenValue) {
      try {
        const request = await axios({
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: tokenValue,
          },
          url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user`,
        });

        if (request.data.ok) {
          const userData = request.data?.response?.user;
          //   await Promise.all([
          //     crashlytics().setUserId(user.firebaseUid),
          //     crashlytics().setAttributes({
          //       email: user.email,
          //     }),
          //   ]);
          setUser(userData);
        }
        // eslint-disable-next-line no-shadow
      } catch (error: any) {
        // setMounting(false);
      }
    }
  };

  const updateUser = async (accessToken: string) => {
    setToken(accessToken);
    fetchUserFromDB(accessToken);
    setLoading(false);
  };

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateUser(currentUser?.accessToken || '');
      setLoading(false);
      setMount(true);
    });
    return () => unsubuscribe();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     auth?.currentUser
  //       .getIdToken(true)
  //       .then((idToken) => {
  //         setToken(idToken);
  //       })
  //       .catch(() => {
  //         // Handle error
  //       });
  //   }
  // }, [user]);

  return (
    <authContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        signup,
        mount,
        setMount,
        token,
        error,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
function then(arg0: any) {
  throw new Error('Function not implemented.');
}
