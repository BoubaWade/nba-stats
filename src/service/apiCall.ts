export const getAllPlayers = () => {
    try {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then((res) => res.json())
            .then(result)=>

    } catch (error) {
        console.error(error)
    }
}

