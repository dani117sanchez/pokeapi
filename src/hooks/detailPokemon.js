import { useRoute } from 'vue-router';
import { reactive, toRefs, computed, onMounted, watch} from 'vue';

export function detailPokemon(){
    const state = reactive({
        pokemon:null,
        stats: computed(() => filtersStats()),
        types: computed(() => filtersTypes())

    });

    const  filtersStats = () => {
        if(state.pokemon) {
            const { stats } = state.pokemon;
            return stats.map((stat) => (
                stat.base_stat
            ));
        }
    };

    const filtersTypes = () => {
        if(state.pokemon) {
            const { types } = state.pokemon;
            return types.map((type) => type.type.name);
        }
    };

    const route = useRoute();

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            state.pokemon = data;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    watch(route, () => {
        fetchPokemon();
    });
    
    onMounted(() => {
        fetchPokemon();
    });

    return {
        ...toRefs(state),
    };



}

// const state = reactive({
//     pokemon: null
// });


// const { pokemon } = toRefs(state);

// console.log(route.params.id)
// let id = route.params.id;

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         state.pokemon = data;
//         // Add your logic here to display the fetched data in the template

//     })

