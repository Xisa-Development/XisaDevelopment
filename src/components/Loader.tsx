export const Loader = () => {
  return (
    <>
      <style>
        {`
          .loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
            animation-duration: 3s;
            animation-timing-function: cubic-bezier(0.55, 0.3, 0.24, 0.99);
            animation-iteration-count: infinite;
          }

          .loader-1 {
            width: 160px;
            height: 100px;
            background: #1e3f57;
            animation-name: dot1_;
            z-index: 10;
          }

          .loader-2 {
            width: 150px;
            height: 90px;
            background: #3c517d;
            border-radius: 3px;
            animation-name: dot2_;
            z-index: 11;
          }

          .loader-3 {
            width: 40px;
            height: 20px;
            background: #6bb2cd;
            border-radius: 0 0 5px 5px;
            animation-name: dot3_;
            z-index: 12;
          }

          @keyframes dot1_ {
            3%, 97% {
              width: 160px; height: 100px;
              margin-top: -50px; margin-left: -80px;
            }
            30%, 36% {
              width: 80px; height: 120px;
              margin-top: -60px; margin-left: -40px;
            }
            63%, 69% {
              width: 40px; height: 80px;
              margin-top: -40px; margin-left: -20px;
            }
          }

          @keyframes dot2_ {
            3%, 97% {
              width: 150px; height: 90px;
              margin-top: -45px; margin-left: -75px;
            }
            30%, 36% {
              width: 70px; height: 96px;
              margin-top: -48px; margin-left: -35px;
            }
            63%, 69% {
              width: 32px; height: 60px;
              margin-top: -30px; margin-left: -16px;
            }
          }

          @keyframes dot3_ {
            3%, 97% {
              width: 40px; height: 20px;
              margin-top: 50px; margin-left: -20px;
            }
            30%, 36% {
              width: 8px; height: 8px;
              margin-top: 49px; margin-left: -5px;
              border-radius: 8px;
            }
            63%, 69% {
              width: 16px; height: 4px;
              margin-top: -37px; margin-left: -8px;
              border-radius: 10px;
            }
          }
        `}
      </style>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative">
          <div className="loader loader-1" />
          <div className="loader loader-2" />
          <div className="loader loader-3" />
        </div>
      </div>
    </>
  );
};
