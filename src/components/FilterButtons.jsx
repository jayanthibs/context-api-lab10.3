import { useContext } from "react";
import { FilterContext } from "../AppProviders";

function FilterButtons() {

    const {filterTodo} = useContext(FilterContext);

    function handleClick(event){
        const name = event.target.name;

        filterTodo(name);



    }


  return (
    <>
      <div style={{display:"flex", gap:"20px", padding:"20px", justifyContent: "center"}}>
        <button name='all' onClick={handleClick}>All</button>
        <button name='active' onClick={handleClick}>Active</button>
        <button name = 'completed' onClick={handleClick}>Completed</button>
      </div>
    </>
  );
}

export default FilterButtons;
