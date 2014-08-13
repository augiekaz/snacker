
//for preloading images
var imagesA = [];

//first ten cards go here
var tempCards = [];

//all cards get preloaded here
var allCards1 = [];

numberPreloaded= 0;

numberWevePushed=0;

//cards in deck
cardTypes=[];

gotFoodTimes = 0;



waitTime = 5000;

 imagesArr=[];


function getFood(){


  $.ajax({
    url:"http://www.snacker.me/cloud/api/foursquare/?action=getFoodPics",
    complete:function(transport){

      
        resp = $.parseJSON(transport.responseText);
        if(resp==null){
          // alert("Please run this from snacker.me or simulator/iPhone to view food nearby");
          return;
        }
      
        for(i in resp){
         
        //  alert('pushed')


         if(gotFoodTimes==0){

          cardTypes=[];
          gotFoodTimes = gotFoodTimes+1;
        }

        imagesA.push(resp[i]['image']);

        if(parseInt(i) <10){
          cardTypes.push({"image": resp[i]['image'], "title":resp[i]['name'], "phoneNumber":resp[i]['phoneNumber'], "link":resp[i]['link']})
    
        }

          
           allCards1.push({"image": resp[i]['image'], "title":resp[i]['name'], "phoneNumber":resp[i]['phoneNumber'], "link":resp[i]['link']})
        }

        preloader(imagesA);
        
    }
  })
}



function getFoodLocation(){

  
  $.ajax({
    url:"http://www.snacker.me/cloud/api/foursquare/?action=getFoodPics&lat="+ userPosition[0]+ "&lon="+userPosition[1],
    complete:function(transport){

      
        resp = $.parseJSON(transport.responseText);
        if(resp==null){
          // alert("Please run this from snacker.me or simulator/iPhone to view food nearby");
          return;
        }

        if(gotFoodTimes==0){

        cardTypes=[];
        gotFoodTimes = gotFoodTimes+1;
        }

       //cardTypes=[];
        for(i in resp){
         
        //  alert('pushed')


        imagesA.push(resp[i]['image']);

        if(parseInt(i) <10){
          cardTypes.push({"image": resp[i]['image'], "title":resp[i]['name'], "phoneNumber":resp[i]['phoneNumber'], "link":resp[i]['link']})
    
        }

          
           allCards1.push({"image": resp[i]['image'], "title":resp[i]['name'], "phoneNumber":resp[i]['phoneNumber'], "link":resp[i]['link']})
        }

        preloader(imagesA);
        
    }
  })
}


function preloader(allImages) {

  topCounter= 0;
 

  preloadASet();


  for (i in allImages){

    //for every ten cards run the 10 card preloader
    if(topCounter >= 10){

      topCounter=0;
      setTimeout(function(){
      preloadASet();


    }, waitTime);

      waitTime = waitTime +2000;
    }
   
    

    topCounter = topCounter+1;
  }
 

 
}


function preloadASet(){

  //alert("preloading " +numberPreloaded + "thru "+  (numberPreloaded+10))

  amountOfFood =  imagesA.length-3;
   for(i=numberPreloaded; i<(numberPreloaded+10); i++){


    if(numberWevePushed>= amountOfFood){
      return;
    }

    imgSrcString = imagesA[numberWevePushed];
    imagesA[numberWevePushed]= new Image();
   imagesA[numberWevePushed].src= imgSrcString;

    //alert("preloaded "+ imagesA[numberPreloaded])
    //add to deck
    //alert(allCards1[numberPreloaded]['image']);
   cardTypes.push(allCards1[numberWevePushed]);
   numberWevePushed= numberWevePushed+1;

    

  }

  numberPreloaded= numberPreloaded+10;



}


function isInt(value) {
  return !isNaN(value) && 
          parseInt(Number(value)) == value && 
          (value + "").replace(/ /g,'') !== "";
}


$(window).load(function(){

  $('#contain').click(function(){

    $('#ifr').remove();
  })
})



function genPage(){
url = $('#siteUrl').attr('site');
//alert(url);
  r = $("<div />").attr("id", 'ifr').css({"z-index":"500000", "height": "60%", position:"fixed", "top":"20%", "width":"100%", "background-color":"white", 'overflow-y':'auto','-webkit-overflow-scrolling':'touch'}).html("<br><div id='loadingMsg'><center>Loading "+url+"...</center></div><iframe src='"+url+"' style='width:100%; height:100%; overflow:scroll; z-index:400000'></iframe>").appendTo('html');
  setTimeout(function(){

    $('#loadingMsg').hide();
  }, 15000)

}
/*


 setTimeout(function(){

      cardTypes = allCards1;

  }, 10000)
*/
cardTypes=[];


// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngTouch', 'ionic.contrib.ui.cards'])




.config(function($stateProvider, $urlRouterProvider) {



  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/",
      templateUrl: "templates/home.html"
    })

    .state('tab2', {
      url: "/about",
      templateUrl: "templates/about.html"
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})


.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate, $location) {
  cardTypes = [
    { title: 'Loading  food pics...', image: 'img/pic.png', phoneNumber:"9175249962", link:"http://snacker.me" },
    { title: 'Loading  food pics...', image: 'img/pic.png', phoneNumber:"9175249962", link:"http://snacker.me" },
    { title: 'Loading  food pics...', image: 'img/pic2.png', phoneNumber:"9175249962", link:"http://snacker.me"  },
    { title: 'Loading food pics...', image: 'img/pic3.png', phoneNumber:"9175249962", link:"http://snacker.me"  },
    { title: 'Loading food pics...', image: 'img/pic4.png' , phoneNumber:"9175249962", link:"http://snacker.me"}
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }


  $scope.goToNewRoom = function() {
    $location.path('/about');
    $scope.toggleSideMenu();
  };
  
  $scope.goToAbout = function() {
    $location.path('/about');
    $scope.toggleSideMenu();
  };
  
  $scope.goToHome = function() {
    $location.path('/home');
  };  
    
  $scope.toggleSideMenu = function() {
    $scope.sideMenuController.toggleLeft();
  };


})




.controller('CardsCtrl2', function($scope, $ionicSwipeCardDelegate, $location) {
 
    
  $scope.toggleSideMenu = function() {
    $scope.sideMenuController.toggleLeft();
  };


})

.controller('AppCtrl', function($scope, $location) {
 
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
});
