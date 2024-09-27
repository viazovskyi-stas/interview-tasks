/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
// hour hand
// 12h = 360deg
// 1h = 30deg
// 1m = 1/2deg
//minute hand
// 60min = 360deg
// 1min = 5deg
// formula hour (30H + 1/2m)
// formula min 6*M
//  angle
//  (30H +1/2m) - 6m === 30H - 11/2m
var angleClock = function (hour, minutes) {
  const angle = Math.abs(30 * hour - (11 / 2) * minutes)
  const angle2 = Math.abs(360 - angle)
  return angle < angle2 ? angle : angle2
}

console.log(angleClock(3, 30))
