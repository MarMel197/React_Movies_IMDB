import react from "react";
import Film from "./Film";
const FilmList = ({films}) => {
    const filmArray = films.map(film => {
        return(
            <>
            
            <Film title = {<a href={film.url}>{film.name}</a>}></Film>
            </>
        )
    })
    return(
        <>
        <h1>Upcoming Films</h1>
        
        {filmArray}
 
        </>
    )
}
export default FilmList;