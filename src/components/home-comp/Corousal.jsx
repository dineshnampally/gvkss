import React from 'react'

const Corousal = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <video
                className="absolute w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/30064776/12896315_2560_1440_60fps.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <div className="flex flex-row justify-center items-center gap-2 text-7xl p-5 flex-wrap drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                    <h2 className="font-extrabold text-[#fcfcfc]">Innovate</h2>
                    <h3 className="font-extrabold bg-clip-text text-transparent [background-image:linear-gradient(to_left,_#ff6ec4_32.5px,_#ffb86c_91px,_#faff00_100%)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                        Forward
                    </h3>
                </div>
                <button className="px-6 py-2 rounded-full font-semibold border-2 border-white text-white bg-transparent transition-all duration-300 hover:bg-[#1462dd] hover:border-[#1462dd]">
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default Corousal
