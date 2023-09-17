import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import poster from '../../assets/images/login_poster.png';
import mcd from '../../assets/images/mcd_login.png';
import nike from '../../assets/images/nike_login.png';
import logo from '../../assets/images/project_logo.png';
import volkswagen from '../../assets/images/volkswagen_login.png';
import { selectAuth } from '../../redux/auth/selectors';
import { useSelector } from '../../redux/rootStateType';

function ForgotPassword() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch<any>();
  const { isVerify } = useSelector(selectAuth);

  const isSigning = false;

  // const navigateToHome = () => {
  //   navigateTo('/auth/verify-otp');
  // };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Email is required.'),
    }),
    onSubmit: (values) => {
      const { email } = values;

      // dispatch(forgetPasswordEmailThunkAction(email, people, navigateToHome));
    },
  });

  return (
    <div className="relative flex items-center w-[100vw] justify-center lg:justify-normal min-h-screen p-0 overflow-hidden bg-center bg-cover">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="w-[100vw] bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 bg-[#E6EFFC] text-center hidden lg:flex">
            <div className="flex flex-col flex-1 mt-4 items-center">
              <div>
                <img src={logo} alt="kaswin logo" />
              </div>
              <div className="mt-2">
                <img src={poster} alt="kaswin logo" className="w-[90%]" />
              </div>
              <div>
                <h3 className="font-semibold">People who believe in us</h3>
              </div>
              <div className="flex w-[100%] px-2 justify-evenly flex-row">
                <div>
                  <img src={mcd} alt="kaswin logo" />
                </div>
                <div>
                  <img src={volkswagen} alt="kaswin logo" />
                </div>
                <div>
                  <img src={nike} alt="kaswin logo" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex items-center">
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="w-full flex-1 container">
                <div className="flex flex-col w-full items-center">
                  <h1 className="text-[1.5rem] font-bold mb-8">Forgot Password</h1>
                </div>

                <div className="mx-auto max-w-md">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative">
                      <label htmlFor="email" className="text-gray-400">
                        Email
                      </label>
                      <input
                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                      />
                      <div className="mb-4">
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500 text-md mt-2">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-primary text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-">Send OTP</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
