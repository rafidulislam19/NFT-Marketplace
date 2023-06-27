

const Explore = () => {
    return (
        <div className="my-20 mx-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                    <h2>img</h2>
                </div>
            </div>
        </div>
    );
};

export default Explore;