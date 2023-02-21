<template>
  <div>
    <q-card class="my-card" style="width: 400px; max-height: 400px">
      <q-img :src="image">
        <div class="absolute-bottom">
          <div class="text-h6">{{ name }}</div>
          <div class="text-subtitle2">เครื่องที่ : {{ number }}</div>
        </div>
      </q-img>

      <q-card-actions
        class="row justify-between"
        style="font-size: 2em,width: 100%;"
      >
        <div class="row">
          <q-btn
            v-on:click="
              (status = !status),
                (statusbtn = !statusbtn),
                (startTime = !startTime)
            "
            @click="onCount"
            v-show="statusbtn"
            flat
            color="green"
            >Start</q-btn
          >
          <q-btn flat disable>Status :</q-btn>
          <p v-if="status == true">พร้อมใช้งาน</p>
          <p v-if="status == false">กำลังใช้งาน</p>
          <div
            v-show="startTime"
            id="time"
            style="font-size: 18px; position: relative; top: 7px; left: 50px"
          ></div>
        </div>

        <div class="row" style="font-size: 2em">
          <q-badge v-show="!status" rounded color="red" />
          <q-badge v-show="status" rounded color="green" />
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";


const props = defineProps(["name", "number", "image"]);

const status = ref(true);
const statusbtn = ref(true);
const startTime = ref(false);

const numberMachine = props.number;

function onCount() {
  let count = 64;
  const numberM = numberMachine;
  var countTime = setInterval(async() => {
    count--;
    console.log("Countdown", count);
    if (count == 60) {
       axios.post('http://localhost:3000/post',{
        'message':"Machine that :"+"" + numberM +"" +"1 minute left"
       }).then(res=>console.log('Send Message')).catch(err=>console.log(err))
      console.log("Machine that :" +"" +numberM +""+ "1 minute left");
    } else if (count == 0) {
      clearInterval(countTime);
      console.log("Finish");
    }
  }, 1000);
}


</script>

<style scoped>
p {
  font-size: 16px;
  position: relative;
  top: 8px;
  right: 5px;
}
</style>
