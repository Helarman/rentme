"use client"

import Step from "./Step";

import { AiFillSketchCircle } from 'react-icons/ai'

const Steps = () => {
  return (

    <div className="w-full">
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap -mx-4 justify-start">
            <div className="px-4 relative w-full lg:w-8/12 text-left">
              <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">Easier than you think</h3>
              <p className="mt-2 mb-4 text-xl leading-relaxed text-gray-500">3 simple steps to rent a car</p>
            </div>
          </div>
          <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
              <img alt="..." src="https://res.cloudinary.com/dutv56tvx/image/upload/v1699926069/vggslomc9as3vs1ykmvj.png" className="lg:mr-12 w-full h-auto" />
            </div>

            <div className="md:mx-auto px-4 relative w-full lg:w-6/12 w-10/12 ">

              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <Step
                    title="Step"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores molestiae."
                    icon={AiFillSketchCircle}
                  />
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <Step
                    title="Step"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores molestiae."
                    icon={AiFillSketchCircle}
                  />
                </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <Step
                    title="Step"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores molestiae."
                    icon={AiFillSketchCircle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;