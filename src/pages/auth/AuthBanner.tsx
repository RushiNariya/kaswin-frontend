import React from 'react';

import poster from '../../assets/images/login_poster.png';
import mcd from '../../assets/images/mcd_login.png';
import nike from '../../assets/images/nike_login.png';
import logo from '../../assets/images/project_logo.png';
import volkswagen from '../../assets/images/volkswagen_login.png';

function AuthBanner() {
  return (
    <div className="flex-1 bg-[#E6EFFC] text-center hidden lg:flex">
      <div className="flex flex-col flex-1 mt-4 items-center">
        <div>
          <img src={logo} alt="kaswin logo" />
        </div>
        <div className="mt-2">
          <img src={poster} alt="kaswin logo" className="w-[90%]" />
        </div>
        <div>
          <h3 className="font-semibold">People who believe in us</h3>
        </div>
        <div className="flex w-[100%] px-2 justify-evenly flex-row">
          <div>
            <img src={mcd} alt="kaswin logo" />
          </div>
          <div>
            <img src={volkswagen} alt="kaswin logo" />
          </div>
          <div>
            <img src={nike} alt="kaswin logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthBanner;
