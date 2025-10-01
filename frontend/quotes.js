const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function pickRandomQuote() {
  try {
    const response = await fetch("http://127.0.0.1:3000/");
    const randomObject = await response.json();
    quoteEl.innerText = randomObject.quote;
    authorEl.innerText = randomObject.author;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    quoteEl.innerText = "Could not load a quote...";
    authorEl.innerText = "";
  }
}

window.addEventListener("load", () => {
  pickRandomQuote();
  newQuoteButton.addEventListener("click", pickRandomQuote);
});
