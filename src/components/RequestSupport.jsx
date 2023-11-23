import requestBg from "../Assets/request-bg.svg";
import blurLogo from "../Assets/blur-logo.svg";

function RequestSupport() {
  return (
    <>
      <div
        className="pt-10 pl-8 pr-16 bg-[#f1f4fa] flex flex-col gap-20 h-[100%] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${requestBg})` }}
      >
        <p className="text-[#06152B] font-dm-sans text-2xl font-bold leading-normal">
          Request Support
        </p>
        <div className="flex gap-40 items-center">
          <div className="p-10 rounded-[10px] bg-[#e7ecf2] flex flex-col gap-3 max-w-[792px] w-full">
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Name:
              </label>
              <input
                type="text"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Email:
              </label>
              <input
                type="email"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Phone:
              </label>
              <input
                type="tel"
                className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#1F2D41] font-dm-sans text-sm leading-normal">
                Message:
              </label>
              <textarea className="px-2 py-3 rounded-[10px] bg-white border border-[#E3E3E3] h-[216px] outline-none" />
            </div>
          </div>
          <img src={blurLogo} alt="_bg" />
        </div>
      </div>
    </>
  );
}

export default RequestSupport;
