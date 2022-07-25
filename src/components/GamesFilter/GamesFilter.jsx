
const GamesFilter = ({ filterGames }) => {

    return (
        <div className="FilterGames">
            <input type="text" placeholder="ESCRIBE EL NOMBRE..." onChange={filterGames} />
        </div>
    )
}

export default GamesFilter