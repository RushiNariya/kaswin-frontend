/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import toggleContext, { contextType } from '../../context';
import useViewport from '../../hooks/useViewport';
import { routeType, routeTypeChildren } from '../../routes/routes.type';

const SidebarItems = ({ item }: { item: routeType | routeTypeChildren }) => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const { isOpen, setIsOpen } = React.useContext<contextType>(toggleContext);
  const { width } = useViewport();

  React.useEffect(() => {
    if (!isOpen && open) {
      setOpen(false);
    }
  }, [isOpen]);

  if ('children' in item) {
    return (
      <div className={isOpen ? 'p-[0.75rem]' : isOpen && open ? 'p-3' : 'p-1'}>
        <div className={open ? 'open children bg-white' : 'sidebar-item children'}>
          {/* <div className="sidebar-title" onClick={() => setOpen(!open)}> */}
          <NavLink
            to={item.path || '/'}
            className={(navData) =>
              navData.isActive ? 'sidebar-title child-active' : 'sidebar-title'
            }
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span>
              {item.manualIcon ? (
                <img src={item.icon} className="mr-2 mb-1 inline-block" alt="images" />
              ) : (
                <Icon
                  icon={item.icon}
                  className="pr-2 inline-block"
                  height={30}
                  width={30}
                />
              )}
              <span className={isOpen ? 'font-bold' : 'hidden'}>{item.title}</span>
            </span>
            {open ? (
              <Icon icon="fluent:chevron-down-up-24-filled" width="20" height="20" />
            ) : (
              <Icon icon="ph:caret-up-down-bold" width="20" height="20" />
            )}
          </NavLink>
          {/* </div> */}
          <div className="sidebar-content">
            {item.children.map((item, index) => (
              <NavLink
                key={index}
                to={item.path || '/'}
                className={(navData) =>
                  navData.isActive ? 'sidebar-item plain active' : 'sidebar-item plain'
                }
              >
                {item.manualIcon ? (
                  <img src={item.icon} className="mr-2 mb-1 inline-block" alt="images" />
                ) : (
                  <Icon
                    icon={item.icon}
                    className="mr-2 mb-1 inline-block"
                    height={25}
                    width={25}
                  />
                )}
                <span className={isOpen ? 'font-bold' : 'hidden'}>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          className={
            isOpen
              ? 'flex w-full justify-between items-center pl-[12px] mb-2'
              : 'flex w-full justify-between items-center pl-1'
          }
        >
          <NavLink
            to={item.path || '/'}
            className={(navData) =>
              navData.isActive
                ? 'sidebar-item plain flex-1 active align-center'
                : 'sidebar-item plain flex-1'
            }
            onClick={() => {
              width < 785 ? setIsOpen(false) : {};
            }}
          >
            {item.manualIcon ? (
              <img src={item.icon} className="mr-2 mb-1 inline-block" alt="images" />
            ) : (
              <Icon
                icon={item.icon}
                className="mr-2 mb-1 inline-block"
                height={23}
                width={23}
              />
            )}
            <span className={isOpen ? 'inline-block mt-4 font-bold' : 'hidden'}>
              {item.title}
            </span>
          </NavLink>
          {pathname.includes(item.path) ? (
            <div className="bg-primary w-1 py-[20px] h-[100%] rounded-3xl"></div>
          ) : null}
        </div>
        {item.path.includes('diagnosis') ? <hr className="mt-2 mb-1 mx-[1rem]" /> : null}
      </>
    );
  }
};

export default SidebarItems;
