import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api';
import RoundedImage from '../components/RoundedImage';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then(setRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-4 text-center">Loading recipe details...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <RoundedImage
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-auto rounded-lg mb-4"
      />
      <div className="mb-4">
        <p><strong>Category:</strong> {recipe.strCategory}</p>
        <p><strong>Cuisine:</strong> {recipe.strArea}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6">
          {Array.from({ length: 20 }, (_, i) => i + 1)
            .map((i) => ({
              ingredient: recipe[`strIngredient${i}`],
              measure: recipe[`strMeasure${i}`],
            }))
            .filter(({ ingredient }) => ingredient)
            .map(({ ingredient, measure }, index) => (
              <li key={index}>
                {measure} {ingredient}
              </li>
            ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </div>
      {recipe.strYoutube && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      )}
      <div>
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Full Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipePage;
