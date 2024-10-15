import React from "react";
/* eslint-disable react/prop-types */
const Demo = ({ player, isDetailsShowing, setDetailsShowing }) => {

  const handleClose = () => {
    setDetailsShowing(!isDetailsShowing);
  };
  return (
    
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* Modal Content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end">
                  <div onClick={handleClose}>
                    <img
                      className="w-10 h-10 mx-10"
                      src="./public/images/back.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-end p-2 " onClick={handleClose}>
                    <img
                      className="w-10 h-10"
                      src="./public/images/close.png"
                      alt="Close"
                    />
                  </div>
                </div>

                <b className="text-4xl flex justify-center items-center text-blue-100">
                  INDIAN NATIONAL CRICKETER
                </b>

                <div className="flex mx-72 h-48 border-indigo-950 border-4">
                  <img
                    className=" rounded-xl justify-center items-center border-slate-500"
                    src={player.image}
                  />
                </div>

                {/* Modal Body */}
                <div className="relative p-6 flex-auto">
                  <div className="top-4 mx-4">
                    <b className="text-cyan-800"> Name : </b>
                    <b className="text-xl mx-4"> {player.name}</b>
                    <b className="text-cyan-800">Status : </b>
                    <b className="text-xl mx-4">{player.status}</b>
                    <b className="text-cyan-800">position : </b>
                    <b className="text-xl">{player.position}</b>
                  </div>
                  <div className="m-4">
                    {" "}
                    <b className="text-cyan-800">Born : </b>
                    <b className="text-xl">{player.Born}</b>
                    <b className="text-cyan-800 mx-4">Age:</b>
                    <b className="text-2xl">{player.age}</b>
                  </div>
                  <div className="m-4">
                    {" "}
                    <b className="text-cyan-800">Batting Style : </b>
                    <b className="text-xl">{player.Batting_style}</b>
                    <b className="text-cyan-800 mx-5">Bowling Style : </b>
                    <b className="text-xl"> {player.Bowling_style}</b>
                  </div>
                  <div className="m-4">
                    {" "}
                    <b className="text-cyan-800"> Current IPL Team : </b>
                    <b className="text-xl">{player.Team}</b>
                  </div>
                  <div className="m-4">
                    {" "}
                    <b className="text-cyan-800"> Parents Name : </b>
                    <b className="text-xl"> {player.parents}</b>
                  </div>
                  <div className="m-4 ">
                    {" "}
                    <b className="text-cyan-800"> Wife Name : </b>
                    <b className="text-xl">{player.Wife}</b>
                  </div>
                  <div className="m-4">
                    {" "}
                    <b className="text-cyan-800"> Award : </b>
                    <b className="text-xl">{player.award}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
 
  );
};
export default Demo;
