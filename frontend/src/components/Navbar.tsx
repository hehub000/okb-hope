import { logout, signInWithGoogle } from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import Link from "next/link";
import Logo from '@/assets/logo.svg'

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header>
      <nav className="">
        <div className="navbar flex bg-[#C1C1C1] items-end">
          {/* logo for website */}
          <Logo />
          <div className="flex-1"></div>
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <Link href="/discover" className="w-18">
                <div className="text-[18px] font-[500]">Discover Professionals</div>
              </Link>
            </li>
            <li>
              <Link href="/messages" className="w-18">
                <div className="text-[18px] font-[500]">Messages</div>
              </Link>
            </li>
            <li>
              <Link href="/about" className="w-18">
                <div className="text-[18px] font-[500]">About Us</div>
              </Link>
            </li>
            <li>
              {user ?
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                  <div tabIndex={0} className="btn btn-circle"></div>
                  <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                    <Link href="edit_profile">
                      <li><a>Edit Profile</a></li>
                    </Link>
                    <li><a onClick={logout}>Log out</a></li>
                  </ul>
                </div> :
                <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                  <div tabIndex={0} className="btn btn-circle"></div>
                  <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={() => signInWithGoogle}>Log in</a></li>
                  </ul>
                </div>}
            </li>
          </ul>
        </div>
      </nav>
    </header>

  )
}

export default Navbar;




    // <header>
    //   <nav className="">
    //     <div className="navbar flex bg-[#C1C1C1] items-end">
    //       <div className="flex-1">
    //         <img className="btn btn-circle" src={wohohiame_logo}></img>
    //       </div>
    //       <div className="flex-1"></div>
    //       <ul className="menu menu-horizontal px-1 gap-5">
    //         <li>
    //           <Link href="/bookings" className="w-18">
    //             <div className="">Discover Professionals</div>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/bookings" className="w-18">
    //             <div className="">Messages</div>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/bookings" className="w-18">
    //             <div className="">About Us</div>
    //           </Link>
    //         </li>
    //         <li>
    //           {user ?
    //             <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
    //               <img tabIndex={0} className="btn btn-circle"></img>
    //               <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
    //                 <Link href="edit_profile">
    //                   <li><a>Edit Profile</a></li>
    //                 </Link>
    //                 <li><a onClick={logout}>Log out</a></li>
    //               </ul>
    //             </div> :
    //             <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
    //               <img tabIndex={0} className="btn btn-circle"></img>
    //               <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
    //                 <li><a onClick={signInWithGoogle}>Log in</a></li>
    //               </ul>
    //             </div>}
    //         </li>
    //       </ul>
    //     </div>
    //   </nav >
    // </header >