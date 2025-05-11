import React from "react";

const Notice = () => {
  return (
    <div className="bg-white py-10">
      <div className="container  mx-auto space-y-5 text-black">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="text-main text-3xl ">Notice Board</h3>
            <span className="border-b border-main w-1/2 content-['']"></span>
          </div>
          <button>+ View All</button>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">main notice</div>
          <div className="col-span-1">Recent Notice</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
