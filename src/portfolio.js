/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rishav Mehta",
  title: "Hi all, I'm Rishav",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/therishavmehta",
  linkedin: "https://www.linkedin.com/in/rishav-mehta/",
  gmail: "rrishav51@gmail.com",
  medium: "https://medium.com/@rishav-mehta",
  stackoverflow: "https://stackoverflow.com/users/15320078/rishav-mehta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sri Jayachamarajendra College of Engineering",
      logo: require("./assets/images/sjceLogo.jpeg"),
      subHeader: "B.E. Computer Science",
      duration: "July 2015 - April 2019",
      desc: "Developed college attendance management app, maintaining college webiste, and JSS Smile booking platform as final year project"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Entropik, Abu Dhabi",
      companylogo: require("./assets/images/entropikLogo.png"),
      date: "Feb 2023 – Present",
      desc: "As a Software Engineer, I developed systems that drove over $3M in pipeline growth by integrating AI technologies into the product. My contributions supported the management of a portfolio exceeding 20 enterprise clients.",
      descBullets: [
        "Led the design and implementation of Qatalyst which generated $3M+ revenue, a user experience research platform, incorporating key features like Prototype Testing(Figma and Sketch platform support), Card Sorting, Multi-task testing.",
        "Architected a tester platform capable of handling over 1M+ users seamlessly, integrating proprietary AI technologies to enable real-time data collection. Ensured a smooth user experience by resolving performance issues through the implementation of Web Workers, and IndexedDB.",
        "Streamlined development by creating reusable modules and implementing a design system, reducing coding time by 60% through efficient use of Chakra UI and Webpack.",
        "Boosted functional test coverage from 30% to 75% in a quarter for Qatalyst and from 0% to 60% for Decode within the same period."
      ]
    },
    {
      role: "Software Engineer II, contract",
      company: "Ninjavan, Singapore",
      companylogo: require("./assets/images/ninjavanLogo.png"),
      date: "Feb 2022 – Jan 2023",
      desc: "Engineered solution for catalyzing SEO, user interaction insights for the product, localizing based on geographical location, enhancing lead generation.",
      descBullets: [
        "Improving SEO score from 50 to 72 by reducing FCP, FP, LCP, reducing bundle size, introducing meta information of different pages based on geographical location, google guidelines and healthcare.",
        "Improve target-based marketing by more than 50% by creating a solution across different geographical location and localizing the content by custom forms, Zapier, and creating the insights on Salesforce.",
        "Loyalty point allotment improved by 20% by improving the point allocation system, referral microservice, implementing rate limiter.",
        "Improving overall product page by 40%, generating visitor insights by tracking customer behavior, creating meaningful queries to create reports and help the team get better insights using mixpanel.",
        "Increasing and maintaining code coverage across products by more than 80%."
      ]
    },
    {
      role: "Software Engineer",
      company: "Capillary Technologies, Bangalore",
      companylogo: require("./assets/images/capillaryLogo.jpg"),
      date: "Feb 2021 – Jan 2022",
      desc: "Re-engineered products for optimizing the solutions, and better customer experience.",
      descBullets: [
        "B2B Loyalty: Improving customer experience and sales improvement of more than 15% after re-engineering the legacy solution, introducing custom loyalty tiers, and creating a dashboard for loyalty B2B services from PHP to React and Nodejs. Maintaining the code quality by improving overall coverage more than 90%.",
        "B2C Loyalty: Enhanced customer experience and achieved sales improvement of more than 8% by re-engineering the legacy solution, introducing user profiles, a points allocation system, and a dashboard for B2C loyalty services, transitioning from PHP to React and Node.js. Maintained high code quality with coverage of more than 85%.",
        "Member Care: Achieved over a 40% improvement in product engagement by re-engineering the customer insights page from PHP to React, enabling users to update their profiles with changes reflected across multiple products. Maintained a code coverage exceeding more than 85%."
      ]
    },
    {
      role: "Software Engineer",
      company: "Nutanix, Bangalore",
      companylogo: require("./assets/images/nutanixLogo.png"),
      date: "July 2019 – Jan 2021",
      desc: "Engineering Product to reduce time complexity across multiple products and help the team become more efficient.",
      descBullets: [
        "LaaS(Licensing as a Service): Reduced the deployment time by 95% and optimizing the load time by 60% by creating a different deployment pipeline by decoupling the legacy app with LaaS.",
        "One-click licensing: Optimising the time for license validation and application from 4mins to less than 20s. Reduced the 3-step process to apply licenses to 1-click operation.",
        "Reduced team time for licensing applications from 4 minutes to under 10 seconds by reverse-engineering the licensing lifecycle, transitioning from manual processes to full automation."
      ]
    },
    {
      role: "Software Engineer - Intern",
      company: "Hashedin by Deloitte, Bangalore",
      companylogo: require("./assets/images/hashedinLogo.png"),
      date: "Jan 2019 – June 2019",
      desc: "Developed feature as part of frontend engineering tream",
      descBullets: [
        "Tenancy Portal: Onboarding time was reduced from 1hr to less than 1 minute by automating the process by creating the dedicated page for the user to onboard new customers, introduced new RBAC system to allocating role-based permissions.",
        "Dashboard: Creating the dashboard for representing the metrics generated for the workspace level."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-567313417 / +91-8660473044",
  email_address: "rrishav51@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
