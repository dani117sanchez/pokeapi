<script setup>
import { getPokemons } from '../hooks/getPokemons';

const { name, filterPokemons } = getPokemons();
</script>

<template>
    <header class="header">
        <div class="container">
            <h1 class="logo">PokeAPI</h1>
        </div>
    </header>
    <div>
        <div class="section">
            <div class="col-span-1">
                <input type="text" class="mb-3 p-2 border-black border-2 w-full" placeholder="Nombre del pokemon"
                    v-model="name">
                <ul class="overflow-y-auto max-h-96">
                    <li v-for="pokemon in filterPokemons" key="pokemon.index"
                        class="p-2 rounded hover:text-blue-400 hover:bg-blue-100">
                        <span class="text-sm font-normal text-gray-500 m-3">#{{ pokemon.index }}</span>
                        <router-link :to="`/details/${pokemon.index}`">{{ pokemon.name }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-span-5">
                <router-view />
            </div>
        </div>

    </div>
    <footer class="footer">
        <div class="container">
            <p class="credits">© 2024 PokeAPI. Todos los derechos reservados.</p>
            <ul class="social-links">
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>