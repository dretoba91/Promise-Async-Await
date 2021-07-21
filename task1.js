// Task 1: Translate the story into code.

const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    // set time for the duration to know if Kayo is not sick to make a cake or not.
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(`2 Cakes`);
      } else {
        // it's best practice to pass Error as message for reject()
        reject(new Error(`I am sad!!!`));
      }
    }, 2000);
  });
};

console.time(`Timer`);

onMyBirthday(false)
  .then((result) => {
    console.timeLog(`Timer`);
    console.log(`I have ${result}`);
  })

  .catch((error) => {
    console.timeLog(`Timer`);
    console.log(error);
  });
