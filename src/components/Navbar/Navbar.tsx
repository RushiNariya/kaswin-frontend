/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure, Menu, Tab, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import toggleContext, { contextType } from '../../context';
// import spindleList, { notifications } from '../../data/userSpindleMenu';
import { changeCurrentSelectedSpindle } from '../../redux/common/action';
import {
  selectCurrentSpindle,
  selectNotificationList,
  selectSpindleList,
} from '../../redux/common/selectors';
import { useSelector } from '../../redux/rootStateType';
import { SpindleType } from '../../types/types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const { isOpen, setIsOpen } = React.useContext<contextType>(toggleContext);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const { pathname } = useLocation();
  const menuRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const dispatch = useDispatch<any>();
  const selectedSpindle = useSelector(selectCurrentSpindle);
  const { isLoading, spindles: spindleList } = useSelector(selectSpindleList);
  const { isLoadingNotification, notifications } = useSelector(selectNotificationList);

  const navigateTo = useNavigate();

  const isDashboardPage = pathname.includes('dashboard');

  const isAIDiagnosisPage = pathname.includes('AI-diagnosis');

  const isBackVisible = isDashboardPage;

  const navigateToLoginPage = () => {
    navigateTo('/auth/login', { replace: true });
  };

  // call notification list and spindle list APIs here and store it in redux store

  const signOut = (): void => {
    // dispatch(loggingOutUserThunkAction(navigateToLoginPage));
  };

  React.useEffect(() => {
    dispatch(changeCurrentSelectedSpindle(spindleList[0]));
  }, []);

  const selectSpindleHandler = (data: SpindleType) => {
    dispatch(changeCurrentSelectedSpindle(data));
  };

  const selectNotificationSpindleHandler = (id: number) => {
    const spindle = spindleList.find((item) => item.id === id)!;
    dispatch(changeCurrentSelectedSpindle(spindle));
  };

  return (
    <Disclosure as="nav" className="">
      {() => (
        <div className="mx-auto md:px-2 lg:px-10 mt-4">
          <div className="relative flex flex-1 items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center">
              <Disclosure.Button
                className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-400"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>

              <div>
                <div className="flex items-center">
                  <span className="font-extrabold whitespace-nowrap text-[0.9rem] lg:text-[1.5rem] leading-relaxed">
                    Kaswin Condition Monitoring
                  </span>
                  {!isAIDiagnosisPage ? (
                    <Icon
                      icon="mdi:dot"
                      className="hidden lg:inline -mx-2"
                      width={30}
                      height={30}
                    />
                  ) : null}

                  <span className="hidden lg:inline lg:text-[1rem] font-semibold whitespace-nowrap text-[#292C2E] capitalize">
                    {' '}
                    {!isAIDiagnosisPage ? selectedSpindle?.name : null}
                  </span>
                </div>
                <div className=" lg:hidden lg:text-[0.8rem] font-semibold whitespace-nowrap text-[#292C2E] capitalize">
                  {' '}
                  {!isAIDiagnosisPage ? selectedSpindle?.name : null}
                </div>
                <div>
                  <span className="hidden md:inline text-gray-500 text-[0.6rem] lg:text-[1rem]">
                    Furthring your spindle condition
                  </span>
                </div>
              </div>
            </div>

            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto lg:ml-6 sm:pr-0">
              <div className="flex flex-1 items-center justify-center gap-3">
                {isBackVisible ? (
                  <button
                    type="submit"
                    className="tracking-wide hidden md:flex lg:min-w-[13.4rem] font-semibold bg-primary text-white w-full px-2 py-2 md:py-3 rounded-lg transition-all duration-300 ease-in-out items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <Icon
                      icon="ant-design:thunderbolt-filled"
                      className="mx-2 mt-1"
                      width={20}
                      height={20}
                    />
                    <span className="whitespace-nowrap">Upgrade to premium</span>
                  </button>
                ) : null}

                <Menu as="div" className="w-full">
                  <Menu.Button className="flex w-full rounded-full text-sm">
                    <span className="sr-only">Open user menu</span>
                    <div className="relative -mr-3 lg:mr-auto overflow-hidden flex h-12 w-12 shrink-0 select-none items-center justify-center text-sm font-bold uppercase text-gray-800">
                      <Icon icon="tabler:bell-filled" width={30} height={30} />
                      <span
                        aria-hidden="true"
                        className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 ring ring-white"
                      ></span>
                    </div>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute border-2 md:border-none right-0 sm:left-auto z-20 mt-2 sm:w-min-[500px] origin-top-right rounded-xl bg-white py-1 shadow-xl ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <div
                          className={classNames(
                            'px-4 py-2 text-sm font-semibold text-gray-700',
                          )}
                        >
                          <Tab.Group
                            selectedIndex={selectedIndex}
                            onChange={setSelectedIndex}
                          >
                            <Tab.List
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center py-4 justify-between cursor-pointer"
                            >
                              <div>
                                <Tab as={Fragment}>
                                  <span
                                    className={
                                      selectedIndex === 0
                                        ? 'px-4 py-2 border-b-4 border-primary'
                                        : 'px-4 py-2 text-gray-400'
                                    }
                                  >
                                    Recent
                                    <span className="px-2 py-1 text-white ml-2 rounded-md bg-primary">
                                      2
                                    </span>
                                  </span>
                                </Tab>
                                <Tab as={Fragment}>
                                  <span
                                    className={
                                      selectedIndex === 1
                                        ? 'px-4 py-2 border-b-4 border-primary ml-3'
                                        : 'px-4 py-2 ml-3 text-gray-400'
                                    }
                                  >
                                    All
                                  </span>
                                </Tab>
                              </div>
                              <div className="text-gray-500 font-normal">
                                updated 5 min ago
                              </div>
                            </Tab.List>
                            <Tab.Panels>
                              <Tab.Panel className="w-full sm:w-[600px] max-h-[500px] overflow-y-scroll">
                                <div className="">
                                  <div className="flex gap-x-4 flex-col">
                                    {notifications.map((item) => {
                                      return (
                                        <React.Fragment key={item.id}>
                                          <div className="flex gap-4 my-2 items-center justify-between">
                                            <div className="flex flex-row justify-start">
                                              <div className="flex flex-1 items-center">
                                                <Icon
                                                  icon="carbon:close-filled"
                                                  className="min-w-[20px] h-5"
                                                />
                                                <span className="mx-2">
                                                  {item.dateTime}
                                                </span>{' '}
                                              </div>
                                              <div className="ml-4 text-left">
                                                <span className="mr-2">
                                                  {item.content}
                                                </span>
                                              </div>
                                            </div>
                                            {item.action ? (
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    selectNotificationSpindleHandler(
                                                      item.spindleId || 1,
                                                    )
                                                  }
                                                  className="bg-[#EFA71C] whitespace-nowrap flex items-center gap-x-1 text-white p-2 rounded-md"
                                                >
                                                  {
                                                    spindleList.find(
                                                      (spindle) =>
                                                        spindle.id === item.spindleId,
                                                    )?.name
                                                  }
                                                  <Icon icon="material-symbols:arrow-outward" />
                                                </button>
                                              </div>
                                            ) : (
                                              <div
                                                style={{
                                                  visibility: 'hidden',
                                                }}
                                              >
                                                <button className="bg-[#EFA71C] whitespace-nowrap flex items-center gap-x-1 text-white p-2 rounded-md">
                                                  spindle 1
                                                  <Icon icon="material-symbols:arrow-outward" />
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                  </div>
                                </div>
                              </Tab.Panel>
                              <Tab.Panel className="w-full sm:w-[600px] max-h-[500px] overflow-y-scroll">
                                <div className="">
                                  <div className="flex gap-x-4 flex-col">
                                    {notifications.map((item) => {
                                      return (
                                        <React.Fragment key={item.id}>
                                          <div className="flex gap-4 my-2 items-center justify-between">
                                            <div className="flex items-start">
                                              <div className="flex flex-1 items-center">
                                                <div className="flex flex-1 items-center">
                                                  <Icon
                                                    icon="carbon:close-filled"
                                                    className="min-w-[20px] h-5"
                                                  />
                                                  <span className="mx-2">
                                                    {item.dateTime}
                                                  </span>{' '}
                                                </div>
                                                <div className="ml-4 text-left">
                                                  <span className="mr-2">
                                                    {item.content}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            {item.action ? (
                                              <div>
                                                <button
                                                  onClick={() =>
                                                    selectNotificationSpindleHandler(
                                                      item.spindleId || 1,
                                                    )
                                                  }
                                                  className="bg-[#EFA71C] whitespace-nowrap flex items-center gap-x-1 text-white p-2 rounded-md"
                                                >
                                                  {
                                                    spindleList.find(
                                                      (spindle) =>
                                                        spindle.id === item.spindleId,
                                                    )?.name
                                                  }
                                                  <Icon icon="material-symbols:arrow-outward" />
                                                </button>
                                              </div>
                                            ) : (
                                              <div
                                                style={{
                                                  visibility: 'hidden',
                                                }}
                                              >
                                                <button className="bg-[#EFA71C] whitespace-nowrap flex items-center gap-x-1 text-white p-2 rounded-md">
                                                  spindle 1
                                                  <Icon icon="material-symbols:arrow-outward" />
                                                </button>
                                              </div>
                                            )}
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                  </div>
                                </div>
                              </Tab.Panel>
                            </Tab.Panels>
                            <div className="w-full flex justify-center my-4">
                              <button className="border border-gray-300 text-gray-600 rounded-lg p-3 px-5 mr-2">
                                Clear all notifications
                              </button>
                            </div>
                          </Tab.Group>
                        </div>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="">
                  <Menu.Button ref={menuRef} className="flex rounded-full text-sm">
                    <span className="sr-only">Open user menu</span>
                    <div className="relative overflow-hidden border-2 border-red-600 flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full bg-gray-200 text-sm font-bold uppercase text-gray-800">
                      {/* {'N'} */}
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="user"
                      />
                    </div>
                    <Icon icon="ep:arrow-down" className="my-auto ml-2" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute border-2 md:border-none right-2 md:right-0 z-20 mt-2 p-4 w-[300px] origin-top-right rounded-2xl bg-white shadow-lg ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <>
                          <div
                            className={classNames(
                              'px-4 py-2 text-sm text-gray-700 flex gap-x-4',
                            )}
                          >
                            <div className="relative overflow-hidden flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full bg-gray-200 text-sm font-bold uppercase text-gray-800">
                              <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                alt="user"
                              />
                            </div>
                            <div className="flex flex-col justify-between py-1 mb-4">
                              <h2 className="font-bold">Michael Peterson</h2>
                              <span className="text-gray-500">admin</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-4">
                            {spindleList.map((item) => {
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => selectSpindleHandler(item)}
                                  className={`flex p-4 cursor-pointer justify-between items-center  mx-2 rounded-lg ${
                                    selectedSpindle?.id === item.id
                                      ? 'bg-primary text-white'
                                      : 'bg-gray-200'
                                  }`}
                                >
                                  <div className="capitalize">{item.name}</div>
                                  {item.running ? (
                                    <div className="">
                                      <span className="rounded-2xl flex justify-between items-center p-1 bg-white px-2 text-sm text-green-600">
                                        <Icon
                                          icon="formkit:radio"
                                          className="mr-2"
                                          color="green"
                                        />{' '}
                                        Running
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="">
                                      <span className="rounded-2xl flex justify-between items-center text-sm">
                                        <Icon
                                          icon="formkit:radio"
                                          className="mr-4 border-2 border-white w-5 h-5 rounded-[50%] text-main-yellow"
                                        />{' '}
                                        <div className="px-2 font-medium w-[1.2rem] h-[1.2rem] flex items-center justify-center rounded-[50%] bg-main-yellow text-white">
                                          1
                                        </div>
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              {/* </Menu> */}
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
