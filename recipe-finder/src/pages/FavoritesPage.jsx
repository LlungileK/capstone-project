import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import RoundedImage from '../components/RoundedImage';

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You have no favorite recipes.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe) => (
            <div 
              key={recipe.idMeal} 
              className="border rounded-lg p-4 shadow-md">
              <RoundedImage
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2
                className="text-lg font-semibold mt-2 truncate"
                title={recipe.strMeal}
              >
                {recipe.strMeal}
              </h2>
              <p className="text-md text-gray-600">
                Category: {recipe.strCategory || 'N/A'}
              </p>
              <p className="text-md text-gray-600">
                Cuisine: {recipe.strArea || 'N/A'}
              </p>
              <div className="flex justify-between items-center mt-2">
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFromFavorites(recipe.idMeal)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
