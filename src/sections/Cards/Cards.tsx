import { CardBody, CardContainer, CardItem } from "../../components/Card/Card";
import one from "../../assets/img/cards/one.jpg";
import two from "../../assets/img/cards/two.jpg";
import three from "../../assets/img/cards/three.png";
import styles from "./Cards.module.scss";

const CardData = [
  {
    title: "Showcases",
    desc: "An exhibition hall showcasing the best of youth-led initiatives from nonprofits and research projects",
    img: one
  },
  {
    title: "Keynotes",
    desc: "Speeches from both youth and the world's most influential leaders including CEOs, politicians, professors, and more.",
    img: two
  },
  {
    title: 'Workshops',
    desc: 'Hands-on workshops to explore new skills including coding, design, and entrepreneurship.',
    img: three
  }
];

const Cards = () => {
  return (
    <div className={`bg-bg ${styles.cards}`}>
      <div className="typography gap-8 py-16 grid grid-cols-1 md:grid-cols-3">
        {CardData.map((card, index) => {
          return (
            <CardContainer key={`card-${index}`} className='h-full'>
              <CardBody className="bg-[#2A2A32] flex flex-col justify-between gap-4 p-4 h-full rounded-md border-[1px] border-solid border-[#404040]">
                <div className='flex flex-col gap-2'>
                  <CardItem translateZ="50">
                    <h3>{card.title}</h3>
                  </CardItem>
                  <CardItem as="p" translateZ="60">
                    {card.desc}
                  </CardItem>
                </div>
                <CardItem translateZ="100" className='w-full h-[10rem]'>
                  <img
                    src={card.img}
                    className="rounded-md object-cover h-full w-full"
                    alt={`card-img-${index}`}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
