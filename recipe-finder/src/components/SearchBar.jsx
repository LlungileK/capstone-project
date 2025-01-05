function SearchBar({ setQuery }) {
    const handleInputChange = (e) => {
      setQuery(e.target.value); // Update the query state on input change
    };
  
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full p-2 border rounded-md"
          onChange={handleInputChange}
        />
      </div>
    );
  }
  
  export default SearchBar;
  
  