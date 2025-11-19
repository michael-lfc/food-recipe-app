// import { Link } from "react-router-dom";
// // import "./Navbar.css";
// import '../styles/navbar.css';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Recipe App</div>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/create">Create Recipe</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Recipe App</div>
      <div className="nav-links">
        {/* All links inside /app must include /app */}
        <Link to="/app">Home</Link>
        <Link to="/app/create">Create Recipe</Link>
      </div>
    </nav>
  );
};

export default Navbar;

