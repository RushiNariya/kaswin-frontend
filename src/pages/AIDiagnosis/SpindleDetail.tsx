import React from 'react';

import SensorImages from '../../assets/images/sensor_image.png';

function SpindleDetail() {
  const [selectedSpindle, setSelectedSpindle] = React.useState(0);

  return (
    <div className="flex flex-col gap-8 items-start justify-start relative">
      <div className="flex flex-row gap-6 items-start justify-start shrink-0 relative">
        <div
          className={` ${
            selectedSpindle === 0 ? 'bg-[#426ab9]' : 'bg-[#f1f1f1]'
          } rounded-[8px] p-5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-20 relative overflow-hidden cursor-pointer`}
          onClick={() => setSelectedSpindle(0)}
        >
          <div
            className={` ${
              selectedSpindle === 0 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
            }}
          >
            S1{' '}
          </div>
          <div
            className={` ${
              selectedSpindle === 0 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            } text-left relative`}
            style={{
              font: "var(--buttons-small, 600 12px/16px 'Mulish', sans-serif)",
            }}
          >
            S1034{' '}
          </div>
        </div>
        <div
          className={` ${
            selectedSpindle === 1 ? 'bg-[#426ab9]' : 'bg-[#f1f1f1]'
          } rounded-[8px] p-5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-20 relative overflow-hidden cursor-pointer`}
          onClick={() => setSelectedSpindle(1)}
        >
          <div
            className={` ${
              selectedSpindle === 1 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
            }}
          >
            S2{' '}
          </div>
          <div
            className={` ${
              selectedSpindle === 1 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--buttons-small, 600 12px/16px 'Mulish', sans-serif)",
            }}
          >
            S1036{' '}
          </div>
        </div>
        <div
          className={` ${
            selectedSpindle === 2 ? 'bg-[#426ab9]' : 'bg-[#f1f1f1]'
          } rounded-[8px] p-5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-20 relative overflow-hidden cursor-pointer`}
          onClick={() => setSelectedSpindle(2)}
        >
          <div
            className={` ${
              selectedSpindle === 2 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
            }}
          >
            S3{' '}
          </div>
          <div
            className={` ${
              selectedSpindle === 2 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--buttons-small, 600 12px/16px 'Mulish', sans-serif)",
            }}
          >
            S1038{' '}
          </div>
        </div>
        <div
          className={` ${
            selectedSpindle === 3 ? 'bg-[#426ab9]' : 'bg-[#f1f1f1]'
          } rounded-[8px] p-5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-20 relative overflow-hidden cursor-pointer`}
          onClick={() => setSelectedSpindle(3)}
        >
          <div
            className={` ${
              selectedSpindle === 3 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
            }}
          >
            S4{' '}
          </div>
          <div
            className={` ${
              selectedSpindle === 3 ? 'text-[#ffffff]' : 'text-[#292c2e]'
            }  text-left relative`}
            style={{
              font: "var(--buttons-small, 600 12px/16px 'Mulish', sans-serif)",
            }}
          >
            S1040{' '}
          </div>
        </div>
      </div>

      <div className="bg-[#f1f1f1] rounded-[24px]  relative left-0 bottom-0 p-6">
        <div className="flex flex-row items-start justify-between relative ">
          <div
            className="text-[#000000] text-left relative flex items-center justify-start"
            style={{
              font: "var(--headline-1-extrabold, 800 24px/32px 'Mulish', sans-serif)",
            }}
          >
            Spindle 1{' '}
          </div>
          <div className="flex flex-row gap-2 items-start justify-start shrink-0 h-[60px] relative">
            <div className="flex flex-col gap-2 items-end justify-start shrink-0 relative">
              <div
                className="text-[#292c2e] text-left relative flex items-center justify-start"
                style={{
                  font: "var(--body-text-1, 500 16px/24px 'Mulish', sans-serif)",
                }}
              >
                Avg Temperature :{' '}
              </div>
              <div
                className="text-[#292c2e] text-left relative flex items-center justify-start"
                style={{
                  font: "var(--body-text-1, 500 16px/24px 'Mulish', sans-serif)",
                }}
              >
                Avg Vibration :{' '}
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
              <div
                className="text-[#4d78cb] text-left relative flex items-center justify-start"
                style={{
                  font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
                }}
              >
                550 °C{' '}
              </div>
              <div
                className="text-[#4d78cb] text-left relative flex items-center justify-start"
                style={{
                  font: "var(--headline-3-extrabold, 800 16px/24px 'Mulish', sans-serif)",
                }}
              >
                8.34 mm/s{' '}
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[522.68px] h-[286.28px] relative bg-transparent"
          src={SensorImages}
          alt="sensor_image"
        />
      </div>
    </div>
  );
}

export default SpindleDetail;
