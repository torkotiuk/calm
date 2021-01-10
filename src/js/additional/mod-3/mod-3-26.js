// 26 - Паттерн «Объект настроек»
// Theory
console.log('Паттерн «Объект настроек»');
function calculateMeanTemperature(forecast) {
  // One place for short variables, it's a good short ones like 'todayLow':)
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // too long variables to use after like 'forecast.today.low':(
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  }),
);
