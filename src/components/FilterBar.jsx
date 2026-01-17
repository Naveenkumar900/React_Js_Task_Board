function FilterBar({filter,onFilterChange,search,onSearchChange}){
    return(
        <div className="filter-bar">
            <select
             value={filter}
             onChange={(e)=>onFilterChange(e.target.value)} 
            >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>

            </select>

            <input
                type="text"
                placeholder="Search Tasks"
                value={search}
                onChange={(e)=>onSearchChange(e.target.value)}            />
        </div>
    )
}
export default FilterBar;