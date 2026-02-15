import React from "react";

const BigFooter = () => {
    return (
        <div className="text-center mt-5 overflow-hidden">

            {/* Normal Text */}
            <p className="font-bold text-[3rem] md:text-[15rem] leading-none">
                SOURIS LAHIRI
            </p>

            {/* Flipped Text */}
            <p className="
        font-bold
        text-[3rem] md:text-[15rem]
        scale-y-[-1]
        leading-none
        !-mt-7
        md:!-mt-19
        text-[#ffb703]
      ">
                SOURIS LAHIRI
            </p>

        </div>
    );
};

export default BigFooter;
