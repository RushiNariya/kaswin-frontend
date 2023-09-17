import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import { Fragment } from 'react';
import * as Yup from 'yup';

import hidePassword from '../../assets/images/hide-password-icon.png';
import showPassword from '../../assets/images/show-password-icon.png';
import { usePasswordShow } from '../../hooks/usePasswordShow';

interface ChangePasswordModalProps {
  handleClose: () => void;
  open: boolean;
}

function ChangePasswordModal({ handleClose, open }: ChangePasswordModalProps) {
  const { passwordShown, togglePasswordVisiblity, type } = usePasswordShow();

  const {
    passwordShown: passwordShownOne,
    togglePasswordVisiblity: togglePasswordVisiblityOne,
    type: typeOne,
  } = usePasswordShow();

  const initialValues = {
    oldPassword: '',
    password: '',
    confirmPassword: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string().required('Old Password is required.'),
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
      // console.log(values);
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
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-16 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="">
                  <div className="flex justify-end">
                    <svg
                      className="p-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-visible cursor-pointer"
                      style={{}}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleClose}
                    >
                      <path
                        d="M4 4L10 10L16 16M16 4L4 16"
                        stroke="#292C2E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="mt-7 mb-7">
                    <span className="text-lg font-medium leading-6 text-gray-900">
                      Change Password
                    </span>
                  </div>
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="old-password"
                        className="text-[#828282] text-left relative mb-2   "
                        style={{
                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                        }}
                      >
                        Old Password
                      </label>
                      <input
                        type="text"
                        name="oldPassword"
                        id="oldPassword"
                        onKeyDown={restrictSpace}
                        onChange={formik.handleChange}
                        value={formik.values.oldPassword}
                        onBlur={formik.handleBlur}
                        className="border-solid  border  pl-2.5  flex-row gap-[13px] items-center justify-start shrink-0  h-11 relative focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1"
                      />
                      <div>
                        {formik.touched.oldPassword && formik.errors.oldPassword ? (
                          <div className="text-red-500 text-md mt-2">
                            {formik.errors.oldPassword}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="relative mb-6">
                      <label
                        htmlFor="password"
                        className="text-[#828282] text-left relative mb-2"
                        style={{
                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                        }}
                      >
                        New Password
                      </label>
                      <div className="flex align-middle">
                        <input
                          type={type}
                          name="password"
                          id="password"
                          placeholder="*********"
                          onKeyDown={restrictSpace}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          onBlur={formik.handleBlur}
                          className="border-solid  border  pl-2.5  flex-row gap-[13px] items-center justify-start shrink-0  h-11 relative focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1"
                        />

                        {passwordShown ? (
                          <Icon
                            icon="ph:eye-fill"
                            width="26"
                            height="26"
                            className="mt-2.5 absolute right-2.5 cursor-pointer text-[#828282]"
                            onClick={togglePasswordVisiblity}
                          />
                        ) : (
                          <Icon
                            icon="majesticons:eye-off"
                            width="26"
                            height="26"
                            className="mt-2.5 absolute right-2.5 cursor-pointer text-[#828282]"
                            onClick={togglePasswordVisiblity}
                          />
                        )}
                      </div>
                      <div>
                        {formik.touched.password && formik.errors.password ? (
                          <div className="text-red-500 text-md mt-2">
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <label
                        htmlFor="confirm-password"
                        className="text-[#828282] text-left relative mb-2"
                        style={{
                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                        }}
                      >
                        re-enter New Password
                      </label>
                      <div className="flex align-middle">
                        <input
                          type={typeOne}
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="*********"
                          onKeyDown={restrictSpace}
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                          onBlur={formik.handleBlur}
                          className="border-solid  border  pl-2.5  flex-row gap-[13px] items-center justify-start shrink-0  h-11 relative focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-1
                          "
                        />

                        {passwordShownOne ? (
                          <Icon
                            icon="ph:eye-fill"
                            width="26"
                            height="26"
                            className="mt-2.5 absolute right-2.5 cursor-pointer text-[#828282]"
                            onClick={togglePasswordVisiblityOne}
                          />
                        ) : (
                          <Icon
                            icon="majesticons:eye-off"
                            width="26"
                            height="26"
                            className="mt-2.5 absolute right-2.5 cursor-pointer text-[#828282]"
                            onClick={togglePasswordVisiblityOne}
                          />
                        )}
                      </div>
                      <div>
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword ? (
                          <div className="text-red-500 text-md mt-2">
                            {formik.errors.confirmPassword}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#426ab9] rounded-[8px] border-solid border-[transparent] border pt-[11px] pr-4 pb-[11px] pl-4 flex flex-row gap-1 items-center justify-center self-stretch shrink-0 relative w-full text-[#ffffff] text-center mt-14"
                      style={{ boxShadow: '0px 0px 0px 0px rgba(66, 106, 185, 0.30)' }}
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ChangePasswordModal;
