import cities from "../Data";
import City from "./City";
function Main () {
    return(
        <div>
            {
                cities.map((cityData, index) =>{
                    //iterates through each city object 
                    //taking each object out of the array and passing it down as props into City

                    //JSX requires unique key identifiers, so key = index is necessary
                    //otherwise, we get a Reach error

                    //Everytime the city component renders, we will send data down as props until we stop iterating
                    return <City cityData = { cityData} key={ index} />
                })
            }
        </div>
    )
}
export default Main;