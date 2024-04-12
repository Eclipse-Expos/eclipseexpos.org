// import one from "../assets/img/cards/one.webp";
// import two from "../assets/img/cards/two.webp";
// import three from "../assets/img/cards/three.webp";

interface Card {
  title: string;
  desc: string;
  img: string;
}

export const CardData = [
  {
    title: "Vetrine",
    desc: "che mostrano il meglio delle iniziative guidate dai giovani da parte di organizzazioni non profit e progetti di ricerca.",
    // img: one,
  },
  {
    title: "Discorsi programmatici",
    desc: "di giovani e dei leader più influenti del mondo, tra cui amministratori delegati, politici, e professori.",
    // img: two,
  },
  {
    title: "Workshop",
    desc: "per esplorare nuove competenze tra cui programmazione, design e imprenditorialità.",
    // img: three,
  },
] as Card[];
