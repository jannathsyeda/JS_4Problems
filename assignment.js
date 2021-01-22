//problem.1
console.log("----problem no. 1------")

function kilometerToMeter(kilometer)
{
   var meter= kilometer / 1.6;
   return meter;
}
var result=kilometerToMeter(1200);
console.log(result);


//problem.2
console.log("----problem no. 2------")
function budgetCalculator(w,m,l){
    var watch=50;
    var mobile=100;
    var laptoop=500;
    var totalPrice= watch*w + mobile*m + laptoop*l;
   
 return totalPrice;

}
var w=5;
var m=2;
var l=7;
var result =budgetCalculator(w,m,l);
console.log(result);

//problem.3
console.log("----problem no. 3------")
 //1st 10 days = 100tk per day; 11-20days = 80tk per day; rest of days = 50tk per day
      function hotelCost(days){
        var totalCost;
        if(days <= 10){
          totalCost = days * 100;
        }else if(days <= 20 ){
          var firstTenDayCost = 10*100;
          var restOfTheDay = days - 10;
          var restOfTheDayCost = restOfTheDay * 80;
          totalCost = firstTenDayCost + restOfTheDayCost;
        }else{
          var firstTenDayCost = 10*100;
          var secondTenDayCost = 10*80;
          var restOfTheDay = days - 20;
          var restOfTheDayCost = restOfTheDay * 50;
          totalCost = firstTenDayCost + secondTenDayCost + restOfTheDayCost;
        }

        console.log('Total Cost: '+ totalCost);
      }
       hotelCost(2);
      
//problem.4
console.log("----problem no. 4------")
function megaFriend(myFriends){
    var totalFriends = myFriends.length;
    var highestLengthString = '';
    var highestLength = 0;
    for(var i=0; i<totalFriends; i++){
      if(myFriends[i].length > highestLength){
        highestLengthString = myFriends[i];
        highestLength = myFriends[i].length;
      }
    }
    return highestLengthString;
  }
  var myFriends = ['Halim','Rony', 'Abul', 'Mokbul', 'Aleya', 'Saleha', 'Rukeya'];
  var myResult =  megaFriend(myFriends);
  console.log(myResult);