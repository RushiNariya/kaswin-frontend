import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import hidePassword from '../../assets/images/hide-password-icon.png';
import showPassword from '../../assets/images/show-password-icon.png';
import { usePasswordShow } from '../../hooks/usePasswordShow';

function SignUp() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch<any>();

  const isSigning = false;

  const { passwordShown, togglePasswordVisiblity, type } = usePasswordShow();
  const {
    passwordShown: passwordShownOne,
    togglePasswordVisiblity: togglePasswordVisiblityOne,
    type: typeOne,
  } = usePasswordShow();

  const navigateToDashboard = () => {
    //redirected to respective home/dashboard page after login
  };

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
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('First Name and last name is required.'),
      email: Yup.string().email().required('Email is required.'),
      password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.')
        .max(50, 'Password must be less than 50 characters.'),
      confirmPassword: Yup.string().test(
        'passwords-match',
        'Passwords must match.',
        function (value) {
          return this.parent.password === value;
        },
      ),
    }),
    onSubmit: (values) => {
      const { email, password, name } = values;
      // dispatch(fetchLoginUserThunkAction(email, password, people, navigateToDashboard));
    },
  });

  return (
    <div className="signup-box">
      <div className="flex flex-col w-full items-center">
        <button className="px-16 w-full max-w-md font-bold shadow-sm rounded-lg py-2 border text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
          <div className="bg-white p-2 rounded-full">
            <svg className="w-4" viewBox="0 0 533.5 544.3">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
          </div>
          <span className="ml-4">Continue with Google</span>
        </button>
      </div>

      <div className="my-12 w-[80%] border-b mx-14 text-center">
        <div className="leading-none px-2 inline-block text-sm text-gray-500 tracking-wide font-medium bg-white transform translate-y-1/2">
          or Sign Up with E-mail
        </div>
      </div>

      <div className="mx-auto max-w-md w-[100%]">
        <form onSubmit={formik.handleSubmit}>
          <div className="relative">
            <label htmlFor="name" className="text-gray-400">
              What is your good name?
            </label>
            <input
              className="w-full px-4 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="text"
              placeholder="fisrtname lastname"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            <div className="mb-4">
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-md mt-2">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              className="w-full px-4 py-4 mt-2 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="email@abc.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <div className="mb-4">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-md mt-2">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="w-full mt-2 relative">
            <label htmlFor="password" className="text-gray-400">
              Password
            </label>
            <input
              className="w-full px-4 py-4 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type={type}
              placeholder="**********"
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
              className="password_icon opacity-50 mt-2"
              onClick={togglePasswordVisiblity}
            />
          </div>
          <div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-md mt-2">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="w-full mt-2 relative">
            <label htmlFor="confirmPassword" className="text-gray-400">
              re-enter Password
            </label>
            <input
              className="w-full px-4 py-4 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type={typeOne}
              placeholder="**********"
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
              className="password_icon opacity-50 mt-2"
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
          <button
            type="submit"
            className="mt-5 tracking-wide font-semibold bg-primary text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="ml-">Create an Account</span>
          </button>
          <p className="mt-6 text-gray-800 text-center login">
            <span className="text-gray-500">Already have an account?</span>
            <a className="font-bold cursor-pointer border-gray-500 ml-1">{'  '}Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
