
const GamesFilter = ({ filterGames }) => {

    return (
        <div className="FilterGames">
            <input type="text" placeholder="Search for name..." onChange={filterGames} />
        </div>
    )
}

export default GamesFilter