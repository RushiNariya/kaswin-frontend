import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import ChangePasswordModal from '../../components/Modal/ChangePasswordModal';

function MyProfile() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [profileImagePreview, setProfileImagePreview] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col px-10">
      <div className="flex flex-row justify-between items-center">
        <div
          className="text-[#000000] text-left relative flex-1"
          style={{
            font: "var(--headline-2-bold, 700 20px/26px 'Mulish', sans-serif)",
          }}
        >
          My Profile{' '}
        </div>
      </div>
      <div className="grid  gap-4 mt-6 p-6">
        <div className="rounded-[24px] flex flex-wrap items-center justify-between self-stretch shrink-0 relative">
          <img
            className="rounded-[88.5px] shrink-0 w-[110px] h-[110px] relative"
            src={
              profileImagePreview
                ? profileImagePreview
                : 'data:image/jpeg;base64,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'
            }
            alt="my profile"
          />
          <Dropzone
            onDrop={(acceptedFiles) => {
              setProfileImagePreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <div className="rounded-[10px] border-solid border-[#aecaf4] border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 h-11 relative cursor-pointer">
                  <div
                    className="text-[#545a5f] text-left relative"
                    style={{
                      font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
                    }}
                  >
                    Change Profile{' '}
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
              }}
            >
              Personal Information{' '}
            </div>
            <div
              className="rounded-[10px] border-solid border-[#aecaf4] border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 h-11 relative cursor-pointer"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              <div className="flex flex-col gap-[3.58px] items-center justify-center shrink-0  relative">
                <div className="flex flex-col gap-[2.43px] items-center justify-center shrink-0 relative">
                  <div className="shrink-0  static">
                    {isEdit ? (
                      <Icon icon="charm:tick" width="22" height="24" color="#aecaf4" />
                    ) : (
                      <Icon icon="fe:edit" width="21" height="21" color="#aecaf4" />
                    )}
                  </div>
                </div>
              </div>
              {!isEdit ? (
                <div
                  className="text-[#545a5f] text-left relative cursor-pointer"
                  style={{
                    font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
                  }}
                >
                  Edit{' '}
                </div>
              ) : (
                <div
                  className="text-[#545a5f] text-left relative cursor-pointer"
                  style={{
                    font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
                  }}
                >
                  save{' '}
                </div>
              )}
            </div>
          </div>
          <div className="pr-4 pl-4 flex flex-row sm:flex-col md:flex-col lg-flex-row xl:flex-row gap-[124px] sm:gap-8 md:gap-8 lg:gap-[124px] xl:gap-[124px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-1 items-start justify-start shrink-0  relative">
                <div
                  className="text-[#858e93] text-left relative"
                  style={{
                    font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  }}
                >
                  First name{' '}
                </div>
                <input
                  className={`text-[#292c2e] text-left relative outline-none  ${
                    isEdit ? ' py-2 border-b-2' : 'bg-[#ffffff]'
                  }`}
                  disabled={!isEdit}
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                  value={'Peter'}
                />
              </div>
              <div className="flex flex-col gap-1 items-start justify-start shrink-0  relative">
                <div
                  className="text-[#858e93] text-left relative"
                  style={{
                    font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  }}
                >
                  Email address{' '}
                </div>
                <div
                  className="text-[#292c2e] text-left relative"
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                >
                  peterhomburg11@gmail.com{' '}
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#858e93] text-left relative"
                  style={{
                    font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  }}
                >
                  Role{' '}
                </div>
                <div
                  className="text-[#292c2e] text-left relative"
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                >
                  Admin{' '}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-[100px] relative">
                <div
                  className="text-[#858e93] text-left relative"
                  style={{
                    font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  }}
                >
                  Last Name{' '}
                </div>
                <input
                  className={`text-[#292c2e] text-left relative outline-none ${
                    isEdit ? ' py-2  border-b-2' : 'bg-[#ffffff]'
                  }`}
                  disabled={!isEdit}
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                  value={'Homburg'}
                />
              </div>
              <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-[130px] relative">
                <div
                  className="text-[#858e93] text-left relative"
                  style={{
                    font: "var(--body-text-2, 500 14px/22px 'Mulish', sans-serif)",
                  }}
                >
                  Phone number{' '}
                </div>
                <input
                  className={`text-[#292c2e] text-left relative outline-none ${
                    isEdit ? ' py-2  border-b-2' : 'bg-[#ffffff]'
                  }`}
                  disabled={!isEdit}
                  style={{
                    font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                  }}
                  value={'+1 343 456 223'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex flex-row items-center justify-between self-stretch shrink-0 relative mt-5">
          <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-[130px] relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
              }}
            >
              Password{' '}
            </div>
          </div>
          <div
            className="text-[#858e93] text-left relative flex items-center justify-start"
            style={{
              font: "var(--body-text-1, 500 16px/24px 'Mulish', sans-serif)",
            }}
          >
            ***********{' '}
          </div>
          <div
            className="rounded-[10px] cursor-pointer border-solid border-[#aecaf4] border pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2.5 items-center justify-center shrink-0 h-11 relative"
            onClick={handleClickOpen}
          >
            <div className="flex flex-col gap-[3.58px] items-center justify-center shrink-0 w-[22px] h-[22px] relative">
              <div className="flex flex-col gap-[2.43px] items-center justify-center shrink-0 relative">
                <div className="shrink-0 w-[11.53px] h-[11.34px] static">
                  <svg
                    className="absolute left-[1.53px] top-0 overflow-visible"
                    style={{}}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00299 2.5434L0.461017 10.1004L0.233398 11.4565L1.586 11.1792L9.14653 3.64076L8.00299 2.5434Z"
                      fill="#AECAF4"
                      stroke="#AECAF4"
                      strokeWidth="1.21542"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3031 0.35706L9.70703 0.952624L10.9255 2.17105L11.5215 1.57498C11.6779 1.41846 11.7658 1.20625 11.7658 0.984981C11.7658 0.763712 11.6779 0.551497 11.5215 0.394978L11.4836 0.35706C11.4061 0.279541 11.3141 0.218049 11.2128 0.176096C11.1115 0.134142 11.003 0.112549 10.8934 0.112549C10.7837 0.112549 10.6752 0.134142 10.5739 0.176096C10.4726 0.218049 10.3806 0.279541 10.3031 0.35706Z"
                      stroke="#AECAF4"
                      strokeWidth="1.62056"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="border-solid border-[#aecaf4] border-t-[1.54px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[14.59px] h-0 relative"></div>
              </div>
            </div>
            <div
              className="text-[#545a5f] text-left relative cursor-pointer"
              style={{
                font: "var(--buttons-medium, 600 15px/20px 'Mulish', sans-serif)",
              }}
            >
              Change password{' '}
            </div>
            <ChangePasswordModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
