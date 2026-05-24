const projects = [
  {
    id: 1,
    name: "Scriptorium",
    description: "A full-stack personal knowledge management platform for tracking books, music, movies and podcasts with reflection tools.",
    tech: ["Express", "Node.js", "MongoDB", "Three.js", "EJS", "JavaScript", "Blender"],
    link: "https://scriptorium-frontend.vercel.app/",
    github: ["https://github.com/Nerdy-Babushkas/scriptorium-frontend", "https://github.com/Nerdy-Babushkas/scriptorium-backend"],
    featured: true
  },
  {
    id: 2,
    name: "Scriptorium E2E Test Suite",
    description: "An end-to-end test suite for Scriptorium — a full-stack media tracking platform. Built with Playwright and the Page Object Model (POM) design pattern, covering four core user flows across the application.",
    tech: ["Playwright", "Node.js", "JavaScript"],
    link: null,
    github: "https://github.com/Nerdy-Babushkas/scriptorium-tests",
    featured: true
  },
  {
    id: 3,
    name: "E-Commerce Test Automation",
    description: "A scalable, production-grade test automation framework built with Robot Framework and SeleniumLibrary for a live e-commerce web application — TesterBud Practice E-Commerce.",
    tech: ["Robot Framework", "Python", "Selenium Library", "Github Actions"],
    link: null,
    github: "https://github.com/Nerdy-Babushkas/scriptorium-tests",
    featured: true
  },
  {
    id: 4,
    name: "Fragments",
    description: "A production-grade cloud microservice for storing, retrieving, and converting user content fragments — built with Node.js and deployed to AWS Elastic Container Service (ECS) via a fully automated CI/CD pipeline.",
    tech: ["Node.js", "Express", "AWS - ECS, S3, DynamoDB", "Docker", "Github Actions", "Jest"],
    link: null,
    github: "https://github.com/PranjalSurjan/fragments",
    featured: true
  },
  {
    id: 5,
    name: "Fragments UI",
    description: "A lightweight front-end web application for interacting with the Fragments Microservice — supporting full CRUD operations, image uploads, type conversions, and live analytics for authenticated users.",
    tech: ["JavaScript", "Parcel", "AWS - Cognito Auth, ECS Connected"],
    link: null,
    github: "https://github.com/PranjalSurjan/fragments-ui",
    featured: true
  },
  {
    id: 6,
    name: "Self-Driving Car Steering Prediction ",
    description: "A deep learning pipeline to predict steering angles for autonomous driving using the Udacity Self-Driving Car Simulator. A convolutional neural network (NVIDIA architecture) learns to steer the car based on camera images collected during driving.",
    tech: ["Python", "Tensorflow", "Keras", "OpenCV"],
    link: null,
    github: "https://github.com/PranjalSurjan/Car_Steering_Prediction",
    featured: true
  },

  {
    id: 7,
    name: "Mobile Apps - Android & iOS",
    description: "",
    tech: ["Kotlin", "Swift", "SwiftUI"],
    link: null,
    github: null,
    featured: true
  },
  {
    id: 8,
    name: "Hotel Booking Kiosk",
    description: "",
    tech: ["Java"],
    link: null,
    github: null,
    featured: true
  }
]

export default projects