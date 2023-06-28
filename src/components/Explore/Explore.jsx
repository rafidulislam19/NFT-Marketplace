import img from "../../../public/images/man.jpg"
import img1 from "../../../public/images/image1.png"
import img2 from "../../../public/images/image2.png"
import img3 from "../../../public/images/image3.png"

const Explore = () => {
    return (
        <div className="my-20 mx-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* left part of explore section */}
                <div className="space-y-6">
                    <h2 className="text-5xl font-extrabold">DISCOVER, AND COLLECT DIGITAL ART NFTS</h2>
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
              <div className="bg-[url('../../../public/images/image3.png')] bg-cover rounded-3xl p-8 text-white w-3/4 ">
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
                        <h3>0.25 ETH</h3>
                    </div>
                    <div>
                        <p>Ends in</p>
                        <h3>12h  43m  42s</h3>
                    </div>
                   </div>

                </div>
                <div className="w-1/2 absolute right-16 lg:right-24 top-6 -z-50 rounded-3xl">
                       <img src={img1}  className="h-[375px]"/>
                </div>
                <div className="w-1/2 absolute right-8 lg:right-14 top-11 -z-100 rounded-3xl">
                       <img src={img2}  className="h-[335px]"/>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Explore;