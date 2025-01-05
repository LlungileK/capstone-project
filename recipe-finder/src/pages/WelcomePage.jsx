import { Link } from 'react-router-dom';
import RoundedImage from '../components/RoundedImage';

const WelcomePage = () => {
  const sampleImages = [
    'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg', // Example meal image
    'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    'https://www.themealdb.com/images/media/meals/1548772327.jpg',
    'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    'https://www.themealdb.com/images/media/meals/1550441882.jpg',
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Recipe Finder!</h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        Discover delicious recipes from around the world. Search, explore, and save your favorites!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {sampleImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <RoundedImage 
              key={index}
              src={image}
              alt={`Meal ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600"
        >
          Start Exploring Recipes
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
