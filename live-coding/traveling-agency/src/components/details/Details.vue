<script setup>
import {ref, onMounted, computed} from 'vue';

const ticket = ref({});
const result = ref({});

onMounted(async function() {
  let travelInfo = sessionStorage.getItem("ticket-info");
  ticket.value = JSON.parse(travelInfo);

  const destination = ticket.value.destination;
  const origin = ticket.value.origin;

  let responses = await Promise.all([
    fetch(`https://api.resrobot.se/v2.1/location.name?input=${origin}&format=json&accessId=c23d55b7-afa2-4bf9-ae87-4ef297bc7678`),
    fetch(`https://api.resrobot.se/v2.1/location.name?input=${destination}&format=json&accessId=c23d55b7-afa2-4bf9-ae87-4ef297bc7678`)
  ]);

  let originData = await responses[0].json();
  let destinationData = await responses[1].json();

  let originId = originData.stopLocationOrCoordLocation[0].StopLocation.extId;
  let destinationId = destinationData.stopLocationOrCoordLocation[0].StopLocation.extId;

  let routeResponse = await fetch(`https://api.resrobot.se/v2.1/trip?format=json&originId=${originId}&destId=${destinationId}&accessId=c23d55b7-afa2-4bf9-ae87-4ef297bc7678`);

  let routeData = await routeResponse.json();
  let tripData = routeData.Trip[0];

  result.value = {destinationTime: tripData.Destination.time, originTime: tripData.Origin.time};
  console.log(result.value);
});

const isEmptyResult = computed(function() {
  console.log(Object.keys(result.value).length === 0)
  return Object.keys(result.value).length === 0;
})
</script>

<template>
  <h2>Du har sökt en biljett!!! wooh</h2>

  <p>Destination: {{ ticket.destination }}</p>
  <p>Origin: {{ ticket.origin }}</p>

  <span v-if="isEmptyResult"></span>
  <div v-else>
    <label>Avgång: {{result.originTime}}</label> <br>
    <label>Ankomst: {{result.destinationTime}}</label>
  </div>
</template>
