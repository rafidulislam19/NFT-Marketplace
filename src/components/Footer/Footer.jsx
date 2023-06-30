

const Footer = () => {
    return (
    <footer className="footer p-14 lg:p-28 bg-base-200 text-base-content my-10">
  <div className="space-y-3">
    <h3 className="font-black text-2xl">NFTERS </h3>
    <p className="text-sm text-[#565656]">The worlds first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>
    <div className="grid grid-flow-col gap-4">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    </div>
  </div> 
  <div>
    <span className="footer-title">Market Place</span> 
    <div className="text-sm space-y-2">
    <a className="link link-hover">All NFTs</a> <br />
    <a className="link link-hover">New</a> <br />
    <a className="link link-hover">Art</a> <br />
    <a className="link link-hover">Sports</a> <br />
    <a className="link link-hover">Utility</a> <br />
    <a className="link link-hover">Music</a> <br />
    <a className="link link-hover">Domain Name</a>
    </div>
  </div> 
  <div>
    <span className="footer-title">My Account</span> 
    <a className="link link-hover">Profile</a>
    <a className="link link-hover">Favorite</a> 
    <a className="link link-hover">My Collections</a> 
    <a className="link link-hover">Settings</a>
  </div> 
  <div>
    <span className="footer-title">Stay in the loop</span> 
    <p className="text-sm space-y-2 text-[#565656]">Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
    <div className="flex items-center relative">
    <input className="h-14 w-80 p-5 rounded-full mt-3 outline outline-1 outline-slate-200" type="email" placeholder="Enter your email address.."   />
    <button className="absolute left-48 top-4 btn btn-primary rounded-full text-white text-xs">Subscibe Now</button>
    </div>
  </div>
  
  </footer>
    );
};

export default Footer;