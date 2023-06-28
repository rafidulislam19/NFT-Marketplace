import img1 from "../../../public/images/topCollections/image1.png"
import img2 from "../../../public/images/topCollections/image2.png"
import img3 from "../../../public/images/topCollections/image3.png"
import img4 from "../../../public/images/topCollections/image4.png"
import man from "../../../public/images/man.jpg"
import { FaEthereum } from 'react-icons/fa';

const TopCollections = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 xl:mx-0 my-8 lg:my-20">

            {/* highest bid */}
           <div>
                <img className="h-96 w-full" src={img1} alt="" />
                <div className="flex items-center justify-between">
                <div className="my-5 flex items-center">
                    <img className="w-12 h-12 rounded-full mr-5" src={man} alt="" />
                    <div>
                        <h className="font-bold">The Futr Abstr</h>
                        <p className="text-xs">10 in the stock</p>
                    </div>
                </div>
                <div>
                <p className="text-xs">Highest Bid</p>
                <div className="flex items-center"><FaEthereum className="mr-2"/> <span className="font-semibold">0.25 ETH</span></div>
                </div>
                </div>
            </div>
           
           {/* bid placing section */}
            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                    <img className="h-36 w-full" src={img2} alt="" />
                    <div className="space-y-2">
                        <h3 className="font-bold">The Futr Abstr</h3>
                        <div className="flex justify-between items-center">
                        <img className="w-8 h-8 rounded-full" src={man} alt="" />
                        <button className="btn btn-outline btn-success px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-sm">1 of 8</p>
                        </div>
                        <button className="btn btn-primary rounded-full px-6 py-4 text-white">Place a bid</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img className="h-36 w-full" src={img3} alt="" />
                    <div className="space-y-2">
                        <h3 className="font-bold">The Futr Abstr</h3>
                        <div className="flex justify-between items-center">
                        <img className="w-8 h-8 rounded-full" src={man} alt="" />
                        <button className="btn btn-outline btn-success px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-sm">1 of 8</p>
                        </div>
                        <button className="btn btn-outline btn-primary rounded-full px-6 py-4 text-white">Place a bid</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img className="h-36 w-full" src={img4} alt="" />
                    <div className="space-y-2">
                        <h3 className="font-bold">The Futr Abstr</h3>
                        <div className="flex justify-between items-center">
                        <img className="w-8 h-8 rounded-full" src={man} alt="" />
                        <button className="btn btn-outline btn-success px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-sm">1 of 8</p>
                        </div>
                        <button className="btn btn-outline btn-primary rounded-full px-6 py-4 text-white">Place a bid</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default TopCollections;