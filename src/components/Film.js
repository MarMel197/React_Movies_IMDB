import react from "react";
const Film = ({title, children}) => {
    return(
        <>
            <h4><a href={children}>{title}</a></h4>
        </>
    )
}
export default Film;