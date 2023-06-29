import man from "../../../public/images/man.png";
import woman from "../../../public/images/woman.png";
import img1 from "../../../public/images/explore/image3.png"
import img2 from "../../../public/images/explore/image1.png"
import img3 from "../../../public/images/FeaturedCollections/image4.png"

const CreateAndSell = () => {
    return (
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-6 xl:mx-0 my-8 lg:my-20">
                <div className="relative w-1/2"> 
                    <div className="">
                        <img className="h-72 w-full" src={img1} alt="" />
                    </div>
                </div>
                <div className="space-y-10">
                    <h2 className="text-3xl font-black">CREATE AND <br /> SELL YOUR NFTS</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <button className="btn btn-primary rounded-full px-10 py-4 text-white">Sign Up Now</button>

                </div>
            </div>
        
    );
};

export default CreateAndSell;