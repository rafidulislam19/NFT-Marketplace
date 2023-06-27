import img from "../../../public/images/man.jpg"
import img1 from "../../../public/images/image1.png"
import img2 from "../../../public/images/image2.png"

const Explore = () => {
    return (
        <div className="my-20 mx-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-5xl font-extrabold">DISCOVER, AND COLLECT DIGITAL ART NFTS</h2>
                    <p className="text-xl">Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <button className="btn btn-primary rounded-full px-10 py-4">Explore Now</button>
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
              <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white w-3/4 ">
                   <div>
                   <h2 className="text-xl mb-4 font-medium">Abstr Gradient NFT</h2>
                    <div className="flex items-center">
                        <img className="w-8 h-8 rounded-full mr-2" src={img} alt="" />
                        <p>Arkhan17</p>
                    </div>
                   </div>

                   <div className="flex justify-between p-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl mt-48">
                    <div>
                        <p>Current Bid</p>
                        <h3>0.25 ETH</h3>
                    </div>
                    <div>
                        <p>Ends in</p>
                        <h3>12h  43m  42s</h3>
                    </div>
                   </div>

                </div>
                <div className="w-1/2 absolute right-28 top-10 -z-50 h-5/6 rounded-3xl">
                       <img src={img1}  className="h-[350px]"/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Explore;