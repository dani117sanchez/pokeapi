<script setup>
import { computed } from 'vue'

const props = defineProps({
    stats: Array
})

const options = {
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: [
            'HP',
            'Attack',
            'Defense',
            'Special Attack',
            'Special Defense',
            'Speed'
        ]
    }
};
const series = computed(() => {
    return [
        {
            name: 'Stats',
            data: props.stats
        }
    ]
});

</script>

<template>
    <div>
        <apexchart width="500" type="radar" :options="options" :series="series"></apexchart>
    </div>
</template>