/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes=[
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    source:"-Nelson Mandela"
  },
{
    quote:"The way to get started is to quit talking and begin doing.",
    source: "-Walt Disney"
  },
{
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "-Steve Jobs"
  },
{
  quote:"If life were predictable it would cease to be life, and be without flavor.",
  source: "-Eleanor Roosevelt"
},
{
  quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "-Oprah Winfrey"
},
{
  quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  source: "-James Cameron",
},
{
  quote:"Either find a way to succeed or make one.",
  source:"– Suzie Hoyt",
  citation:'Double-Goal Coach® Award Winner',
  year:2017,
}
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  let random=Math.floor(Math.random() * quotes.length);
  for (var i = 0; i < arr.length; i++){
    const randomQuote = arr[random];
    return randomQuote;
  };
}

/***
 * `printQuote` function
***/
function printQuote(){
const value = getRandomQuote(quotes); 
let html='<P class="quotes">randomQuote.quote</p>'+
             '<p class="source">quotes.source'
  for( i=0; i< quotes.length; i++) {
  if (quotes[i].citation==true) {
    html+='<span class="citation">quotes.citation</span>'
  
};

if (quotes[i].year==true) {
  html+='<span class="citation">quotes.year</span>'
  
};
  };

html+='</p>';
document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);