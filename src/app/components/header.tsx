
// export default function Header(){
//     return(
//         <div className="Top-Bar">
//           <div className="Logo">
//             <img src="Logo.png" alt="" />
//             <input className="Search" type="text" placeholder="Searrch icon"/>
//           </div>
                                                                        
            
//         </div>
//     )
// }










import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src="Search.png" alt="" />{""}
      </div>
      <div className="pages">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="icon">
        <img src="Favorites.png" alt="Product liked" />
        <img src="Cart.png" alt="Cart" />
        <img src="User.png" alt="Profile" />
      </div>
    </div>
  );
}