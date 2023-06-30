import man from "../../../public/images/man.png";
import woman from "../../../public/images/woman.png";
import img1 from "../../../public/images/explore/image3.png"
import img2 from "../../../public/images/explore/image1.png"
import img3 from "../../../public/images/createAndSell/img.png"

const CreateAndSell = () => {
    return (
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-6 xl:mx-0 my-8 lg:my-20">

                {/* pictures */}
                <div className="flex "> 
                    <div className="mr-10 lg:mr-16 space-y-8 relative">
                        <div>
                        <img className="h-64 w-full" src={img1} alt="" />
                        <img className="h-14 w-14 absolute left-40 sm:left-48 top-56 sm:top-56" src={man} alt="" />
                        </div>
                        <div className="w-2/3 float-right relative">
                            <img className="h-48 w-full" src={img3} alt="" />
                            <img className="h-14 w-14 absolute left-28 sm:left-32 top-40" src={woman} alt="" />
                        </div>
                    </div>
                    <div className="mt-32 relative">
                        <img className="h-60 w-full" src={img2} alt="" />
                        <img className="h-14 w-14 absolute left-40 sm:left-44 top-48 sm:top-52" src={woman} alt="" />
                    </div>
                </div>

                {/* details */}
                <div className="space-y-10 mt-14 lg:mt-24">
                    <h2 className="text-3xl font-black">CREATE AND <br /> SELL YOUR NFTS</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button className="btn btn-primary rounded-full px-10 py-4 text-white">Sign Up Now</button>

                </div>
            </div>
        
    );
};

export default CreateAndSell;