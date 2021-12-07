import React,{useState, useEffect, useRef} from 'react';
import EmployeeList from './Filtered-employee';

function SearchBlock() {
    const [inp, setInp]=useState(null);
    const [grid, setGrid]= useState(true);
    const searchinp = useRef(null);
    const [sort, setSort] = useState(null);
    useEffect(()=>{
        if(grid===true)
    {
       document.querySelector(".grid").style.backgroundColor="yellow";
       document.querySelector(".list").style.backgroundColor="";
    }
    if(grid===false){
        document.querySelector(".grid").style.backgroundColor="";
        document.querySelector(".list").style.backgroundColor="yellow"; 
    }
    if(sort===true){
        document.querySelector(".sort").style.backgroundColor="yellow"; 
    }
    if(sort===false){
        document.querySelector(".sort").style.backgroundColor=""; 
    }
    },[grid,sort])
    const searchEmp=() =>
    {
        setInp(searchinp.current.value);
    }
    const loadAllEmp = () =>{
        searchinp.current.value="";
        setInp("");
    }
    const changeToGrid=()=>{
               setGrid(false);
    }
    const changeToList=()=>{
        setGrid(true);
   }

    return (
        <>
        <div className="Filter-container">
        <div className="search-bar">
            <input type="text" ref={searchinp} placeholder="Type any employee data"/>
            <button className="inpBtnGrp" onClick={searchEmp}>Search</button>
            <button className="inpBtnGrp" onClick={loadAllEmp}>Clear</button>
        </div>
        <div className="sort-bar">
            <button className="inpBtnGrp sort" onClick={()=>{setSort(!sort)}}>Sort by name</button>
            <button className="inpBtnGrp grid" onClick={changeToList} title="Grid">Grid</button>
            <button className="inpBtnGrp list" onClick={changeToGrid} title="List">List</button>
        </div>
        </div>
        <EmployeeList props={{inp,grid,sort}}/>
        </>
    )
}

export default SearchBlock
