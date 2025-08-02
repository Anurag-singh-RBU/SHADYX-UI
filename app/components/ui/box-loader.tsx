import type React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center">
      <div className="relative w-[120px] h-[120px]">
        <div className="boxes absolute top-0 left-0 w-full h-full">
          <div className="box box-1">
            <div className="face face-front"/>
            <div className="face face-right"/>
            <div className="face face-top"/>
            <div className="face face-back"/>
          </div>
          <div className="box box-2">
            <div className="face face-front"/>
            <div className="face face-right"/>
            <div className="face face-top"/>
            <div className="face face-back"/>
          </div>
          <div className="box box-3">
            <div className="face face-front"/>
            <div className="face face-right"/>
            <div className="face face-top"/>
            <div className="face face-back"/>
          </div>
          <div className="box box-4">
            <div className="face face-front"/>
            <div className="face face-right"/>
            <div className="face face-top"/>
            <div className="face face-back"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
