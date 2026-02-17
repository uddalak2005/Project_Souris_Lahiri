import React from "react";

const BigFooter = () => {
    return (
        <div className="text-center mt-5 overflow-hidden">

            {/* Normal Text */}
            <p className="font-bold text-[3rem] md:text-[14rem] leading-none">
                <span className="text-[#ffb703]">S</span>O<span className="text-[#ffb703]">UR</span>IS L<span className="text-[#ffb703]">AHI</span>RI
            </p>

            {/* Flipped Text */}
            <p className="
        font-bold
        text-[3rem] md:text-[14rem]
        scale-y-[-1]
        leading-none
        !-mt-7
        md:!-mt-17
        text-[#ffb703]/20
      ">
                SOURIS LAHIRI
            </p>

        </div>
    );
};

export default BigFooter;
