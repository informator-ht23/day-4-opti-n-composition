<script setup>
import { useTravelStore } from '../../store/TravelStore';
import {ref, onMounted} from 'vue';

const ticket = ref({});

const travel = useTravelStore();

onMounted(async function() {
  let travelInfo = sessionStorage.getItem("ticket-info");
  ticket.value = JSON.parse(travelInfo);

  travel.fetchRoute(ticket.value.destination, ticket.value.origin);
});
</script>

<template>
  <h2>Du har sökt en biljett!!! wooh</h2>

  <p>Destination: {{ ticket.destination }}</p>
  <p>Origin: {{ ticket.origin }}</p>

  <span v-if="travel.isResultEmpty">{{travel.status}}</span>
  <div v-else>
    <label>Avgång: {{travel.result.originTime}}</label> <br>
    <label>Ankomst: {{travel.result.destinationTime}}</label>
  </div>
</template>
