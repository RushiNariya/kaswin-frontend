import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AuthBanner from './AuthBanner';
import Login from './Login';
import SignUp from './SignUp';

function AuthWrapper() {
  useEffect(() => {
    const signup: any = document.querySelector('.signup');
    const login: any = document.querySelector('.login');
    const slider: any = document.querySelector('.slider');
    const formSection: any = document.querySelector('.form-section');

    const sliderOne = () => {
      slider.classList.add('moveslider');
      formSection.classList.add('form-section-move');
    };

    const sliderTwo = () => {
      slider.classList.remove('moveslider');
      formSection.classList.remove('form-section-move');
    };

    signup.addEventListener('click', sliderOne);

    login.addEventListener('click', sliderTwo);

    () => {
      signup.removeEventListener('click', sliderOne);
      login.removeEventListener('click', sliderTwo);
    };
  }, []);

  return (
    <div className="relative flex items-center w-[100vw] justify-center lg:justify-normal min-h-screen p-0 overflow-hidden bg-center bg-cover">
      <Helmet>
        <title>Sign In | Kaswin</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="w-[100vw] bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <AuthBanner />

          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center w-full">
            <div className="flex flex-col items-center">
              <div className="w-full flex-1 container">
                <div className="slider"></div>

                <div className="form-section">
                  <Login />

                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
