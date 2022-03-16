function City (props) {
    return(
        <>
            <h1>{props.cityData.capitol}</h1>
            <p>{props.cityData.country}</p>
            <p>{props.cityData.population}</p>
            <p>{props.cityData.language}</p>
        </>
    )
}
export default City;