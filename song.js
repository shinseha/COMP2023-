const songs = [
  {
    quote: "비",
    author: "폴킴",
  },
  {
    quote: "piano man",
    author: "billy joel",
  },
  {
    quote: "손오공",
    author: "세븐틴",
  },
  {
    quote: "함께",
    author: "노을",
  },
  {
    quote: "drive",
    author: "미연",
  },
  {
    quote: "제주도의 푸른 밤",
    author: "태연",
  },
  {
    quote: "weekend",
    author: "태연",
  },
  {
    quote: "i",
    author: "태연",
  },
  {
    quote: "blue moon",
    author: "효린",
  },
  {
    quote: "사계",
    author: "태연",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
Footer