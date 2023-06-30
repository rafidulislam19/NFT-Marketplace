import img1 from "../../../public/images/topCollections/image1.png"
import img2 from "../../../public/images/topCollections/image2.png"
import img3 from "../../../public/images/topCollections/image3.png"
import img4 from "../../../public/images/topCollections/image4.png"
import img5 from "../../../public/images/topCollections/image5.png"
import img6 from "../../../public/images/topCollections/image6.png"
import img7 from "../../../public/images/topCollections/image7.png"
import img8 from "../../../public/images/topCollections/image8.png"
import img9 from "../../../public/images/topCollections/image9.png"
import verify from "../../../public/images/topCollections/verify.png"
import man from "../../../public/images/man.png"
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
                        <button className="btn btn-outline btn-success btn-sm px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-xs sm:text-sm">1 of 8</p>
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
                        <button className="btn btn-outline btn-sm btn-success px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-xs sm:text-sm">1 of 8</p>
                        </div>
                        <button className="btn btn-outline btn-primary rounded-full px-6 py-4">Place a bid</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img className="h-36 w-full" src={img4} alt="" />
                    <div className="space-y-2">
                        <h3 className="font-bold">The Futr Abstr</h3>
                        <div className="flex justify-between items-center">
                        <img className="w-8 h-8 rounded-full" src={man} alt="" />
                        <button className="btn btn-outline btn-sm btn-success px-2 py-1"><FaEthereum/> <span className="text-xs">0.25 ETH</span></button>
                        <p className="text-xs sm:text-sm">1 of 8</p>
                        </div>
                        <button className="btn btn-outline btn-primary rounded-full px-6 py-4">Place a bid</button>
                    </div>
                </div>
            </div>

            {/* top collections over 7 days */}
            <div className="border-s border-s-slate-200 px-5">
                <h2 className="font-black text-2xl">TOP COLLECTIONS OVER </h2>
                <p className="text-indigo-600 font-bold mb-8">Last 7 days</p>
                <div className="py-4 flex justify-between items-center border-b border-b-slate-200">
                    <h2 className="text-lg font-bold">1</h2>
                    <div className="relative">
                        <div><img className="w-10 h-10" src={img5} alt="" /></div>
                        <div><img className="absolute bottom-6 left-5 w-6 h-6" src={verify} alt="" /></div>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">CryptoFunks</p>
                        <p className="flex items-center"><FaEthereum className="mr-1"/> <span className="text-xs font-medium">19,769.39</span></p>
                    </div>
                    <h2 className="font-bold text-lg text-[#14C8B0]">+26.52%</h2>
                </div>
                <div className="py-4 flex justify-between items-center border-b border-b-slate-200">
                    <h2 className="text-lg font-bold">2</h2>
                    <img className="w-10 h-10" src={img6} alt="" />
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">Cryptix</p>
                        <p className="flex items-center"><FaEthereum className="mr-1"/> <span className="text-xs font-medium">2,769.39</span></p>
                    </div>
                    <h2 className="font-bold text-lg text-[#FF002E]">+10.52%</h2>
                </div>
                <div className="py-4 flex justify-between items-center border-b border-b-slate-200">
                    <h2 className="text-lg font-bold">3</h2>
                    <img className="w-10 h-10" src={img7} alt="" />
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">Frensware</p>
                        <p className="flex items-center"><FaEthereum className="mr-1"/> <span className="text-xs font-medium">9,232.39</span></p>
                    </div>
                    <h2 className="font-bold text-lg text-[#14C8B0]">+2.52%</h2>
                </div>
                <div className="py-4 flex justify-between items-center border-b border-b-slate-200">
                    <h2 className="text-lg font-bold">4</h2>
                    <div className="relative">
                        <div><img className="w-10 h-10" src={img8} alt="" /></div>
                        <div><img className="absolute bottom-6 left-5 w-6 h-6" src={verify} alt="" /></div>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">PunkArt</p>
                        <p className="flex items-center"><FaEthereum className="mr-1"/> <span className="text-xs font-medium">3,769.39</span></p>
                    </div>
                    <h2 className="font-bold text-lg text-[#14C8B0]">+1.52%</h2>
                </div>
                <div className="py-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold">5</h2>
                    <img className="w-10 h-10" src={img9} alt="" />
                    <div className="space-y-2">
                        <p className="font-semibold text-sm">Art Crypto</p>
                        <p className="flex items-center"><FaEthereum className="mr-1"/> <span className="text-xs font-medium">10,769.39</span></p>
                    </div>
                    <h2 className="font-bold text-lg text-[#FF002E]">+2.52%</h2>
                </div>
            </div>
        </div>
    );
};

export default TopCollections;