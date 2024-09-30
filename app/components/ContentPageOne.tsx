import React from "react";

const ContentPageOne = () => {
  return (
    <div className=" flex items-center justify-center bg-blue-950 text-white w-full h-screen text-4xl ">
      <div className="flex items-center gap-6">
        <div>scroll down baby</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-down"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContentPageOne;
