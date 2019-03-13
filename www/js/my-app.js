// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

//invoke convert function to display the live rate
function convert(){
// "convert" endpoint - convert any amount from one currency to another
// using real-time exchange rates

//declaration of variables to make an HTTP request
var apikey = '033bd71ee6e561787d172fcccb6f9e64';
var api_url = 'http://apilayer.net/api/live';
var fromcurrancy='USD';

//declaration of variable url to access the currancylayer data
var request_url = api_url
  + '?'
  + 'access_key=' +encodeURIComponent(apikey)
  +'&currancies='+encodeURIComponent(fromcurrancy)
  +'&format=1';

var request = new XMLHttpRequest();
request.open('GET', request_url, true);

request.onload = function() {

  if (request.status == 200){ 
    // in case of Success!
    var data = JSON.parse(request.responseText);
    
    //check data in our console
    console.log(data);
    console.log("your rate is from USD to EUR");
    console.log(data.quotes.USDEUR);


    //print the data in my application
    //live rate from USD to EUR
    document.getElementById('rateUSDEUR').innerHTML=data.quotes.USDEUR;

    //live rate from EUR to USD
    var convertEURUSD=1/data.quotes.USDEUR;
    document.getElementById('rateEURUSD').innerHTML=convertEURUSD;


} else if (request.status <= 500){ 
    // We reached our target server, but it returned an error                         
      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log(data.status.message);
    } else {
      console.log("server error");
    }
  }

  request.onerror = function() {
      // There was a connection error of some sort
      console.log("unable to connect to server");        
  };
  request.send();
}

//invoke toUSD function to display the convertion of money from Euros to Dollars
function toUSD(){

//declaration of variables to make an HTTP request
var apikey = '033bd71ee6e561787d172fcccb6f9e64';
var api_url = 'http://apilayer.net/api/live';
var fromcurrancy='USD';

//declaration of variable url to access the currancylayer data
var request_url = api_url
  + '?'
  + 'access_key=' +encodeURIComponent(apikey)
  +'&currancies='+encodeURIComponent(fromcurrancy)
  +'&format=1';


var request = new XMLHttpRequest();
request.open('GET', request_url, true);

request.onload = function() {


  if (request.status == 200){ 
    // in case of Success!
    var data = JSON.parse(request.responseText);
    //alert(data.results[0].formatted);
    var numberfrom=+document.getElementById('number').value;
    document.getElementById('result').innerHTML=(1/data.quotes.USDEUR)*numberfrom +' dollars';


} else if (request.status <= 500){ 
    // We reached our target server, but it returned an error
                           
      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log(data.status.message);
    } else {
      console.log("server error");
    }
  }

  request.onerror = function() {
      // There was a connection error of some sort
      console.log("unable to connect to server");        
  };
  request.send();


}

//invoke toUSD function to display the convertion of money from Dollars to Euros
function toEUR(){

    //declaration of variables to make an HTTP request
    var apikey = '033bd71ee6e561787d172fcccb6f9e64';
    var api_url = 'http://apilayer.net/api/live';
    var fromcurrancy='USD';
    
    //declaration of variable url to access the currancylayer data
    var request_url = api_url
      + '?'
      + 'access_key=' +encodeURIComponent(apikey)
      +'&currancies='+encodeURIComponent(fromcurrancy)
      +'&format=1';
    
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    
    request.onload = function() {
    
      if (request.status == 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        //alert(data.results[0].formatted);
        var numberfrom=+document.getElementById('number').value;
        document.getElementById('result').innerHTML=(data.quotes.USDEUR)*numberfrom+' euros';
    
    
    } else if (request.status <= 500){ 
        // We reached our target server, but it returned an error
                               
          console.log("unable to geocode! Response code: " + request.status);
          var data = JSON.parse(request.responseText);
          console.log(data.status.message);
        } else {
          console.log("server error");
        }
      }
    
      request.onerror = function() {
          // There was a connection error of some sort
          console.log("unable to connect to server");        
      };
      request.send();
    
    
    }
