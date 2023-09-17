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

function VerifyOTP() {
  const dispatch = useDispatch<any>();
  const navigateTo = useNavigate();

  const { isSigning } = useSelector(selectAuth);
  const verifiedEmail = localStorage.getItem('verifyEmail');

  const navigateToLogin = () => {
    navigateTo('/auth/resetpassword', {
      replace: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object().shape({
      otp: Yup.string()
        .required('OTP is required.')
        .matches(/^[0-9]+$/, 'Otp must be only digits.')
        .min(4, 'OTP must be exactly 4 digits.')
        .max(4, 'OTP must be exactly 4 digits.'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('verifyOTP', values.otp.toString());
      if (verifiedEmail) {
        // dispatch(
        //   verifyOTPThunkAction(verifiedEmail, values.otp.toString(), navigateToLogin),
        // );
      }
    },
  });

  // useEffect(() => {
  //   if (!verifiedEmail) {
  //     navigateTo('/auth/login', {
  //       replace: true,
  //     });
  //   }
  // }, [verifiedEmail]);

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
                  <h1 className="text-[1.5rem] font-bold mb-8">Verify OTP</h1>
                </div>

                <div className="mx-auto max-w-md">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative">
                      <label htmlFor="otp" className="text-gray-400">
                        Enter your OTP*
                      </label>
                      <input
                        className="w-full px-8 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="number"
                        placeholder="OTP"
                        name="otp"
                        id="otp"
                        onChange={formik.handleChange}
                        value={formik.values.otp}
                        onBlur={formik.handleBlur}
                      />

                      <div className="mb-4">
                        {formik.touched.otp && formik.errors.otp ? (
                          <div className="text-red-500 text-md mt-2">
                            {formik.errors.otp}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-primary text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-">Verify OTP</span>
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

export default VerifyOTP;
