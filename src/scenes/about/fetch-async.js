/**
 * ! Fetch
 */
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        let { results } = data
        results.forEach(poke => {
            console.log(poke.name)
        })
        return results
    })
    .catch(err => console.log(err))

/**
 * ! Async await
 */
const getPokemons = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const { results } = await res.json()

        results.forEach(({ name, url }, index) => {
            console.log(`pokemon ${index}: ${name} url: ${url}`);
        })
        return results
    } catch (err) {
        console.log(err);
    }
}
getPokemons()
