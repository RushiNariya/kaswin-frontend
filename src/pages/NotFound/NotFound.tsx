import React from 'react';
import { useNavigate } from 'react-router-dom';

import PageLayout from '../../components/PageLayout/PageLayout';

function NotFound() {
  const navigate = useNavigate();

  return (
    <PageLayout pageTitle="NotFound">
      <section className="bg-white w-full">
        <div className="container flex items-center justify-center h-full px-6 mx-auto">
          <div className="w-full ">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
              <p className="text-[5rem] font-medium text-blue-500 dark:text-blue-400">
                404
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Page Not Found
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                We searched high and low, but couldn’t find what you’re looking for.Let’s
                find a better place for you to go.
              </p>

              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>Go back</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                >
                  Take me Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFound;
