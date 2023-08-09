import { useState } from "react";

// properties are received by the title and when used will give the value that they are assigned
function Header({ title, subtitle }) {

    // state to keep track of whether or not text appears on the DOM
    // A button
    // useState to store whether or not button is open

    const [showSlogan, setShowSlogan] = useState(false)

    let sloganHandler = () => {
        // this will toggle state for slogan
        console.log("inside of sloganHandler")
        setShowSlogan(!showSlogan)
    }

    return (
        <>
            <h1>{title}</h1>

            <button onClick={sloganHandler} style={{ marginBottom: "10px" }}>Show Slogan</button>

            {(showSlogan == true) && <h2>{subtitle}</h2>}

            <hr />

        </>
    );
}



export default Header