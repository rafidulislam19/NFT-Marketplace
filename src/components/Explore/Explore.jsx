import img from "../../../public/images/man.png";
import img1 from "../../../public/images/explore/image2.png"
import img2 from "../../../public/images/explore/image3.png"
import { FaEthereum } from 'react-icons/fa';

const Explore = () => {
    return (
        <div className="my-8 lg:my-20 mx-6 xl:mx-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* left part of explore section */}
                <div className="space-y-6">
                    <h2 className="text-5xl font-black">DISCOVER, AND COLLECT DIGITAL ART NFTS</h2>
                    <p className="text-xl">Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <button className="btn btn-primary rounded-full px-10 py-4 text-white">Explore Now</button>
                    <div className="grid grid-cols-3">
                        <div>
                            <h2 className="text-5xl font-extrabold">98k+</h2>
                            <p className="text-xl">Artwork</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-extrabold">12k+</h2>
                            <p className="text-xl">Auction</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-extrabold">15k+</h2>
                            <p className="text-xl">Artist</p>
                        </div>
                    </div>
                </div>

                {/* right part of explore section */}
              <div className="relative pl-8">
                {/* first picture */}
              <div className="bg-[url('../../../public/images/explore/image1.png')] bg-cover rounded-3xl p-8 text-white w-3/4 ">
                   <div className="text-white font-medium">
                   <h2 className="text-xl mb-4 ">Abstr Gradient NFT</h2>
                    <div className="flex items-center">
                        {/* person name & image */}
                        <img className="w-8 h-8 rounded-full mr-2" src={img} alt="" />
                        <p>Arkhan17</p>
                    </div>
                   </div>

                   <div className="flex justify-between p-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl mt-48 font-semibold">
                    <div>
                        <p>Current Bid</p>
                        <div className="flex items-center"><FaEthereum className="mr-2"/> <span>0.25 ETH</span></div>
                    </div>
                    <div>
                        <p>Ends in</p>
                        <h3>12h  43m  42s</h3>
                    </div>
                   </div>

                </div>
                {/* 2nd picture */}
                <div className="w-1/2 absolute right-16 lg:right-24 top-6 -z-50 rounded-3xl">
                       <img src={img1}  className="h-[375px]"/>
                </div>
                {/* 3rd picture */}
                <div className="w-1/2 absolute right-8 lg:right-14 top-11 -z-100 rounded-3xl">
                       <img src={img2}  className="h-[335px]"/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Explore;