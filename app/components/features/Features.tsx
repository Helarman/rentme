'use client'

import FeatureItem from "./FeatureItem";
import { AiFillSketchCircle } from 'react-icons/ai'

const Features = () => {
  return (


    <div className="w-full">
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap -mx-4 justify-start">
            <div className="px-4 relative w-full lg:w-8/12 text-left">
              <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">We are the best and heres why</h3>
              <p className="mt-2 mb-4 text-xl leading-relaxed text-gray-500">Our strengths and key features</p>
            </div>
          </div>
          <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
              <FeatureItem
                label="Feature 1"
                text="Aenean malesuada molestie justo in finibus. Morbi gravida mollis nulla semper dignissim. Donec condimentum eget ligula id blandit. Aliquam eget dignissim ligula."
                icon={AiFillSketchCircle}
              />

              <FeatureItem
                label="Feature 1"
                text="Aenean malesuada molestie justo in finibus. Morbi gravida mollis nulla semper dignissim. Donec condimentum eget ligula id blandit. Aliquam eget dignissim ligula."
                icon={AiFillSketchCircle}
              />

              <FeatureItem
                label="Feature 1"
                text="Aenean malesuada molestie justo in finibus. Morbi gravida mollis nulla semper dignissim. Donec condimentum eget ligula id blandit. Aliquam eget dignissim ligula."
                icon={AiFillSketchCircle}
              />

            </div>
            <div className="md:mx-auto px-4 relative w-full lg:w-6/12 w-10/12"><img alt="..." src="https://res.cloudinary.com/dutv56tvx/image/upload/v1699917694/oq31yaxogmittbjjjqkz.png" className="lg:ml-12 w-full h-auto" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;