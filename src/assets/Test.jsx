import Team from "./Team";


/* eslint-disable react/prop-types */
const PlayerDetails = ({ player, isDetailsShowing, setDetailsShowing }) => {
  console.log(player);
  const handleClose = () => {
    setDetailsShowing(!isDetailsShowing);
  };
  const handleNext = () => {
    setDetailsShowing();
  };
  const handlePrevious = () => {};
  return (
    <>
      {isDetailsShowing && (
        <div className=" w-full flex justify-center items-center bg-slate-900/30 inset-0 flex-col overflow-hidden bg-opacity-35">
          {/* <div className="opacity-25 bg-white top-0 right-0 left-0 fixed blur-2xl">
            <Team/>
          </div>  */}
          <div
            className={`fixed h-screen bg-indigo-950 bg-fixed text-violet-100 w-[870px] top-0 overflow-scroll p-10 border-slate-200 border-2`}
          >
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
            <div className="text-2xl  w-full">
              <b className="text-4xl flex justify-center items-center text-blue-100">
                INDIAN NATIONAL CRICKETER
              </b>

              <div className="flex mx-72 h-48 border-indigo-950 border-4">
                <img
                  className=" rounded-xl justify-center items-center border-slate-500"
                  src={player.image}
                />
              </div>
              <div className="top-4 mx-4">
                <b className="text-cyan-300"> Name : </b>
                <b className="text-xl mx-4"> {player.name}</b>
                <b className="text-cyan-300">Status : </b>
                <b className="text-xl mx-4">{player.status}</b>
                <b className="text-cyan-300">position : </b>
                <b className="text-xl">{player.position}</b>
              </div>
              <div className="m-4">
                {" "}
                <b className="text-cyan-300">Born : </b>
                <b className="text-xl">{player.Born}</b>
                <b className="text-cyan-300 mx-4">Age:</b>
                <b className="text-2xl">{player.age}</b>
              </div>
              <div className="m-4">
                {" "}
                <b className="text-cyan-300">Batting Style : </b>
                <b className="text-xl">{player.Batting_style}</b>
                <b className="text-cyan-300 mx-5">Bowling Style : </b>
                <b className="text-xl"> {player.Bowling_style}</b>
              </div>
              <div className="m-4">
                {" "}
                <b className="text-cyan-300"> Current IPL Team : </b>
                <b className="text-xl">{player.Team}</b>
              </div>
              <div className="m-4">
                {" "}
                <b className="text-cyan-300"> Parents Name : </b>
                <b className="text-xl"> {player.parents}</b>
              </div>
              <div className="m-4 ">
                {" "}
                <b className="text-cyan-300"> Wife Name : </b>
                <b className="text-xl">{player.Wife}</b>
              </div>
              <div className="m-4">
                {" "}
                <b className="text-cyan-300"> Award : </b>
                <b className="text-xl">{player.award}</b>
              </div>
              <button
                onClick={handleNext}
                className="text-red-200 text-4xl flex justify-end p-50 hover:bg-slate-900"
              >
                next
              </button>
              <button
                onClick={handlePrevious}
                className="text-red-200 text-4xl hover:bg-slate-900 "
              >
                previous
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerDetails;
