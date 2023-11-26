import React from 'react';

import PageLayout from '../../components/PageLayout/PageLayout';
import Classification from './Classification';
import DiagnosisResult from './DiagnosisResult';
import SpindleDetail from './SpindleDetail';

function AIDiagnosis() {
  return (
    <PageLayout pageTitle="AIDiagnosis">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-12 w-full gap-8">
          <div className="xl:col-span-7 w-full">
            <SpindleDetail />
          </div>
          <div className="xl:col-span-5 overflow-hidden w-full">
            <Classification />
          </div>
        </div>
        <div className="mt-5 3hd:mt-[2%] 2hd:mt-[2%] xl:mt-[4%] 2xl:mt-[3%] 3ml:mt-[3%] hd:mt-[2%]">
          <DiagnosisResult />
        </div>
      </div>
    </PageLayout>
  );
}

export default AIDiagnosis;
