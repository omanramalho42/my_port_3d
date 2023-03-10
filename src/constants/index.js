import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  nft,
  amazon,
  uber,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  agym,
  greendot,
  mobigap,
  vhg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js | React Native | Node Js Fullstack Developer",
    company_name: "Greendot Hub",
    icon: greendot,
    iconBg: "#383E56",
    date: "Mar 2020 - Jun 2020",
    points: [
      "Desenvolvimento e manutenção de aplicativos da web usando React.js e outras tecnologias relacionadas.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores para criar produtos de alta qualidade.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "React JS Frontend Developer",
    company_name: "Mobigap",
    icon: mobigap,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Out 2021",
    points: [
      "Desenvolvimento e manutenção de aplicativos da web usando React.js",
      "Otimização de algoritmos capazes de melhorar a performance do site afim de evitar o uso de libs desnecessárias",
      "Código limpo de fácil entendimento e fácil manutenabilidade.",
    ],
  },
  {
    title: "React Js | Node js Fullstack Developer",
    company_name: "VHG Soluões",
    icon: vhg,
    iconBg: "#383E56",
    date: "Jan 2022 - Set 2022",
    points: [
      "Desenvolvimento e manutenção de aplicativos da web usando React.js e Node js.",
      "Projeto de sistema de gestão de divídas de clientes.",
      "Implementação relacionada a Api`s Rest Full e Soap.",
      "Boas práticas de programação e código bem estruturado.",
    ],
  },
  {
    title: "PHP | MYSQL | JAVASCRIPT Fullstack Developer",
    company_name: "Agym Care",
    icon: agym,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Cargo atual",
    points: [
      "Desenvolvimento e manutenção de aplicativos da web usando PHP, Mysql, Javascript, Jquery.",
      "Projeto de sistema de gestão de treino para idosos.",
      "Entrega dentro do prazo conforme a prototipação.",
      "Boa comunicação e transparência no desenvolvimento com acompanhamento do projeto em tempo real.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eu pensei que era impossível fazer um site tão bonito quanto o nosso produto, mas Oman provou que eu estava errado.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Greendot Hub",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor da Web que realmente se preocupasse com o sucesso de seus clientes como Oman.",
    name: "Kaneson",
    designation: "COO",
    company: "Mobigap World",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que Oman otimizou nosso site, nosso tráfego aumentou 50%. Não podemos agradecê-los o suficiente!",
    name: "Nickollas",
    designation: "CTO",
    company: "VHG Soluões",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nft Market Place BlockChain",
    description:
      "Um comércios online de artes nfts usando tecnologias descentralizadas, inspirado no opensea Block chain. Compra e venda de artes digitais",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Third Web",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/omanramalho42/opensea-blockchain-clone",
  },
  {
    name: "Ecommerce Inspirado na Amazon",
    description:
      "Um ecommerce totalmente funcional com backend próprio, tela de dashboard para admin para acompanhar as vendas e resultados diários de alcance além de fornecer um gerenciamento fácil de produtos. Formas de pagamento com cartão incluso.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/omanramalho42/Amazon",
  },
  {
    name: "Uber clone",
    description:
      "Um projeto inspirado no uber clone afim de inspirar mentes criativas e transparecer que qualquer aplicativo de celular hoje é alcançavel. Conta com o acesso ao google mapas e a todos os lugares do mundo além da medição da distância entre um ponto e outro.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: uber,
    source_code_link: "https://github.com/omanramalho42/uber-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
