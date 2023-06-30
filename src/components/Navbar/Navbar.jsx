
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-28 mb-5 border-b border-b-slate-200">
  <div className="navbar-start">

    {/* hamburger menu for mobiles*/}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className="font-semibold">Marketplace</a></li>
        <li>
          <a className="font-semibold">Resource</a>
        </li>
        <li><a className="font-semibold">About</a></li>
        <li><input type="text" placeholder="Search" className="input input-bordered outline outline-1 outline-slate-500 w-full max-w-xs mt-2 rounded-full pl-6" /></li>
      </ul>
    </div>

    {/* logo */}
    <a className="btn btn-ghost normal-case text-[#3D00B7] text-2xl md:text-3xl font-bold">NFTERS</a>
  </div>

  {/* navbar elements */}
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-lg">Marketplace</a></li>
      <li>
          <a className="text-lg">Resource</a>
        </li>
      <li><a className=" text-lg mr-3">About</a></li>
      <li><input type="text" placeholder="Search" className="input input-bordered outline outline-1 outline-slate-300 w-full max-w-xs rounded-full pl-6"/></li>
    </ul>
  </div>
  
  {/* navbar buttons */}
  <div className="navbar-end">
     <button className="btn btn-primary rounded-full px-8 mr-3 text-white">Upload</button>
     <button className="btn btn-outline btn-primary rounded-full">Connect Wallet</button>
  </div>
</div>
    );
};

export default Navbar;