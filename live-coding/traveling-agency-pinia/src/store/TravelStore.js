import { defineStore } from "pinia";

export const useTravelStore = defineStore('travel', {
  state: () => ({
    error: 'Something went wrong...',
    status: 'Currently loading information..',
    loading: false,
    result: {}
  }),
  getters: {
    isResultEmpty: (state) => Object.keys(state.result).length === 0
  },
  actions: {
    async fetchRoute(origin, destination) {
      this.status = "Now fetching information..";

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

      this.result = {destinationTime: tripData.Destination.time, originTime: tripData.Origin.time};
      this.status = "Information displayed";
    }
  }
});