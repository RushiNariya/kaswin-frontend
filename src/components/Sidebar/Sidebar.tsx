/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Sidebar.css';

import { Icon } from '@iconify/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/project_logo.png';
import toggleContext, { contextType } from '../../context';
import useViewport from '../../hooks/useViewport';
import { routeType, routeTypeChildren } from '../../routes/routes.type';
import SidebarItems from './SidebarItems';

const Sidebar = (props: { routes: (routeType | routeTypeChildren)[] }) => {
  const { routes } = props;
  const { width } = useViewport();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = React.useContext<contextType>(toggleContext);

  const signOut = () => {
    navigate('/auth/login', { replace: true });
  };
  return (
    <React.Fragment>
      {width > 785 && (
        <div className={isOpen ? 'sidebar' : 'sidebarclose'}>
          <div>
            <div className="flex w-full justify-end"></div>
            <div
              className={
                isOpen
                  ? 'flex justify-center items-center my-1 px-[26px]'
                  : 'flex justify-center items-center my-4'
              }
            >
              <span className={isOpen ? '' : 'hidden'}>
                <img alt=".." src={logo} width="160" />
              </span>
              {isOpen ? (
                <Icon
                  icon="heroicons-solid:chevron-double-left"
                  color="#b4b7bd"
                  width="32"
                  height="32"
                  className="ml-4 px-1 mt-1"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <Icon
                  icon="heroicons-solid:chevron-double-right"
                  color="#b4b7bd"
                  width="32"
                  height="32"
                  className="px-1 ml-1"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>
          </div>

          {routes?.map((item, index) => (
            <SidebarItems key={index} item={item} />
          ))}

          <div
            className="fixed bottom-10 px-[18px] text-gray-400 cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            <div className="flex justify-center items-center">
              <Icon
                icon="material-symbols:logout"
                className="mr-2"
                height={30}
                width={30}
              />
              <div className={isOpen ? 'font-bold' : 'hidden'}>Log out</div>
            </div>
          </div>
        </div>
      )}
      {width < 785 && (
        <div className={isOpen ? 'sidebar' : 'sidebarclose-active'}>
          <div>
            <div className="flex w-full justify-end">
              {isOpen ? (
                <Icon
                  icon="line-md:chevron-small-double-left"
                  color="#b4b7bd"
                  width="32"
                  height="32"
                  className="m-3 px-1"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : null}
            </div>
            <div className="flex justify-center items-center items-baseline">
              <span className={isOpen ? '' : 'hidden'}>
                <img alt=".." src={logo} width="160" />
              </span>
            </div>
          </div>

          {routes?.map((item, index) => (
            <SidebarItems key={index} item={item} />
          ))}

          <div className="px-3">
            <button
              type="submit"
              className="tracking-wide flex lg:min-w-[10rem] font-semibold bg-primary text-white w-full px-2 py-2 md:py-3 rounded-lg transition-all duration-300 ease-in-out items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <Icon
                icon="ant-design:thunderbolt-filled"
                className="mr-2 mt-1"
                width={20}
                height={20}
              />
              <span className="">Upgrade to premium</span>
            </button>
          </div>

          <div className="fixed bottom-10 px-[18px] text-gray-400 cursor-pointer">
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => {
                signOut();
              }}
            >
              <Icon
                icon="material-symbols:logout"
                className="mr-2"
                height={30}
                width={30}
              />
              <div className={isOpen ? 'font-bold' : 'hidden'}>Log out</div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sidebar;
