import { Button } from "eclipse-components";

import img_1 from "../../assets/img/headshots/1_headshot.jpeg";
import img_2 from "../../assets/img/headshots/2_headshot.jpeg";
import img_3 from "../../assets/img/headshots/3_headshot.jpeg";
import img_4 from "../../assets/img/headshots/4_headshot.png";
import img_5 from "../../assets/img/headshots/5_headshot.jpeg";
import img_6 from "../../assets/img/headshots/6_headshot.jpeg";
import img_7 from "../../assets/img/headshots/7_headshot.jpeg";
import img_8 from "../../assets/img/headshots/8_headshot.jpeg";
import img_9 from "../../assets/img/headshots/9_headshot.jpeg";
import img_10 from "../../assets/img/headshots/10_headshot.jpg";
import img_11 from "../../assets/img/headshots/11_headshot.jpg";
import img_12 from "../../assets/img/headshots/12_headshot.jpg";
import img_14 from "../../assets/img/headshots/14_headshot.jpeg";
import img_15 from "../../assets/img/headshots/15_headshot.jpg";
import img_16 from "../../assets/img/headshots/16_headshot.jpg";
import img_17 from "../../assets/img/headshots/17_headshot.jpeg";
import img_18 from "../../assets/img/headshots/18_headshot.jpg";
import img_19 from "../../assets/img/headshots/19_headshot.jpg";
import img_20 from "../../assets/img/headshots/20_headshot.png";
import img_21 from "../../assets/img/headshots/21_headshot.jpg";
import img_22 from "../../assets/img/headshots/22_headshot.jpeg";
import img_23 from "../../assets/img/headshots/23_headshot.jpg";

const TeamData = [
  ["", img_1, "", img_2, "", img_3, "", ""],
  [img_4, "", img_5, "", img_6, "", img_7, img_8],
  ["", "", img_9, img_10, img_11, "", img_12, ""],
  [img_14, img_15, "", "", img_16, img_17, "", img_18],
  [img_19, "", img_20, img_21, "", "", img_22, img_23],
];

const GradientDirections = [
  "bg-gradient-to-t",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-br",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-l",
  "bg-gradient-to-tl",
];

const GradientColours = [
  "from-yellow-300 to-green-600",
  "from-purple-400 to-red-400",
  "from-blue-400 to-indigo-400",
  "from-pink-400 to-rose-400",
  "from-yellow-400 to-amber-400",
  "from-green-400 to-emerald-400",
  "from-blue-400 to-sky-400",
  "from-purple-400 to-violet-400",
];

const Team = () => {
  return (
    <div
      className={`typography !max-w-[50rem] flex flex-col items-center text-center`}
      id="team"
    >
      <h2>
        Join a <strong>global</strong> team
      </h2>
      <p>
        EclipseExpos is a registered NPO established by youth from over 10
        countries and dozens of cities who have experience managing several of
        the world's largest youth-led organizations.
      </p>
      <div className="my-8">
        {TeamData.map((row, i) => {
          return (
            <div
              className="flex flex-row items-center gap-2 mb-2"
              key={`team-row-${i}`}
            >
              {row.map((member, j) => {
                if (member === "") {
                  return (
                    <div
                      key={`team-row-${i}-member-${j}`}
                      className={`h-16 w-16 brightness-90 hover:brightness-100  transition-all ${
                        GradientDirections[
                          Math.floor(Math.random() * GradientDirections.length)
                        ]
                      } ${
                        GradientColours[
                          Math.floor(Math.random() * GradientColours.length)
                        ]
                      }`}
                    ></div>
                  );
                } else {
                  return (
                    <div key={`team-row-${i}-member-${j}`}>
                      <img
                        src={member}
                        alt={`team-member-${i}-${j}`}
                        className="h-16 w-16 object-cover brightness-90 hover:brightness-100 transition-all"
                      />
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      <p>
        We still have room to grow! We’re expanding our team in all departments,
        including Operations, Tech, Marketing, Production, and Business
        Development. If you think your story fits well with ours, reach out
        using the button below!
      </p>
      <Button
        onClick={() => window.open("mailto:hiring@eclipseexpos.org")}
        className="mt-8"
      >
        Join the team
      </Button>
    </div>
  );
};

export default Team;
