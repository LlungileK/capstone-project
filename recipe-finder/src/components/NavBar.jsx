import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Recipe Finder
        </Link>
        <Link to="/favorites" className="text-lg">
          My Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
