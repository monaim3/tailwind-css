import React from 'react';
import Photo from './../../assets/light-bulb-5323812.jpg';

const Cards = ({
  ...otherProps
}) => {
  return (
    <div className="flex flex-row flex-wrap py-14 justify-center">

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  This is Title
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                  Lorem ipsum dolor sit amet consectetur, 
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                This is Title
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                Lorem ipsum dolor sit amet consectetur, 
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                This is Title
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                Lorem ipsum dolor sit amet consectetur, 
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cards;
