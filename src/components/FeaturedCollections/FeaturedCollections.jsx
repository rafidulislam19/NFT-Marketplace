import img1 from "../../../public/images/topCollections/image1.png"
import img2 from "../../../public/images/FeaturedCollections/image1.png"
import img3 from "../../../public/images/FeaturedCollections/image2.png"
import img4 from "../../../public/images/FeaturedCollections/image3.png"
import img5 from "../../../public/images/explore/image1.png"
import img6 from "../../../public/images/FeaturedCollections/image4.png"
import img7 from "../../../public/images/topCollections/image3.png"
import img8 from "../../../public/images/topCollections/image2.png"
import img9 from "../../../public/images/topCollections/image4.png"
import man from "../../../public/images/man.png"

const FeaturedCollections = () => {
    return (
        <div className="my-10 lg:my-28 mx-6 xl:mx-0 px-10 py-24 bg-slate-100 rounded-lg">
            <h2 className="font-black text-3xl mb-12">COLLECTION FEATURED NFTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* left collection */}
                <div>
                <div className="flex items-center mb-6"> 
                    <img className="h-64 w-2/3 mr-2" src={img1} alt="" />
                    <div className="space-y-2">
                        <img className="w-full h-20" src={img2} alt="" />
                        <img className="w-full h-20" src={img3} alt="" />
                        <img className="w-full h-20" src={img4} alt="" />
                    </div>
                </div>
                <h3 className="font-bold">Amazing Collection</h3>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                        <img className="w-7 h-7 rounded-full mr-2" src={man} alt="" />
                        <p className="text-sm font-semibold">by Arkhan</p>
                    </div>
                    <button className="btn btn-sm btn-outline btn-primary rounded-full text-xs">Total 54 Items</button>
                </div>
                </div>

                {/* middle part */}
                <div>
                <div className="flex items-center mb-6"> 
                    <img className="h-64 w-2/3 mr-2" src={img5} alt="" />
                    <div className="space-y-2">
                        <img className="w-full h-20" src={img3} alt="" />
                        <img className="w-full h-20" src={img2} alt="" />
                        <img className="w-full h-20" src={img6} alt="" />
                    </div>
                </div>
                <h3 className="font-bold">Amazing Collection</h3>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                        <img className="w-7 h-7 rounded-full mr-2" src={man} alt="" />
                        <p className="text-sm font-semibold">by Arkhan</p>
                    </div>
                    <button className="btn btn-sm btn-outline btn-primary rounded-full text-xs">Total 54 Items</button>
                </div>
                </div>

                {/* right part */}
                <div>
                <div className="flex items-center mb-6"> 
                    <img className="h-64 w-2/3 mr-2" src={img7} alt="" />
                    <div className="space-y-2">
                        <img className="w-full h-20" src={img8} alt="" />
                        <img className="w-full h-20" src={img9} alt="" />
                        <img className="w-full h-20" src={img2} alt="" />
                    </div>
                </div>
                <h3 className="font-bold">Amazing Collection</h3>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center">
                        <img className="w-7 h-7 rounded-full mr-2" src={man} alt="" />
                        <p className="text-sm font-semibold">by Arkhan</p>
                    </div>
                    <button className="btn btn-sm btn-outline btn-primary rounded-full text-xs">Total 54 Items</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedCollections;