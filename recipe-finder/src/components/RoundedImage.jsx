const RoundedImage = ({ src, alt, className = '' }) => (
    <img
      src={src}
      alt={alt}
      className={`w-full h-48 object-cover rounded-lg shadow-md ${className}`}
    />
  );
  
  export default RoundedImage;
  