import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import RoundedImage from './RoundedImage';

function RecipeCard({ recipe }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(recipe.idMeal)) {
      removeFromFavorites(recipe.idMeal);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div className="grid-layout mt-8">
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
          onClick={handleFavoriteClick}
          className={`px-2 py-1 rounded-md ${
            isFavorite(recipe.idMeal)
              ? 'bg-red-500 text-white'
              : 'bg-gray-300 text-black'
          }`}
          aria-label={
            isFavorite(recipe.idMeal)
              ? `Remove ${recipe.strMeal} from favorites`
              : `Add ${recipe.strMeal} to favorites`
          }
          title={
            isFavorite(recipe.idMeal)
              ? `Click to remove ${recipe.strMeal} from favorites`
              : `Click to add ${recipe.strMeal} to favorites`
          }
        >
          {isFavorite(recipe.idMeal) ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
