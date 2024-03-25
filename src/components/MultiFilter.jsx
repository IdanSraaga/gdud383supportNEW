import React, { useEffect, useState } from "react";
import { items } from "../misc/items";
import "../styles/TutorialPage.css";
import '../styles/SearchBar.css'
import Box from "./Box";
export default function MultiFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["חומרה", "Watches", "Sports", "Sunglasses"];

  useEffect(() => {
    filterItems();
  }, [selectedFilters, searchQuery]);

  const filterItems = () => {
    let tempItems = items.filter((item) => {
      const categoryNameMatches = selectedFilters.length === 0 || selectedFilters.includes(item.category);
      const itemNameMatches = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatches = item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryNameMatches && (itemNameMatches || categoryMatches);
    });
    setFilteredItems(tempItems);
  };

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div>
      <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            className="search"
            onChange={handleSearchInputChange}
            placeholder="חפש..."
            style={{ direction: 'rtl' }} // Set direction to right-to-left
          />
          {searchQuery && (
            <button onClick={handleClear} aria-label="Clear search">
              x
            </button>
          )}
      </div>
      
        <div className="buttons-container" >
            {filters.map((category, idx) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`categorybutton ${
                  selectedFilters?.includes(category) ? "active" : ""
                }`}
                key={`filters-${idx}`}
              >
                {category}
              </button>
            ))}
          
        </div>
      


          <div className="items-container" style={{ overflowWrap: "break-word" }}>
              {filteredItems.map((item, idx) => (
                <div key={`items-${idx}`} className="item">
                  <p className="CategoryName">{item.name}</p>
                  <p >{item.description}</p>
                  <p className="category">{item.category}</p>
                </div>
              ))}
          </div>
        </div>


  );
}

