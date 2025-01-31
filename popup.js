const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do what you can, with what you have, where you are.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "It always seems impossible until it’s done."
];

document.getElementById("generate").addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
});