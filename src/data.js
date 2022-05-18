import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiGit,
  DiReact,
  DiNodejs,
  DiBootstrap,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

export const about = {
  me: {
    header: "My name's Le Thai Duc.",
    content: ["I'm from Hanoi, Vietnam"],
  },
  cards: [
    {
      title:
        "I am an open person, always accepting new things to develop. Having a serious attitude, I am willing to accept challenges and learn new things.",
      description: " desc 1",
    },
    {
      title:
        "Although starting this new career quite late, with no work experience, I still believe that I have a lot of ability and determination to develop a great career.",
      description: " desc 2",
    },
    {
      title: "I want to become a full stack developer.",
      description: " desc 3",
    },
  ],
};

export const skills = [
  {
    logo: <DiHtml5 />,
    title: "HTML",
  },
  {
    logo: <DiCss3 />,
    title: "CSS",
  },
  {
    logo: <DiJsBadge />,
    title: "JavaScript",
  },
  {
    logo: <DiReact />,
    title: "ReactJS",
  },
  {
    logo: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    logo: <DiBootstrap />,
    title: "Bootstrap",
  },
  {
    logo: <DiNodejs />,
    title: "NodeJS",
  },
  {
    logo: <DiGit />,
    title: "GIT",
  },
];

export const portfolio = [
  {
    id: 1,
    img: "https://cdn.dribbble.com/users/11819999/screenshots/18278386/media/a39c8d9c31edade06263c51e0c7575b1.png",
    title: "Personal Portfolio",
    desc: "A website introduce myself using ReactJS",
    github: "https://github.com/ltduc11/portfolio-ltd",
    liveDemo: "https://ltduc11.github.io/portfolio-ltd/",
  },
  // {
  //   id: 2,
  //   img: "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
  //   title: "My Portfolio 2",
  //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
  //   github: "http://google.com",
  //   liveDemo: "http://google.com",
  // },
  // {
  //   id: 3,
  //   img: "https://png.pngtree.com/illustrations/20190327/ourmid/pngtree-cure-starry-sky-night-sky-star-png-image_38228.jpg",
  //   title: "My Portfolio 3",
  //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque",
  //   github: "http://google.com",
  //   liveDemo: "http://google.com",
  // },
];
