const timmyDidLaundary = true;

const didTimmyDoLaundry = new Promise((resolve, reject) => {
  if(timmyDidLaundary) {
    resolve();
  } else {
    reject();
  }
});


didTimmyDoLaundry
  .then(() => console.log("Timmy plays football"))
  .catch(() => console.log("Timmy has to do dishes and cannot play football"));