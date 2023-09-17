import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import PageLayout from '../../components/PageLayout/PageLayout';

function Help() {
  const [document, setDocument] = React.useState<any>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      statement: '',
      suggestion: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('Email is required.'),
      statement: Yup.string().required('Statement is required.'),
      suggestion: Yup.string().required('Suggestion is required.'),
    }),
    onSubmit: (values) => {
      // console.log(values, document);
      //make api call or dispatch thunk action
      formik.resetForm();
    },
  });

  return (
    <PageLayout pageTitle="Help">
      <section className="py-6 space-y-3 w-full">
        <h1 className="font-bold text-[1.4rem]">Did you find any Problem?</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="w-full xl:w-[80%] px-8 py-4 mt-2 rounded-2xl font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <div className="mb-4">
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-md ml-2 mt-2">{formik.errors.email}</div>
            ) : null}
          </div>
          <input
            className="w-full xl:w-[80%] px-8 py-4 mt-4 rounded-2xl font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            placeholder="Write a statement..."
            id="statement"
            name="statement"
            onChange={formik.handleChange}
            value={formik.values.statement}
            onBlur={formik.handleBlur}
          />

          {formik.touched.statement && formik.errors.statement ? (
            <div className="text-red-500 text-md ml-2 mt-2">
              {formik.errors.statement}
            </div>
          ) : null}
          <div className="w-full xl:w-[80%] min-h-[200px] px-8 py-4 mt-4 rounded-2xl font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
            <textarea
              className="w-full min-h-[200px] py-4 font-medium border-b border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              placeholder="Give your suggestion..."
              id="suggestion"
              name="suggestion"
              onChange={formik.handleChange}
              value={formik.values.suggestion}
              onBlur={formik.handleBlur}
            />

            <div className="w-full mt-1 flex">
              <div className="mr-4 flex relative">
                <label htmlFor="file1">
                  <Icon
                    icon="teenyicons:attach-solid"
                    width={23}
                    height={23}
                    className="text-[#545A5F] cursor-pointer"
                  />
                  <input
                    type="file"
                    id="file1"
                    className="hidden absolute z-10 top-0 h-full w-[100%]"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.txt,.ppt,.pptx,.xlsx,.xls"
                    onChange={(event) => setDocument(event.target.files)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="file2">
                  <Icon
                    icon="ion:image"
                    width={25}
                    height={25}
                    className="text-[#545A5F] cursor-pointer"
                  />
                  <input
                    type="file"
                    id="file2"
                    className="hidden absolute z-10 top-0 h-full w-[100%]"
                    accept="image/*"
                    onChange={(event) => setDocument(event.target.files)}
                  />
                </label>
              </div>
            </div>
          </div>

          {formik.touched.suggestion && formik.errors.suggestion ? (
            <div className="text-red-500 text-md ml-2 mt-2">
              {formik.errors.suggestion}
            </div>
          ) : null}
          <div className="w-full xl:w-[80%] mt-4">
            <button
              type="submit"
              className="tracking-wide px-8 font-semibold bg-primary text-white py-2 md:py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <span className="ml-">Submit</span>
            </button>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}

export default Help;
