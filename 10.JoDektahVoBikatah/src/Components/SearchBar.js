

const SearchBar=()=>{
    return(
        <>
        <div className="search-bar p-4 px-12">
            <input className="search" type="text" placeholder="Search"/>
            <button type="submit">🔍</button>
            </div>
        </>
    )
}

console.log(<SearchBar/>)

export default SearchBar;