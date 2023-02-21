<template>
    <div class="q-pa-md ">
            <div class="q-pa-md">
                <div class="q-gutter-md row justify-center "> 
                    <listmachine :machine="machine" />
                </div>
            </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import listmachine from '../components/listmachine.vue'
import machinedetail from '../machinedetail.json'

const machine = ref([
    {name:"Samsung เครื่องซักผ้าฝาบน 18 กก.",number:"1",image:"https://www.lg.com/th/images/washing-machine/md07512355/gallery/medium01.jpg"},
    {name:"LG เครื่องซักผ้าฝาบน 17 กก.",number:"2",image:"https://www.lg.com/th/images/washing-machine/md07512355/gallery/medium01.jpg"},
    {name:"Haier เครื่องซักผ้าฝาหน้า 10 กก.",number:"3",image:"https://www.lg.com/th/images/washing-machine/md07512355/gallery/medium01.jpg"},
    {name:"Haier เครื่องซักผ้าฝาหน้า 10 กก.",number:"4",image:"https://www.lg.com/th/images/washing-machine/md07512355/gallery/medium01.jpg"}
])


</script>

<style scoped>

</style>