import React from 'react';

import ClassificationChart from '../../components/Charts/ClassificationChart';

function Classification() {
  const [selectedClassification, setSelectedClassification] = React.useState(0);

  return (
    <div className="flex flex-col">
      <div className="rounded-[8px] md:pr-2 md:pl-2 flex flex-row gap-0 justify-center shrink-0 relative">
        <div className="rounded-[8px] pt-1 pb-1 flex flex-row md:gap-4 items-center justify-end shrink-0 relative overflow-hidden">
          <div
            className={`border-solid ${
              selectedClassification === 0 ? 'border-[#000000]' : 'border-[transparent]'
            } border-b pt-[7px] pr-1 md:pr-2.5 pb-[7px] pl-1 md:pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer`}
            style={{ opacity: selectedClassification === 0 ? '1' : '0.5' }}
            onClick={() => setSelectedClassification(0)}
          >
            <div
              className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
              // style={{
              //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
              // }}
            >
              Classification 1{' '}
            </div>
          </div>
          <div
            className={`border-solid ${
              selectedClassification === 1 ? 'border-[#000000]' : 'border-[transparent]'
            } border-b pt-[7px] pr-1 md:pr-2.5 pb-[7px] pl-1 md:pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer`}
            style={{ opacity: selectedClassification === 1 ? '1' : '0.5' }}
            onClick={() => setSelectedClassification(1)}
          >
            <div
              className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
              // style={{
              //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
              // }}
            >
              Classification 2{' '}
            </div>
          </div>
          <div
            className={`border-solid ${
              selectedClassification === 2 ? 'border-[#000000]' : 'border-[transparent]'
            } border-b pt-[7px] pr-1 md:pr-2.5 pb-[7px] pl-1 md:pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer`}
            style={{ opacity: selectedClassification === 2 ? '1' : '0.5' }}
            onClick={() => setSelectedClassification(2)}
          >
            <div
              className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
              // style={{
              //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
              // }}
            >
              Classification 3{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 h-[90%]">
        <ClassificationChart />
      </div>
    </div>
  );
}

export default Classification;
