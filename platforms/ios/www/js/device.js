

//active watch...
var activeWatch;

userPosition =[40.777225004040009, 73.95218489597806];

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("resume", onDeviceReady, false);
  
     // device APIs are available
    //

   
    function onDeviceReady() {


      setTimeout(function(){
      navigator.splashscreen.hide();

    }, 2000);

       locErrorShown=false;


      //clear old intervals that were running
      //logout();
      //logout();
     // setupWatch(10000);

        if(navigator.network.connection.type== "none"){
              userOffline();
            }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      

      userAgreement="Welcome to Snacker. An app that lets you see delicious food near you. Flip through photos and have fun. Find out where to get the food you like. Below are our terms. Simply, just be nice. Only call restaurants from the app if you want to order food, get info or make a reservation. And be polite! \n \n Snacker\n\nCopyright (c) 2014  Snacker\n\n*** END USER LICENSE AGREEMENT ***\n\nIMPORTANT: PLEASE READ THIS LICENSE CAREFULLY BEFORE USING THIS APPLICATION.\n\n1. LICENSE\n\nBy receiving, opening the file package, and/or using Snacker 1('Software') containing this software, you agree that this End User User License Agreement(EULA) is a legally binding and valid contract and agree to be bound by it. You agree to abide by the intellectual property laws and all of the terms and conditions of this Agreement.\n\nUnless you have a different license agreement signed by Snacker your use of Snacker 1 indicates your acceptance of this license agreement and warranty.\n\nSubject to the terms of this Agreement, Snacker grants to you a limited, non-exclusive, non-transferable license, without right to sub-license, to use Snacker 1 in accordance with this Agreement and any other written agreement with Snacker. Snacker does not transfer the title of Snacker 1 to you; the license granted to you is not a sale. This agreement is a binding legal agreement between Snacker and the purchasers or users of Snacker 1.\n\nIf you do not agree to be bound by this agreement, remove Snacker 1 from your computer now and, if applicable, promptly return to Snacker by mail any copies of Snacker 1 and related documentation and packaging in your possession.\n\n2. DISTRIBUTION\n\nSnacker 1 and the license herein granted shall not be copied, shared, distributed, re-sold, offered for re-sale, transferred or sub-licensed in whole or in part except that you may make one copy for archive purposes only. For information about redistribution of Snacker 1 contact Snacker.\n\n3. USER AGREEMENT\n\n3.1 Use\n\nYour license to use Snacker 1 is limited to the number of licenses purchased by you. You shall not allow others to use, copy or evaluate copies of Snacker 1.\n\n3.2 Use Restrictions\n\nYou shall use Snacker 1 in compliance with all applicable laws and not for any unlawful purpose. Without limiting the foregoing, use, display or distribution of Snacker 1 together with material that is pornographic, racist, vulgar, obscene, defamatory, libelous, abusive, promoting hatred, discriminating or displaying prejudice based on religion, ethnic heritage, race, sexual orientation or age is strictly prohibited.\n\nEach licensed copy of Snacker 1 may be used on one single mobile phone location by one user. Use of Snacker 1 means that you have loaded, installed, or run Snacker 1 on a computer or similar device. If you install Snacker 1 onto a multi-user platform, server or network, each and every individual user of Snacker 1 must be licensed separately.\n\nYou may make one copy of Snacker 1 for backup purposes, providing you only have one copy installed on one computer being used by one person. Other users may not use your copy of Snacker 1 . The assignment, sublicense, networking, sale, or distribution of copies of Snacker 1 are strictly forbidden without the prior written consent of Snacker. It is a violation of this agreement to assign, sell, share, loan, rent, lease, borrow, network or transfer the use of Snacker 1. If any person other than yourself uses Snacker 1 registered in your name, regardless of whether it is at the same time or different times, then this agreement is being violated and you are responsible for that violation!\n\n3.3 Copyright Restriction\n\nThis Software contains copyrighted material, trade secrets and other proprietary material. You shall not, and shall not attempt to, modify, reverse engineer, disassemble or decompile Snacker 1. Nor can you create any derivative works or other works that are based upon or derived from Snacker 1 in whole or in part.\n\nSnacker's name, logo and graphics file that represents Snacker 1 shall not be used in any way to promote products developed with Snacker 1 . Snacker retains sole and exclusive ownership of all right, title and interest in and to Snacker 1 and all Intellectual Property rights relating thereto.\n\nCopyright law and international copyright treaty provisions protect all parts of Snacker 1, products and services. No program, code, part, image, audio sample, or text may be copied or used in any way by the user except as intended within the bounds of the single user program. All rights not expressly granted hereunder are reserved for Snacker.\n\n3.4 Limitation of Responsibility\n\nYou will indemnify, hold harmless, and defend Snacker , its employees, agents and distributors against any and all claims, proceedings, demand and costs resulting from or in any way connected with your use of Snacker's Software.\n\nIn no event (including, without limitation, in the event of negligence) will Snacker , its employees, agents or distributors be liable for any consequential, incidental, indirect, special or punitive damages whatsoever (including, without limitation, damages for loss of profits, loss of use, business interruption, loss of information or data, or pecuniary loss), in connection with or arising out of or related to this Agreement, Snacker 1 or the use or inability to use Snacker 1 or the furnishing, performance or use of any other matters hereunder whether based upon contract, tort or any other theory including negligence.\n\nSnacker's entire liability, without exception, is limited to the customers' reimbursement of the purchase price of the Software (maximum being the lesser of the amount paid by you and the suggested retail price as listed by Snacker ) in exchange for the return of the product, all copies, registration papers and manuals, and all materials that constitute a transfer of license from the customer back to Snacker.\n\n3.5 Warranties\n\nExcept as expressly stated in writing, Snacker makes no representation or warranties in respect of this Software and expressly excludes all other warranties, expressed or implied, oral or written, including, without limitation, any implied warranties of merchantable quality or fitness for a particular purpose.\n\n3.6 Governing Law\n\nThis Agreement shall be governed by the law of the United States applicable therein. You hereby irrevocably attorn and submit to the non-exclusive jurisdiction of the courts of United States therefrom. If any provision shall be considered unlawful, void or otherwise unenforceable, then that provision shall be deemed severable from this License and not affect the validity and enforceability of any other provisions.\n\n3.7 Termination\n\nAny failure to comply with the terms and conditions of this Agreement will result in automatic and immediate termination of this license. Upon termination of this license granted herein for any reason, you agree to immediately cease use of Snacker 1 and destroy all copies of Snacker 1 supplied under this Agreement. The financial obligations incurred by you shall survive the expiration or termination of this license.\n\n4. DISCLAIMER OF WARRANTY\n\nTHIS SOFTWARE AND THE ACCOMPANYING FILES ARE SOLD 'AS IS' AND WITHOUT WARRANTIES AS TO PERFORMANCE OR MERCHANTABILITY OR ANY OTHER WARRANTIES WHETHER EXPRESSED OR IMPLIED. THIS DISCLAIMER CONCERNS ALL FILES GENERATED AND EDITED BY Snacker 1 AS WELL.\n\n5. CONSENT OF USE OF DATA\n\nYou agree that Snacker may collect and use information gathered in any manner as part of the product support services provided to you, if any, related to Snacker 1.Snacker may also use this information to provide notices to you which may be of use or interest to you."

try{
if(localStorage.getItem("agreed")!="true"){

     navigator.notification.alert(
    userAgreement,  // message
    userAgreed,         // callback
    'EULA',            // title
    'I Agree' );


}
}
catch(errrr){

 // console.log('tried eula')
}

      }



   function onSuccess(position) {



//alert(" your location... got it!")
      userPosition=[position.coords.latitude, position.coords.longitude];
      localStorage.setItem("lat", position.coords.latitude );
      localStorage.setItem("lon", position.coords.longitude);
      
    getFoodLocation();
    

     // jGlob.onRefresh();

        var element = document.getElementById('geolocation');
        console.log ( 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />');



    }

    // onError Callback receives a PositionError object
    //
    
    function onError(error) {


      getFood();
    if(locErrorShown==false){
      locErrorShown=true;
               navigator.notification.alert(
        'There was a problem getting your location. We are defaulting you to the Upper East Side of Manhattan in New York City, USA. \n To change this, please visit your phone\'s settings. Find this app in Location, and turn it on.',  // message
        noLocation,         // callback
        'Location Settings',            // title
        'OK'                  // buttonName
        );
    }

   
       // alert('code: '    + error.code    + '\n' +
            //  'message: ' + error.message + '\n');
    }



// sets up the interval at the specified frequency
function setupWatch(freq) {
    // global var here so it can be cleared on logout (or whenever).
    activeWatch = setInterval(watchLocation, freq);
}

// this is what gets called on the interval.
function watchLocation() {
  
    var gcp = navigator.geolocation.getCurrentPosition(
            onSuccess, onError);


    // console.log(gcp);

}


// stop watching

function logout() {
    clearInterval(activeWatch);
}      


function userOffline(){

   navigator.notification.alert(
    'You are not currently connected to the internet. \nPlease connect to use all features of this application.',  // message
    alertDismissed,         // callback
    'Offline',            // title
    'OK'                  // buttonName
);
}

function doNothing(){}


function alertDismissed(){


}
function noLocation(){

}


function deg2rad(deg) {
  return deg * (Math.PI/180)
}


function userAgreed(){

  localStorage.setItem("agreed", "true");
}
