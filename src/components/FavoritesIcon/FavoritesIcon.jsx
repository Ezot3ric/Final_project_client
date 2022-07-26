import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {

    const [showInitial, setShowInitial] = useState(img)

    const toggleImage = () => {
        showInitial === img && favorites ? setShowInitial(imgClicked) : setShowInitial(img)
    }

    const divStyle = {
        width: '30px',
        heigth: '30px'
    }

    return (

        <img style={divStyle} src={showInitial} onClick={toggleImage}></img>

    )
}

export default ClickablePicture 