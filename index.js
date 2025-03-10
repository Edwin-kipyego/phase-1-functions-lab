
// Code your solution in this file!
//distance from hq in blocks
function distanceFromHqInBlocks(street) {
    return Math.abs(street-42);
}
//distance from hq in feet
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street)*264;
}
//distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264;
}
//calculates fare prises
function calculatesFarePrice(start, destination) {
    let distance =distanceTravelledInFeet(start, destination);
    if (distance <=400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance-400)* 0.02;
    }
    else if (distance > 2000 && distance <=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
  }