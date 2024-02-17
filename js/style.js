// const numbersOfSeries = +prompt('nechta serial kordingiz ?');

// const mySeries = prompt('oxirgi korgan serialingiz ?');
// const myBall = +prompt('nechi baxo bearsiz ?');

//  const seriesDb  = {
//     count : numbersOfSeries,
//     series : {},
//     actors: {},
//     geners:[],
//     privat: false

//  }

//  seriesDb.series[mySeries] = myBall;

//  console.log(seriesDb);

// sikll

// const numbersOfSeries = +prompt("nechta serial kordingiz ?");

// const seriesDb = {
//   count: numbersOfSeries,
//   series: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const mySeries = prompt("oxirgi korgan serialingiz ?");
//   const myBall = +prompt("nechi baxo bearsiz ?");
//   if (
//     mySeries !== null &&
//     myBall !== null &&
//     mySeries !== "" &&
//     myBall !== ""
//   ) {
//     seriesDb.series[mySeries] = myBall;
//   } else {
//     i--;
//   }
// }

// if (seriesDb.count < 5) {
//   console.log("yomon tomashabin");
// } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
//   console.log("normal tomoshabin ");
// } else if (seriesDb.count > 10) {
//   console.log("supper tomashbin");
// }

// console.log(seriesDb);

//function

// let numbersOfSeries;

// movieApp();

// const seriesDb = {
//   count: numbersOfSeries,
//   series: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// function movieApp() {
//   numbersOfSeries = +prompt("nechta serial kordingiz ?", "");
//   while (
//     numbersOfSeries === "" ||
//     numbersOfSeries === null ||
//     isNaN(numbersOfSeries)
//   ) {
//     numbersOfSeries = +prompt("nechta serial kordingiz ?", "");
//   }
// }

// function moviAsk() {
//   for (let i = 0; i < 2; i++) {
//     const mySeries = prompt("oxirgi korgan serialingiz ?", "");
//     const myBall = +prompt("nechi baxo bearsiz ?", "");
//     if (
//       mySeries !== null &&
//       myBall !== null &&
//       mySeries !== "" &&
//       myBall !== ""
//     ) {
//       seriesDb.series[mySeries] = myBall;
//     } else {
//       i--;
//     }
//   }
// }

// function movieQuestion() {
//   if (seriesDb.count < 5) {
//     console.log("yomon tomashabin");
//   } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
//     console.log("normal tomoshabin ");
//   } else if (seriesDb.count > 10) {
//     console.log("supper tomashbin");
//   }
// }

// function movieDb(isPravite) {
//   if (!isPravite) {
//     console.log(seriesDb);
//   } else {
//     console.log("malumot yashirin");
//   }
// }

// function writeGeners() {
//   for (let i = 0; i < 3; i++) {
//     let askGeners = prompt(` ${i + 1}yaxshi korgan janiringiz ?`, "");
//     if (askGeners !== "" || askGeners !== null) {
//       seriesDb.geners[i] = askGeners;
//     } else {
//       i--;
//     }
//   }
// }

// movieDb(seriesDb.privat);
// moviAsk();
// movieQuestion();
// writeGeners();

/// opp

const seriesDb = {
  count: 0,
  series: {},
  actors: {},
  geners: [],
  privat: false,
  start: function () {
    seriesDb.count = +prompt("nechta serial kordingiz ?", "");
    while (
      seriesDb.count === "" ||
      seriesDb.count === null ||
      isNaN(seriesDb.count)
    ) {
      seriesDb.count = +prompt("nechta serial kordingiz ?", "");
    }
  },
  moviName: function () {
    for (let i = 0; i < 2; i++) {
      const mySeries = prompt("oxirgi korgan serialingiz ?", "");
      const myBall = +prompt("nechi baxo bearsiz ?", "");
      if (
        mySeries !== null &&
        myBall !== null &&
        mySeries !== "" &&
        myBall !== ""
      ) {
        seriesDb.series[mySeries] = myBall;
      } else {
        i--;
      }
    }
  },
  raiting: function () {
    if (seriesDb.count < 5) {
      console.log("yomon tomashabin");
    } else if (seriesDb.count >= 5 && seriesDb.count < 10) {
      console.log("normal tomoshabin ");
    } else if (seriesDb.count > 10) {
      console.log("supper tomashbin");
    }
  },
  visibleDb: function () {
    if (seriesDb.privat) {
      seriesDb.privat = false;
    } else {
      seriesDb.privat = true;
    }
  },
  showDb: function () {
    if (!seriesDb.privat) {
      console.log(seriesDb);
    } else {
      console.log("malumot yashirin");
    }
  },
  writeGaners: function () {
    let geners = prompt("yaxshi korgan janirlaringiz , orqali yozing ?", "");

    while (geners == "" || geners == null) {
      geners = prompt("yaxshi korgan janirlaringiz , orqali yozing ?", "");
    }
    if (geners) {
      seriesDb.geners = geners.split(", ");
      seriesDb.geners.sort();
    }
  },
};
