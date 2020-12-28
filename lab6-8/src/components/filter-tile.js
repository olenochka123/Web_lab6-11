import {FilterContainer} from '../styles/filter-tile-styles'
import SelectContainer from '../components/select'
import SearchBox from '../components/search-box'

function FilterTile({ type, country, search }) {
    return(
        <FilterContainer>
            <SelectContainer name='Type' options={[ 'Hotel', 'Apartments', 'Villa']} state={type} />
            <SelectContainer name='Country' options={[ 'Ukraine', 'Turkey', 'Spain', 'Italy', 'Egypt']}
                    state={country} />
            <SearchBox state={search} />
        </FilterContainer>
    );
}

export default FilterTile;