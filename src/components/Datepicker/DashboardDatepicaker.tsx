import { Icon } from '@iconify/react';
import React from 'react';

const range = (from: number, to: number, step = 1): Array<number | string> => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

interface PaginatePropsType {
  pageCount: number;
  pageIndex: number;
  gotoPage: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

function DashboardDatepicaker({
  pageCount,
  pageIndex,
  gotoPage,
  previousPage,
  nextPage,
}: PaginatePropsType) {
  const Pages = range(1, pageCount);

  // console.log(pageIndex);

  return (
    <div className="pt-2 pb-3 flex flex-row gap-1 items-center justify-start shrink-0 relative">
      {/* <svg
        className="rounded-lg pt-px pr-[9px] pb-px pl-[9px] flex flex-col gap-2.5 items-center justify-center shrink-0 relative overflow-visible"
        // style={{ transform: 'translate(-28px, 0px)' }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => previousPage()}
      >
        <path d="M17.5 7L10.5 14L17.5 21" stroke="#BBC0C3" strokeWidth="2" />
      </svg> */}
      <div onClick={() => previousPage()}>
        <Icon icon="mingcute:left-line" color="#858e93" height={28} width={28} />
      </div>
      <div
        className="flex flex-row gap-2 items-center justify-start shrink-0 w-[100%] md:w-[250px] sm:w-[200px] lg:w-[300px] xl:w-[748px] hd:w-full  relative no-scrollbar"
        style={{ overflowX: 'auto' }}
      >
        {Pages.map((page) => {
          if (typeof page === 'number') {
            return (
              <div
                key={page}
                className={`${
                  page === pageIndex ? 'bg-[#426ab9]' : ''
                } rounded-[8px] pt-px pr-[9px] pb-px pl-[9px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-7 h-7 hd:w-11 hd:h-11 relative overflow-hidden cursor-pointer hover:bg-[#e6effc] hover:text-black`}
              >
                <div
                  className={`${
                    page === pageIndex ? 'text-[#ffffff]' : 'text-[#858e93]'
                  } text-left relative flex items-center justify-start font-[500] text-[14px] leading-[22px] hd:text-[20px] `}
                  // style={{
                  //   font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  // }}
                  onClick={() => gotoPage(page)}
                >
                  {page}
                </div>
              </div>
            );
          }
        })}
        {/* <div className="bg-[#426ab9] rounded-[8px] pt-px pr-[9px] pb-px pl-[9px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-7 h-7 relative overflow-hidden">
          <div
            className="text-[#ffffff] text-left relative flex items-center justify-start"
            style={{
              font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
            }}
          >
            11{' '}
          </div>
        </div> */}
      </div>
      <div onClick={() => nextPage()}>
        <Icon icon="mingcute:right-line" color="#858e93" height={28} width={28} />
      </div>
    </div>
  );
}

export default DashboardDatepicaker;
