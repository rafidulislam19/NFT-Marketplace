import img1 from "../../../public/images/topCollections/image1.png"
import img2 from "../../../public/images/topCollections/image2.png"
import img3 from "../../../public/images/topCollections/image3.png"
import img4 from "../../../public/images/topCollections/image4.png"
import man from "../../../public/images/man.jpg"
import { FaEthereum } from 'react-icons/fa';

const TopCollections = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 xl:mx-0">

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
           
            <div></div>
            <div></div>
        </div>
    );
};

export default TopCollections;