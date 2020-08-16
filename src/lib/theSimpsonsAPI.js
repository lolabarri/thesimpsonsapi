import axios from "axios";

export const getRandomSimpsonsQuote = () => {
  return axios.get("https://thesimpsonsquoteapi.glitch.me/quotes").then(res=>{
    let quote = res.data[0].quote;
    let character = res.data[0].character;
    let image = res.data[0].image;
    return {quote, character, image};
  })
}