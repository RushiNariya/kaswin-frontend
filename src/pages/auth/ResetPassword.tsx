import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import * as Yup from 'yup';

import hidePassword from '../../assets/images/hide-password-icon.png';
import poster from '../../assets/images/login_poster.png';
import mcd from '../../assets/images/mcd_login.png';
import nike from '../../assets/images/nike_login.png';
import logo from '../../assets/images/project_logo.png';
import showPassword from '../../assets/images/show-password-icon.png';
import volkswagen from '../../assets/images/volkswagen_login.png';
import { usePasswordShow } from '../../hooks/usePasswordShow';
import { selectAuth } from '../../redux/auth/selectors';
import { useSelector } from '../../redux/rootStateType';

interface MyFormValues {
  password: string;
  confirmPassword: string | undefined;
}

function ResetPassword() {
  const { passwordShown, togglePasswordVisiblity, type } = usePasswordShow();

  const {
    passwordShown: passwordShownOne,
    togglePasswordVisiblity: togglePasswordVisiblityOne,
    type: typeOne,
  } = usePasswordShow();

  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const navigateTo = useNavigate();

  const verifiedEmail: string | null = localStorage.getItem('verifyEmail');
  const verifyOtp = localStorage.getItem('verifyOTP');

  const initialValues: MyFormValues = {
    password: '',
    confirmPassword: undefined,
  };

  const { isVerify } = useSelector(selectAuth);

  const navigateToLogin = () => {
    navigateTo('/auth/login', {
      replace: true,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.')
        .max(50, 'Password must be less than 50 characters.')
        .matches(
          /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/,
          'Password must contain at least one lowercase letter, one uppercase letter, and one digit.',
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match.')
        .required('Confirm Password is required.'),
    }),

    onSubmit: (values) => {
      if (verifiedEmail && verifyOtp) {
        // dispatch(
        //   resetPasswordThunkAction(
        //     verifiedEmail,
        //     values.newPassword,
        //     verifyOtp,
        //     navigateToLogin,
        //   ),
        // );
      }
    },
  });

  const restrictSpace = (event: any) => {
    const passwordValue = event.target.value;
    const key = event.keyCode || event.charCode;

    if (
      key === 32 &&
      (passwordValue.length === 0 ||
        passwordValue.trim().length === 0 ||
        passwordValue.endsWith(' '))
    ) {
      event.preventDefault();
    }
  };

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
                  <h1 className="text-[1.5rem] font-bold mb-8">Reset Password</h1>
                </div>

                <div className="mx-auto max-w-md">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mt-2 relative">
                      <label htmlFor="password" className="text-gray-400">
                        Password
                      </label>
                      <input
                        className="w-full px-4 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type={type}
                        placeholder="Password"
                        id="password"
                        name="password"
                        onKeyDown={restrictSpace}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                      />

                      <img
                        src={passwordShown ? hidePassword : showPassword}
                        alt={passwordShown ? 'hide-password' : 'show-password'}
                        className="password_icon opacity-50"
                        onClick={togglePasswordVisiblity}
                      />
                    </div>
                    <div>
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-md mt-2">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4 relative">
                      <label htmlFor="otp" className="text-gray-400">
                        Re-enter Password
                      </label>

                      <input
                        className="w-full px-4 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type={typeOne}
                        placeholder="Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onKeyDown={restrictSpace}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        onBlur={formik.handleBlur}
                      />

                      <img
                        src={passwordShownOne ? hidePassword : showPassword}
                        alt={passwordShownOne ? 'hide-password' : 'show-password'}
                        className="password_icon opacity-50"
                        onClick={togglePasswordVisiblityOne}
                      />
                    </div>
                    <div>
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-red-500 text-md mt-2">
                          {formik.errors.confirmPassword}
                        </div>
                      ) : null}
                    </div>

                    <button className="mt-5 tracking-wide font-semibold bg-primary text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <span className="ml-">Reset Password</span>
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

export default ResetPassword;
