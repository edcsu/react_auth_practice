import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(() => {
    if (!token) {
      return
    }

    setTimeout(() => {
      submit(null, { action: 'logut', method: 'post'})
    }, 1*60*60*1000); // 1 hour as timeout
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
