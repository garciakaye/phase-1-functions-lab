const BLOCK_DISTANCE_IN_FEET = 264;

function diffInBlocks(start, end = 0){
    return Math.abs(start - end)
}

function distanceFromHqInBlocks(blockNumber){
   const headquartersLocation = 42;
   return diffInBlocks(headquartersLocation, blockNumber)
}

function distanceFromHqInFeet(numberOfBlocks){
    const distanceInBlocks = distanceFromHqInBlocks(numberOfBlocks);
    return distanceInBlocks * BLOCK_DISTANCE_IN_FEET;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
    const distanceDifferenceInBlocks = diffInBlocks(startingBlock, endingBlock); 
    return distanceDifferenceInBlocks * BLOCK_DISTANCE_IN_FEET;

}

function calculatesFarePrice(start, end){
    const distanceTravelled = distanceTravelledInFeet(start, end);
    if(distanceTravelled <= 400){
        return 0
    } else if(distanceTravelled < 2000){
        return Math.abs(distanceTravelled - 400) * 0.02
    } else if(distanceTravelled > 2000 && distanceTravelled < 2500){
        return 25
    }else {
        return 'cannot travel that far'
    }

  
  
  
  //1. calculate distance travelled in feet
//2. After we calculate the distance travelled in feet, if the distance is less than 400 feet, 
  // we don't charge a fee.

    //3. But if the distance travelled is between 400 and 2000 feet, the price is 2 cents per foot

  //4. For a distance over 2000 feet and under 2500 feet, we charge a flat rate

  //5. If distance travelled is over 2500 feet, we can't do it


}

// function proRateAmount(distance, freeAmount, costPerFoot){
//     return Math.abs(distance - freeAmount) * costPerFoot
// }

// function calculatesFarePrice(start, end){
//     //1. calculate distance travelled in feet
//       const distanceTravelled = distanceTravelledInFeet(start, end);

//     const isFree = distanceTravelled <= 400;
//     const isProrated = distanceTravelled < 2000
//     const isFlatRate = !isProrated && distanceTravelled < 2500
//     const isTooFar = distanceTravelled > 2500
    

//     if(isTooFar){
//         return 'cannot travel that far'
//     }

//     if(isFlatRate){
//         return 25
//     }

//     if(isProrated){
//         return proRateAmount(distanceTravelled, 400, 0.02)
//     }

//     return 0
//   }