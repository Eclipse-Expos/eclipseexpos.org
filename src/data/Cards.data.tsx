import one from "../assets/img/cards/one.jpg";
import two from "../assets/img/cards/two.jpg";
import three from "../assets/img/cards/three.png";

interface Card {
  title: string;
  desc: string;
  img: string;
}

export const CardData = [
  {
    title: "Showcases",
    desc: "An exhibition hall showcasing the best of youth-led initiatives from nonprofits and research projects",
    img: one,
  },
  {
    title: "Keynotes",
    desc: "Speeches from both youth and the world's most influential leaders including CEOs, politicians, professors, and more.",
    img: two,
  },
  {
    title: "Workshops",
    desc: "Hands-on workshops to explore new skills including coding, design, and entrepreneurship.",
    img: three,
  },
] as Card[];
