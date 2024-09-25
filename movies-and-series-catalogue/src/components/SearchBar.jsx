import SearchIcon from '@mui/icons-material/Search';

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
        <SearchIcon className="search-icon"/>
    </section>
  )
  
}
