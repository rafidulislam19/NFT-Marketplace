import { BsCardChecklist } from 'react-icons/bs';
import { MdOutlineInsertChart } from 'react-icons/md';

const Transaction = () => {
    return (
        <div className="my-10 lg:my-28 mx-6 xl:mx-0 px-10 py-24 bg-slate-100 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <h2 className="font-black text-3xl">THE AMAZING NFT ART <br /> OF THE WORLD HERE</h2>
            
            <div>
                <div className='flex items-center'>
                    <><BsCardChecklist size="28px" className='mr-3'/> <span className='font-bold'>Fast Transaction</span></>
                </div>
                <p className='ml-10'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Aliquam <br /> etiam viverra tellus imperdiet.</p>
            </div>

            <div>
                <div className='flex items-center'>
                    <><MdOutlineInsertChart size="28px" className='mr-3'/> <span className='font-bold'>Growth Transaction</span></>
                </div>
                <p className='ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
            </div>
            
        </div>
    );
};

export default Transaction;