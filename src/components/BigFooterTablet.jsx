import React from "react";

const BigFooter = () => {
    return (
        <div className="text-center mt-5 overflow-hidden">

            {/* Normal Text */}
            <p className="font-bold text-[5rem] leading-none">
                SOURIS LAHIRI
            </p>

            {/* Flipped Text */}
            <p className="
        font-bold
        text-[5rem]
        scale-y-[-1]
        leading-none
        !-mt-9
        text-[#ffb703]
      ">
                SOURIS LAHIRI
            </p>

        </div>
    );
};

export default BigFooter;
