import {
  afib,
  alois,
  ambulance,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  geobyte,
  verato,
  research,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML/Data Engineer",
    icon: web,
  },
  {
    title: "Biomedical Engineer",
    icon: creator,
  }
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
    title: "Undergraduate Research Assistant",
    company_name: "Dynamic Medical Image and Computing Lab",
    icon: research,
    iconBg: "#eee",
    date: "August 2022 - May 2024",
    points: [
      "Research lab focused on automating the process of image segmentation on CT-images of the lung as an alternative imaging modality to current lung tumor diagnosis modalities.",
      "Manually segmented CT-images of the lungs to create training data for the image segmentation model using Matlab.",
      "Used PyTorch and OpenCV to create a deep neural network that can identify where a lung tumor occurs based on segmented CT-scan training data.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Verato",
    icon: verato,
    iconBg: "#eee",
    date: "May 2023 - December 2023",
    points: [
      "Evaluating third-party APIs for geolocation data enrichment in a dataset of 400 million patients’ records, resulting in a 98% fill rate in geolocation data.",
      "Architecting a scalable data processing system that reads and analyzes data from Snowflake, enabling geolocation tagging, proximity calculations using geohexing, and location matching at a rate of ∼700K records per second.",
      "Integrating selected APIs into the existing data infrastructure, resulting in enhanced geospatial insights for patient data.",
      "Compiling data queries from Snowflake queries and creating visualizations in a Python web app using Folium and Streamlit."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: `Geobyte | geobyte.ai`,
    icon: geobyte,
    iconBg: "#000",
    date: "May 2022 - May 2023",
    points: [
      "Developed iOS application that will capture odometry data from Apple device LiDAR scanners to create accurate 3D models of the user’s surroundings.",
      "Generated image segmentation model with PyTorch that will be able to identify people, cars, etc. from the 3D models and remove them to create better 3D maps and promote personal privacy.",
      "Created full-stack service that takes 3D model from AWS, decompresses the model using the Draco protocol, and renders the 3D model on an individual users homepage.",
    ],
  }
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ambulance Tracker",
    description:
      "Mobile application that allows patients in rural India to search and connect with amulance drivers near them, providing an efficient solution for health transportation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ambulance,
    source_code_link: "https://github.com/tannyb28/AmbuTrack",
  },
  {
    name: "Afib Detection",
    description:
      "Deep learning model trained with Keras to classify ECG data as normal, atrial fibrillation, noisy, or other.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "kerasapi",
        color: "pink-text-gradient",
      },
    ],
    image: afib,
    source_code_link: "https://github.com/tannyb28/afib",
  },
  {
    name: "Alzheimer's Care App",
    description:
      "A social media platform designed to give caretakers of Alzheimer's patients a community and resource hub to properly take care of their loved ones.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: alois,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };