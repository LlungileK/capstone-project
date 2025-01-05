import { useState, useEffect } from 'react';
import { fetchRecipes } from '../api';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

function HomePage() {
  const [recipes, setRecipes] = useState([]); // List of recipes
  const [query, setQuery] = useState(''); // Search query
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchRecipes(query).then((recipes) => {
        setRecipes(recipes);
        setIsLoading(false);
      });
    }
  }, [query]);

  return (
    <div className="p-4">
      <SearchBar setQuery={setQuery} />
      {isLoading ? (
        <p className="text-center text-gray-500 mt-4">Loading recipes...</p>
      ) : recipes.length === 0 && query ? (
        <p className="text-center text-gray-500 mt-4">
          No recipes found for "{query}".
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;

