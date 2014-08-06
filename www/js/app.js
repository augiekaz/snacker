//for preloading images
var imagesA = [];

function getFood(){


  $.ajax({
    url:"http://www.snacker.me/cloud/api/foursquare/?action=getFoodPics",
    complete:function(transport){

      
        resp = $.parseJSON(transport.responseText);
        if(resp==null){
          alert("Please run this from snacker.me or simulator/iPhone to view food nearby");
          return;
        }
       cardTypes=[];
        for(i in resp){
         
        //  alert('pushed')

        imagesA.push(resp[i]['image']);
          cardTypes.push({"image": resp[i]['image'], "title":resp[i]['name'], "phoneNumber":resp[i]['phoneNumber'], "link":resp[i]['link']})
        }

        preloader(imagesA);
        
    }
  })
}


function preloader(allImages) {

  imagesArr=[];


  for(i=0; i<10; i++){

    imagesArr[i]= new Image();
    imagesArr[i].src= allImages[i];

  }

  setTimeout(function(){

     for(i in allImages){

    imagesArr[i]= new Image();
    imagesArr[i].src= allImages[i];

  }

  }, 15000);
 
}

cardTypes=[];
getFood();

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
    { title: 'Loading  food pics...', image: 'img/pic.png', phoneNumber:"9174543393", link:"http://thelink.com" },
    { title: 'Loading  food pics...', image: 'img/pic.png', phoneNumber:"9174543393", link:"http://thelink.com" },
    { title: 'Loading  food pics...', image: 'img/pic2.png', phoneNumber:"9174543393", link:"http://thelink.com"  },
    { title: 'Loading food pics...', image: 'img/pic3.png', phoneNumber:"9174543393", link:"http://thelink.com"  },
    { title: 'Loading food pics...', image: 'img/pic4.png' , phoneNumber:"9174543393", link:"http://thelink.com"}
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
