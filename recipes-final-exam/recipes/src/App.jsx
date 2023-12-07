import { useState } from 'react'
import './App.css'
import { foods } from './recipes';
import Highlighter from "react-highlight-words";

function App() {
  
  const [searchItem, setSearchItem] = useState("")
  const [recipeList, setRecipeList] = useState(foods)
  const MarkedSearchQuery = searchItem;
  console.log(MarkedSearchQuery)

  const handleInputChange = (e) => {
    e.preventDefault()
    const searchQuery = e.target.value;
    setSearchItem(searchQuery);

    if (searchItem.length > 0) {
      const filteredRecipes = foods.filter(recipe => 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()
        )
      );
      setRecipeList(filteredRecipes)
      
    } else { setRecipeList(foods)
    }
  }
  

  return (
    <>
      <input type="search" id="search" name='search' onChange={handleInputChange} placeholder="Search for recipe"/>
      
      {
      recipeList.length === 0  
      ? (
        <p>No recipe found</p>
      )
      : (recipeList.map(recipe => (
        
        <div key={recipe.id} className="recipe">
          <p className='recipe-name'>
            <Highlighter
              highlightClassName="highlightClass" // Define your custom highlight class
              searchWords={[MarkedSearchQuery]}
              autoEscape={true}
              textToHighlight={recipe.name} // Replace this with your text
            />
          </p>
          
          <Highlighter
            highlightClassName="highlightClass" // Define your custom highlight class
            searchWords={[MarkedSearchQuery]}
            autoEscape={true}
            textToHighlight={recipe.description}// Replace this with your text
          />
           
        </div> 
        
      )

      ))}
      
    </>
  )
}

export default App
