<script setup>
import { detailPokemon } from '../hooks/detailPokemon';
import BarChart from '../components/barChart.vue';
import RadarChart from '../components/RadarChart.vue';
import { ref } from 'vue'

const { pokemon, stats, types } = detailPokemon();

const isBarChart = ref(true)

const changeChart = () => {
    isBarChart.value = !isBarChart.value;
};


</script>

<template>
    <div>
        <div v-if="pokemon">
            <div class="w-4/6 mx-auto rounded-xl p-10 shadow-lg">
                <h1 class="font-black md:text-3xl text-xl text-red-900 mb-2">{{ pokemon.name }}</h1>

                <span v-for="type in types" :key="type"
                    class="py-1 px-1 shadow-md rounded-full bg-green-500 text-white font-semibold mr-2 mt-3">
                    {{ type }}
                </span>

                <div class="flex flex-wrap">
                    <div class="flex-1 grid place-items-center">
                        <img class="h-48 w-48" :src="pokemon.sprites.front_default" :alt="`nombre de ${pokemon.name}`">
                    </div>
                    <div class="flex-1">
                        <div class="switch-container">
                            <button @click="changeChart()" :class="{ active: isBarChart }" class="switch-button">
                                {{ isBarChart ? 'Radar' : 'Bar' }}
                            </button>
                        </div>


                        <component>
                            <template v-if="isBarChart">
                                <BarChart :stats="stats" />
                            </template>
                            <template v-else>
                                <RadarChart :stats="stats" />
                            </template>
                        </component>
                        <!-- <bar-chart :stats="stats" /> -->
                    </div>
                </div>

            </div>
        </div>
        <div v-else>No hay datos</div>
    </div>
</template>
