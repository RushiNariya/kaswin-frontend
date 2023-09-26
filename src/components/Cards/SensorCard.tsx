import { Icon } from '@iconify/react';
import React from 'react';

import selectedTrendIcon from '../../assets/images/selected_trend_icon.png';
import trendIcon from '../../assets/images/trendIcon.png';
import { SensorsListType } from '../../types/types';

function SensorCard({
  data,
  selectSensorHandler,
  selectedSensor,
}: {
  data: SensorsListType;
  selectSensorHandler: (sensor: SensorsListType) => void;
  selectedSensor: SensorsListType | null;
}) {
  const signalStrenght = (value: string) => {
    switch (value) {
      case 'medium':
        return <Icon icon="mdi:signal-cellular-2" color="#EFA71C" className="mx-2" />;

      case 'low':
        return <Icon icon="mdi:signal-cellular-1" color="#D92632" className="mx-2" />;

      case 'high':
        return <Icon icon="mdi:signal-cellular-3" color="#2ACE60" className="mx-2" />;

      default:
        return <Icon icon="mdi:signal-cellular-2" color="#EFA71C" className="mx-2" />;
    }
  };
  return (
    <div className="text-center">
      <div
        onClick={() => selectSensorHandler(data)}
        className={`object-cover hover:bg-gray-100 hover:scale-105 transform
        transition duration-500 cursor-pointer object-center w-full flex flex-col gap-y-6 justify-between h-40 p-4 mx-auto rounded-3xl border-2 ${
          selectedSensor?.id === data.id ? 'border-2 border-[#8FB0EF]' : ''
        }`}
      >
        <div>
          <div className="flex justify-between items-center">
            <div className="flex">
              {data.running ? (
                <Icon icon="formkit:radio" className="mr-2" color="green" />
              ) : (
                <Icon icon="formkit:radio" className="mr-2 text-main-yellow" />
              )}
              <span className="text-[12px]">{data.name}</span>
            </div>
            <div className="p-1 px-2 border text-[12px] rounded-[4px] border-[#F8969C] text-[#F8969C]">
              {data.sensorType}
            </div>
          </div>
          <div className="mt-1">
            <span className="text-[1.2rem] font-extrabold flex justify-start">
              {data.sensorId}
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-end">
            <span className="text-[0.7rem] flex justify-start">SIGNAL STRENGTH</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <span className="font-bold">{data.strength}</span>
              {signalStrenght(data.strength)}
              <span className="text-[12px] mr-1"> . {data.value} </span>
              <Icon icon="tabler:transfer-vertical" width={17} height={17} />
            </div>
            <div className="">
              {selectedSensor?.id === data.id ? (
                <div className="flex items-center">
                  <span className="text-sm mr-1 text-[#8FB0EF]">selected</span>
                  <div className="frame-195">
                    <svg
                      className="frame-193"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57153 21.4288C4.35051 15.874 8.33541 5.55377 10.0432 8.71123C12.178 12.6581 13.7568 17.4819 15.5358 16.6049C16.959 15.9032 20.643 6.51848 21.4287 2.57164"
                        stroke="white"
                        strokeWidth="2.32653"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="trend-chart">
                  <svg
                    className="frame-193"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.57153 21.4288C4.35051 15.874 8.33541 5.55377 10.0432 8.71123C12.178 12.6581 13.7568 17.4819 15.5358 16.6049C16.959 15.9032 20.643 6.51848 21.4287 2.57164"
                      stroke="white"
                      strokeWidth="2.32653"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}

              {/* <Icon
                icon="bxs:chart"
                width={50}
                height={50}
                color=""
                className="text-[#3A4F78] bg-slate-200 "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SensorCard;
