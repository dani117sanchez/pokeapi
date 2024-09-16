import { reactive, toRefs, computed } from 'vue';

export function getPokemons() {
    const state = reactive({
        pokemons: [],
        name: '',
        filterPokemons: computed(() => searchPokemon())
    });

    const searchPokemon = () => {
        return state.pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(state.name.toLowerCase())
        );
    }

    const fetchPokemons = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = await response.json();
            console.log(data);

            data.results.forEach((element, index) => {
                const pokemon = {
                    ...element,
                    index: index + 1
                };
                state.pokemons.push(pokemon);
            });
        } catch (error) {
            console.error('Error fetching Pokemons:', error);
        }
    };

    fetchPokemons();

    return {
        ...toRefs(state)
    };
}
