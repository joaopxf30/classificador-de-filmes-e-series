import { FaSearch } from "react-icons/fa"

export default function SearchBar({ textPlaceholder, action, query }) {
    
  return (
    <section className="search-bar">
      <input 
        className="search-input"
        value={query} 
        onChange={e => action(e.target.value)} 
        type="search" 
        placeholder={`Search for ${textPlaceholder}...`}
      />
      <FaSearch className="search-icon"/>
    </section>
  )
  
}
