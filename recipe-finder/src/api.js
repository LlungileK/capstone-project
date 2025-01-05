const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

// Fetch recipes based on a search query
export const fetchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_BASE}/search.php?s=${query}`);
    const data = await response.json();
    return data.meals || []; // Return an empty array if no results
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

// Fetch a specific recipe by its ID
export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null; // Return the first recipe or null
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    return null;
  }
};
