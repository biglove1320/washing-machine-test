<template>
    <div class="q-gutter-md row justify-center">
        <Machine 
          v-for="(item,index) in machine" 
          :key="index"
          :name="item.name"
          :number="item.number"
          :image="item.image"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Machine from '../components/machine.vue';

const props = defineProps(['machine'])

</script>

<style scoped>

</style>