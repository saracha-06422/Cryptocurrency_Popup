import '../css/AppSearch.css'

function AppSearch(props){
    const {value, onValueChange} = props;
    return (
        <div className="app-search">
            <input 
            className="app-search-input"
            type="text"
            value={value}
            placeholder="ค้นหาสักหน่อยไหมหละที่รัก"
            onChange={(event)=>{onValueChange(event.target.value)}}
            />
      </div>
    )
}

export default AppSearch;