import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function SpindleListing() {
  const [addSpindle, setAddSpindle] = useState(false);

  const [SpindleList, setSpindleList] = useState([
    {
      id: 1,
      name: 'Spindle 1',
      serialNumber: '102938-29394',
      privateKey: '4123-4123-4123-4123',
      sensors2: 'Sensor V - Spindle 1',
      sensors3: 'Sensor V - Spindle 1',
      sensors1: 'Sensor A - Spindle 1',
      sensors4: 'Sensor A - Spindle 1',
    },
    {
      id: 2,
      name: 'Spindle 2',
      serialNumber: '102938-29394',
      privateKey: '4123-4123-4123-4123',
      sensors1: 'Sensor A - Spindle 2',
      sensors2: 'Sensor V - Spindle 2',
      sensors3: 'Sensor V - Spindle 2',
      sensors4: 'Sensor A - Spindle 2',
    },
  ]);
  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = Array.from(SpindleList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSpindleList(items);
  };

  return (
    <div className="w-full px-10 ">
      <div className="flex flex-row items-center justify-between">
        <div
          className="text-[#000000] text-left relative"
          style={{
            font: "var(--headline-2-bold, 700 20px/26px 'Mulish', sans-serif)",
          }}
        >
          Spindle Listing{' '}
        </div>
        <div
          className="rounded-[10px] border-solid border-[#aecaf4] border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 h-11 relative cursor-pointer"
          onClick={() => setAddSpindle(true)}
        >
          <svg
            className="rounded-[22px] p-[5px] flex flex-row gap-[5px] items-center justify-center shrink-0 relative overflow-visible"
            style={{}}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
              fill="#E6EFFC"
            />
            <path
              d="M10.7333 4.58301V10.9997M10.7333 17.4163V10.9997M10.7333 10.9997H17.4173M10.7333 10.9997H4.58398"
              stroke="#426AB9"
              strokeWidth="1.83333"
            />
          </svg>

          <button
            className="text-[#545a5f] text-left relative cursor-pointer"
            style={{
              font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
            }}
          >
            Add new Spindle{' '}
          </button>
        </div>
      </div>
      <div className="w-full px-4 pt-16">
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="mx-auto w-full  rounded-2xl bg-white p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {SpindleList.map((spindle, index) => (
                  <Draggable
                    key={spindle.id}
                    draggableId={spindle.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-3"
                      >
                        <Disclosure
                          as="div"
                          className="mt-2 rounded-[12px] border-solid border-[#e4e6e7] border"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full  pt-6 pr-8 pb-6 pl-8  flex-row gap-8 items-start justify-center self-stretch shrink-0 relative">
                                <div className="flex flex-col gap-[6.67px] items-center justify-center shrink-0 w-6 h-6 relative">
                                  <svg
                                    className="flex flex-col gap-1 items-start justify-start shrink-0 relative overflow-visible"
                                    style={{}}
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <line
                                      x1="0.333008"
                                      y1="3.33333"
                                      x2="13.6663"
                                      y2="3.33333"
                                      stroke="#858E93"
                                      strokeWidth="1.33333"
                                    />
                                    <line
                                      x1="0.333008"
                                      y1="7.33333"
                                      x2="13.6663"
                                      y2="7.33333"
                                      stroke="#858E93"
                                      strokeWidth="1.33333"
                                    />
                                    <line
                                      x1="0.333984"
                                      y1="7.48763"
                                      x2="13.6673"
                                      y2="7.48763"
                                      stroke="#858E93"
                                      strokeWidth="1.33333"
                                    />
                                  </svg>
                                </div>
                                <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
                                  <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                                    <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                                      <div
                                        className="text-[#000000] text-left relative"
                                        style={{
                                          font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        {spindle.name}{' '}
                                      </div>
                                      <div className="flex flex-col gap-[4.05px] items-center justify-center shrink-0 w-[22px] h-[22px] relative">
                                        <div className="flex flex-col gap-[2.75px] items-center justify-center shrink-0 relative">
                                          <div className="shrink-0 w-[13.05px] h-[12.83px] static">
                                            <svg
                                              className="absolute left-[1.73px] top-0 overflow-visible"
                                              style={{}}
                                              width="14"
                                              height="14"
                                              viewBox="0 0 14 14"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M9.26621 3.22754L0.734065 11.7767L0.476562 13.3109L2.00674 12.9971L10.5599 4.46897L9.26621 3.22754Z"
                                                fill="#AECAF4"
                                                stroke="#AECAF4"
                                                strokeWidth="1.37499"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                              <path
                                                d="M11.8677 0.754152L11.1934 1.42791L12.5718 2.8063L13.2461 2.13197C13.423 1.95491 13.5224 1.71483 13.5224 1.46451C13.5224 1.21419 13.423 0.974116 13.2461 0.797048L13.2032 0.754152C13.1155 0.666456 13.0114 0.596891 12.8968 0.549429C12.7822 0.501968 12.6594 0.477539 12.5354 0.477539C12.4114 0.477539 12.2886 0.501968 12.174 0.549429C12.0595 0.596891 11.9554 0.666456 11.8677 0.754152Z"
                                                stroke="#AECAF4"
                                                strokeWidth="1.83333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </svg>
                                          </div>
                                          <div className="border-solid border-[#aecaf4] border-t-[1.74px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[16.5px] h-0 relative"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row gap-8 items-center justify-start shrink-0 relative">
                                      <svg
                                        className="flex flex-col gap-1 items-center justify-center shrink-0 relative overflow-visible"
                                        style={{}}
                                        width="26"
                                        height="25"
                                        viewBox="0 0 26 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M19.8209 6.24407H16.2058V5.34029C16.2058 4.94079 16.0471 4.55766 15.7646 4.27517C15.4821 3.99268 15.099 3.83398 14.6995 3.83398H11.6868C11.2874 3.83398 10.9042 3.99268 10.6217 4.27517C10.3392 4.55766 10.1805 4.94079 10.1805 5.34029V6.24407H6.56541C6.40561 6.24407 6.25236 6.30755 6.13937 6.42055C6.02637 6.53354 5.96289 6.68679 5.96289 6.84659C5.96289 7.00639 6.02637 7.15965 6.13937 7.27264C6.25236 7.38564 6.40561 7.44911 6.56541 7.44911H7.20559L7.92109 18.9317C7.97456 19.9428 8.74955 20.7046 9.72865 20.7046H16.6577C17.6416 20.7046 18.4012 19.9597 18.4652 18.9347L19.1807 7.44911H19.8209C19.9807 7.44911 20.1339 7.38564 20.2469 7.27264C20.3599 7.15965 20.4234 7.00639 20.4234 6.84659C20.4234 6.68679 20.3599 6.53354 20.2469 6.42055C20.1339 6.30755 19.9807 6.24407 19.8209 6.24407ZM10.8045 18.2945H10.7831C10.6269 18.2946 10.4768 18.2341 10.3644 18.1257C10.252 18.0173 10.1861 17.8695 10.1805 17.7135L9.87928 9.27815C9.87359 9.11835 9.93161 8.96283 10.0406 8.84581C10.1495 8.72879 10.3005 8.65985 10.4603 8.65416C10.6201 8.64847 10.7757 8.70649 10.8927 8.81545C11.0097 8.92442 11.0786 9.07542 11.0843 9.23522L11.3856 17.6705C11.3885 17.7497 11.3757 17.8286 11.348 17.9028C11.3204 17.977 11.2784 18.045 11.2244 18.103C11.1704 18.1609 11.1056 18.2077 11.0335 18.2405C10.9615 18.2734 10.8837 18.2917 10.8045 18.2945ZM13.7957 17.692C13.7957 17.8518 13.7322 18.005 13.6192 18.118C13.5062 18.231 13.353 18.2945 13.1932 18.2945C13.0334 18.2945 12.8801 18.231 12.7671 18.118C12.6541 18.005 12.5906 17.8518 12.5906 17.692V9.25668C12.5906 9.09688 12.6541 8.94363 12.7671 8.83063C12.8801 8.71764 13.0334 8.65416 13.1932 8.65416C13.353 8.65416 13.5062 8.71764 13.6192 8.83063C13.7322 8.94363 13.7957 9.09688 13.7957 9.25668V17.692ZM16.2058 17.7135C16.2002 17.8695 16.1343 18.0173 16.0219 18.1257C15.9095 18.2341 15.7594 18.2946 15.6032 18.2945H15.5814C15.5023 18.2917 15.4245 18.2733 15.3525 18.2404C15.2805 18.2075 15.2157 18.1608 15.1618 18.1028C15.1078 18.0449 15.0659 17.9769 15.0382 17.9027C15.0106 17.8285 14.9978 17.7496 15.0007 17.6705L15.302 9.23522C15.3048 9.15609 15.3232 9.0783 15.3561 9.00627C15.3889 8.93425 15.4357 8.86941 15.4936 8.81545C15.5516 8.7615 15.6196 8.71948 15.6938 8.69181C15.7679 8.66413 15.8468 8.65134 15.926 8.65416C16.0051 8.65698 16.0829 8.67535 16.1549 8.70824C16.2269 8.74112 16.2918 8.78787 16.3457 8.84581C16.3997 8.90375 16.4417 8.97176 16.4694 9.04594C16.497 9.12012 16.5098 9.19902 16.507 9.27815L16.2058 17.7135Z"
                                          fill="#545A5F"
                                        />
                                      </svg>

                                      <ChevronUpIcon
                                        className={`${
                                          open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pt-4 pb-2 w-full text-sm text-gray-500">
                                <div className="p-4 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
                                  <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
                                    <div className="flex flex-row gap-[124px] items-start justify-start shrink-0 relative">
                                      <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                        <div
                                          className="text-[#858e93] text-left relative"
                                          style={{
                                            font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                          }}
                                        >
                                          Serial number{' '}
                                        </div>
                                        <div
                                          className="text-[#292c2e] text-left relative"
                                          style={{
                                            font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                          }}
                                        >
                                          {spindle.serialNumber}{' '}
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                        <div
                                          className="text-[#858e93] text-left relative"
                                          style={{
                                            font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                          }}
                                        >
                                          Private Key{' '}
                                        </div>
                                        <div
                                          className="text-[#292c2e] text-left relative"
                                          style={{
                                            font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                          }}
                                        >
                                          {spindle.privateKey}{' '}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-start justify-between self-stretch shrink-0 relative">
                                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                      <div
                                        className="text-[#858e93] text-left relative"
                                        style={{
                                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        Sensor 1{' '}
                                      </div>
                                      <div
                                        className="text-[#292c2e] text-left relative"
                                        style={{
                                          font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        {spindle.sensors1}{' '}
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                      <div
                                        className="text-[#858e93] text-left relative"
                                        style={{
                                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        Sensor 3{' '}
                                      </div>
                                      <div
                                        className="text-[#292c2e] text-left relative"
                                        style={{
                                          font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        {spindle.sensors3}{' '}
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                      <div
                                        className="text-[#858e93] text-left relative"
                                        style={{
                                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        Sensor 2{' '}
                                      </div>
                                      <div
                                        className="text-[#292c2e] text-left relative"
                                        style={{
                                          font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        {spindle.sensors2}{' '}
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                                      <div
                                        className="text-[#858e93] text-left relative"
                                        style={{
                                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        Sensor 4{' '}
                                      </div>
                                      <div
                                        className="text-[#292c2e] text-left relative"
                                        style={{
                                          font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                                        }}
                                      >
                                        {spindle.sensors4}{' '}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div
          className={`mx-auto w-full  rounded-2xl bg-white p-2 ${
            addSpindle ? '' : 'hidden'
          }`}
        >
          <div className="rounded-[12px] border-solid border-[#aecaf4] border pt-6 pr-8 pb-6 pl-8 flex flex-row gap-8 items-center justify-center self-stretch shrink-0 relative">
            <div className="flex flex-col gap-[6.67px] items-center justify-center shrink-0 w-6 h-6 relative">
              <svg
                className="flex flex-col gap-1 items-start justify-start shrink-0 relative overflow-visible"
                style={{}}
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.333984"
                  y1="-0.51237"
                  x2="13.6673"
                  y2="-0.51237"
                  stroke="#858E93"
                  strokeWidth="1.33333"
                />
                <line
                  x1="0.333984"
                  y1="3.48763"
                  x2="13.6673"
                  y2="3.48763"
                  stroke="#858E93"
                  strokeWidth="1.33333"
                />
                <line
                  x1="0.333984"
                  y1="7.48763"
                  x2="13.6673"
                  y2="7.48763"
                  stroke="#858E93"
                  strokeWidth="1.33333"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
              <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative"
                    style={{
                      font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                    }}
                  >
                    Spindle 5{' '}
                  </div>
                  <div className="flex flex-col gap-[4.05px] items-center justify-center shrink-0 w-[22px] h-[22px] relative">
                    <div className="flex flex-col gap-[2.75px] items-center justify-center shrink-0 relative">
                      <div className="shrink-0 w-[13.05px] h-[12.83px] static">
                        <svg
                          className="absolute left-[1.73px] top-0 overflow-visible"
                          style={{}}
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.26621 3.1123L0.734065 11.6615L0.476562 13.1957L2.00674 12.8819L10.5599 4.35374L9.26621 3.1123Z"
                            fill="#AECAF4"
                            stroke="#AECAF4"
                            strokeWidth="1.37499"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.8677 0.638918L11.1934 1.31267L12.5718 2.69107L13.2461 2.01674C13.423 1.83967 13.5224 1.5996 13.5224 1.34928C13.5224 1.09896 13.423 0.858882 13.2461 0.681814L13.2032 0.638918C13.1155 0.551221 13.0114 0.481656 12.8968 0.434195C12.7822 0.386733 12.6594 0.362305 12.5354 0.362305C12.4114 0.362305 12.2886 0.386733 12.174 0.434195C12.0595 0.481656 11.9554 0.551221 11.8677 0.638918Z"
                            stroke="#AECAF4"
                            strokeWidth="1.83333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="border-solid border-[#aecaf4] border-t-[1.74px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[16.5px] h-0 relative"></div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] border-solid border-[#bbc0c3] border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 h-11 relative">
                  <button
                    className="text-[#545a5f] text-left relative cursor-pointer"
                    style={{
                      font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
                    }}
                    onClick={() => setAddSpindle(false)}
                  >
                    Cancel{' '}
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
                  <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-[124px] sm:gap-8 md:gap-8 lg:gap-[90px] xl:gap-[90px] items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-56 relative">
                      <div
                        className="text-[#858e93] text-left relative"
                        style={{
                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                        }}
                      >
                        Serial number{' '}
                      </div>
                      <input
                        className="text-[#292c2e] text-left relative border-solid border-[#aecaf4] border-b-2 border-r-[0] border-t-[0] border-l-[0] p-2 outline-none"
                        type="text"
                        value="123456-12345"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-56 relative">
                      <div
                        className="text-[#858e93] text-left relative"
                        style={{
                          font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                        }}
                      >
                        Private Key{' '}
                      </div>
                      <input
                        className="text-[#292c2e] text-left relative border-solid border-[#aecaf4] border-b-2 border-r-[0] border-t-[0] border-l-[0] p-2 outline-none"
                        type="text"
                        placeholder="Enter Private Key"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#426ab9] rounded-[8px] border-solid border-[transparent] border pt-[11px] pr-4 pb-[11px] pl-4 flex flex-row gap-1 items-center justify-center shrink-0 w-[190px] relative"
                  style={{ boxShadow: '0px 0px 0px 0px rgba(66, 106, 185, 0.30)' }}
                >
                  <div
                    className="text-[#ffffff] text-left relative"
                    style={{
                      font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
                    }}
                  >
                    Check Connectivity{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpindleListing;
