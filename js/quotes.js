const quotes = [
    {quote: "When life gives you lemons, don't make lemonade!",
    author: "Cave Johnson(Protal 2)"},
    {quote: "Sometimes it is the people no one imagine anything of who do the things no on e can imagine.",
    author: "Alan Turing"},
    {quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"},
    {quote: "Every moment is a fresh beginning.",
    author: "T.S. Eliot"},
    {quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"},
    {quote: "고기는 씹을수록 맛이 난다. 그리고 책도 읽을수록 맛이난다. 다시 읽으면서 처음에 지나쳤던 것을 발견하고 새롭게 생각하는 것이다. 말하자면 100번 읽고 100번 익히는 셈이다.",
    author: "세종(조선 제4대 왕)"},
    {quote: "가볍게 움직이지 말라 침착하게 태산같이 무거이 행동하라. 나를 알고 적을 알아야만 백 번 싸워도 위태함이 없다.",
    author: "충무공 이순신"},
    {quote: "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다.",
    author: "도산 안창호"},
    {quote: "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다.",
    author: "안중근 의사"},
    {quote: "돈이 얽힌 일에서 그 사람의 진가를 알 수 있다.",
    author: "???"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = selectedQuote.quote;
author.innerText = `\n-${selectedQuote.author}-`;