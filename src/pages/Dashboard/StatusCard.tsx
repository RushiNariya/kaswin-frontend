import React from 'react';

function StatusCard() {
  return (
    <div className="bg-[#e6effc] rounded-[25px] shrink-0 relative w-[100%] p-5 hd:p-10">
      <div className="flex flex-row justify-between mx-1 mb-10">
        <div>
          <div
            className="text-[#292c2e] text-left mb-2 font-[700] text-[16px] leading-[26px] hd:text-[20px]"
            // style={{ font: "700 16px/26px 'Mulish', sans-serif" }}
          >
            Spindle status{' '}
          </div>
          <div className="bg-[#ffffff] rounded-[11px] pt-1 pr-2 pb-1 pl-2 flex flex-row gap-[5px] items-center justify-center w-[75px] hd:w-[100px]">
            <div className="flex flex-row gap-[6.36px] items-center justify-center shrink-0 relative">
              <div className="rounded-[50%] border-solid border-[#2ace60] border-[0.64px] shrink-0 w-3.5 h-3.5 relative"></div>
              <div className="bg-[#2ace60] rounded-[50%] shrink-0 w-[8.91px] h-[8.91px] absolute left-[2.55px] top-[2.55px]"></div>
            </div>
            <div
              className="text-[#2ace60] text-center flex items-center justify-center font-[500] text-[10px] leading-[18px] hd:text-[15px]"
              // style={{
              //   font: "var(--small-text-2, 500 10px/18px 'Mulish', sans-serif)",
              // }}
            >
              Running{' '}
            </div>
          </div>
        </div>
        <div
          className="text-[#545a5f] text-left font-[500] text-[12px] leading-[26px] hd:text-[18px]"
          // style={{ font: "500 12px/26px 'Mulish', sans-serif" }}
        >
          5 min ago{' '}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-1 items-center justify-center w-[100%] relative">
          <div className="pr-[9px] pl-[9px] flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div
              className="text-[#292c2e] text-left relative"
              style={{ font: "700 14px/130% 'Mulish', sans-serif" }}
            >
              Sensor status{' '}
            </div>
            {/* <div className="flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div className="bg-[#bbc0c3] rounded-[50%] shrink-0 w-[3px] h-[3px] relative"></div>
              <div className="bg-[#bbc0c3] rounded-[50%] shrink-0 w-[3px] h-[3px] relative"></div>
              <div className="bg-[#bbc0c3] rounded-[50%] shrink-0 w-[3px] h-[3px] relative"></div>
            </div> */}
          </div>
          <div className="bg-[#ffffff] rounded-[10px] p-2 flex flex-col gap-2 items-center justify-center self-stretch shrink-0 relative">
            <div className="flex flex-row gap-1.5 items-center justify-start self-stretch shrink-0 relative">
              <div className="bg-[#33415b] rounded-[5px] p-2 flex flex-row gap-2.5 items-center justify-start shrink-0 relative overflow-hidden hd:h-28">
                <svg
                  className="shrink-0 relative overflow-visible"
                  style={{}}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.559 9.355C5.725 10.538 6.348 12.562 8.646 13.434C11 14.329 11 15.034 11 15.5V15.663C9.56 16.097 8.5 17.42 8.5 19C8.5 20.93 10.07 22.5 12 22.5C13.93 22.5 15.5 20.93 15.5 19C15.5 17.42 14.44 16.097 13 15.663V15.5C13 15.034 13 14.329 15.354 13.435C17.652 12.563 18.275 10.539 18.441 9.356C19.912 8.941 21 7.602 21 6C21 4.07 19.43 2.5 17.5 2.5C15.57 2.5 14 4.07 14 6C14 7.552 15.022 8.855 16.424 9.313C16.278 10.048 15.859 11.104 14.646 11.565C13.454 12.017 12.593 12.518 12 13.101C11.407 12.518 10.547 12.017 9.354 11.565C8.141 11.104 7.721 10.048 7.576 9.313C8.978 8.855 10 7.552 10 6C10 4.07 8.43 2.5 6.5 2.5C4.57 2.5 3 4.07 3 6C3 7.602 4.088 8.941 5.559 9.355ZM17.5 4.5C18.327 4.5 19 5.173 19 6C19 6.827 18.327 7.5 17.5 7.5C16.673 7.5 16 6.827 16 6C16 5.173 16.673 4.5 17.5 4.5ZM13.5 19C13.5 19.827 12.827 20.5 12 20.5C11.173 20.5 10.5 19.827 10.5 19C10.5 18.173 11.173 17.5 12 17.5C12.827 17.5 13.5 18.173 13.5 19ZM6.5 4.5C7.327 4.5 8 5.173 8 6C8 6.827 7.327 7.5 6.5 7.5C5.673 7.5 5 6.827 5 6C5 5.173 5.673 4.5 6.5 4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="bg-[#33415b] rounded-[5px] border-solid border-[transparent] border pt-[3px] pr-2.5 pb-[3px] pl-2.5 flex flex-col gap-px items-center justify-center flex-1 relative hd:h-28">
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  Normal{' '}
                </div>
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[16px] hd:text-[26px]"
                  // style={{ font: "800 16px 'Mulish', sans-serif" }}
                >
                  3{' '}
                </div>
              </div>
              <div className="bg-[#efa71c] rounded-[5px] border-solid border-[transparent] border pt-[3px] pr-2.5 pb-[3px] pl-2.5 flex flex-col gap-px items-center justify-center flex-1 relative hd:h-28">
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  Faulty{' '}
                </div>
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[16px] hd:text-[26px]"
                  // style={{ font: "800 16px 'Mulish', sans-serif" }}
                >
                  1{' '}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start self-stretch shrink-0 relative">
              <div className="bg-[#33415b] rounded-[4px] pt-[9px] pr-3.5 pb-[9px] pl-3.5 flex flex-row gap-2.5 items-center justify-center flex-1 h-9 relative overflow-hidden hd:h-[125px]">
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  S1{' '}
                </div>
              </div>
              <div className="bg-[#ffffff] rounded-[4px] border-solid border-[#f2be5a] border-[3px] pt-[9px] pr-3.5 pb-[9px] pl-3.5 flex flex-row gap-2.5 items-center justify-center flex-1 h-9 relative overflow-hidden hd:h-[125px]">
                <div
                  className="text-[#292c2e] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  S2{' '}
                </div>
              </div>
              <div className="bg-[#33415b] rounded-[4px] pt-[9px] pr-3.5 pb-[9px] pl-3.5 flex flex-row gap-2.5 items-center justify-center flex-1 h-9 relative overflow-hidden hd:h-[125px]">
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  S3{' '}
                </div>
              </div>
              <div className="bg-[#33415b] rounded-[4px] pt-[9px] pr-3.5 pb-[9px] pl-3.5 flex flex-row gap-2.5 items-center justify-center flex-1 h-9 relative overflow-hidden hd:h-[125px]">
                <div
                  className="text-[#ffffff] text-left relative flex items-center justify-start font-[800] text-[10px] hd:text-[20px]"
                  // style={{ font: "800 10px 'Mulish', sans-serif" }}
                >
                  S4{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-[#e6effc] rounded-[25px]"></div>
  );
}

export default StatusCard;
