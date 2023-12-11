const Banner = () => {
    return (
        <div className="bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover h-screen
        flex justify-center "
        >

            <div className="flex flex-col gap-20  items-center">
                <div className="mt-12">
                    <div className="text-[#D7FFA5] font-normal text-6xl ">Discover </div>
                    <div className="text-white fonr-normal text-6xl">our New Products for You</div>
                </div>

                <div className="flex items-center gap-4 bg-[#73A336] w-fit px-4 py-3 text-base rounded-md">
                    <p className="text-white">Shop Now</p>
                    <img src="/icons/arrow-btn-icon.png" alt="arrow-btn" />
                </div>
                
            </div>
        </div>
    )
}

export default Banner