export const projects = [
    {
      id: "1",
      title: "Tremont Borough Website",
      description: "An informational website for Tremont Borough PA, enhancing accessibility to community resources.",
      longDescription: "Designed and developed a comprehensive website for the Tremont, PA Borough to serve as an information hub for residents and visitors. The site provides easy access to community resources, meeting information, and borough updates.",
      image: "images/projects/tremont_website_img.png", // Add placeholder image if needed
      detailImage: "/images/projects/tremont_website_img.png", // Add placeholder image if needed
      category: ["web", "frontend"],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      featured: true,
      client: "Tremont Borough",
      date: "2024 - Present",
      liveLink: "http://tremontborough.org/",
      codeLink: "", // Add if you have the repo public
      challenge: "The borough needed a modern, accessible online presence to better connect with residents and provide timely information about community resources and events.",
      solution: "I developed a clean, user-friendly website that makes it easy for residents to find the information they need. The site focuses on accessibility and responsive design to ensure all residents can access it from any device.",
      features: [
        "Responsive design for all devices",
        "Meeting documentation and announcements",
        "Organization member information",
        "Community resources directory",
        "Regular content updates"
      ]
    },
    {
      id: "2",
      title: "Custom Command Line Interface",
      description: "A Unix-like shell supporting pipes, redirection, and background processes implemented in C.",
      longDescription: "Developed a custom command line interface as part of my coursework at Temple University. This Unix-like shell supports advanced features such as pipes, input/output redirection, and background process execution.",
      image: "/images/projects/linux_concept_img.png", // Add placeholder image if needed
      detailImage: "/images/projects/linux_concept_img.png", // Add placeholder image if needed
      category: ["software", "system"],
      technologies: ["C", "Linux"],
      featured: true,
      client: "Academic Project",
      date: "2023",
      liveLink: "",
      codeLink: "https://github.com/AndrewOchs/linux-command-line", // Update with actual repo link if public
      challenge: "Implementing a fully functional command line interface that can handle complex operations such as piping commands together and managing background processes.",
      solution: "Leveraged C programming and deep understanding of operating system concepts to build a robust shell that mimics the functionality of standard Unix shells while maintaining clean code architecture.",
      features: [
        "Command execution with arguments",
        "Pipes for connecting output between commands",
        "Input/output redirection",
        "Background process execution",
        "Signal handling"
      ]
    },
    {
      id: "3",
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Vite showcasing my projects and skills.",
      longDescription: "Designed and developed a personal portfolio website to showcase my projects, skills, and professional journey. Built with modern web technologies, this responsive site provides visitors with insights into my work and capabilities.",
      image: "/images/projects/portfolio_website_img.png", // Add placeholder image if needed
      detailImage: "/images/projects/portfolio_website_img.png", // Add placeholder image if needed
      category: ["web", "frontend"],
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      featured: true,
      client: "Personal Project",
      date: "2025",
      liveLink: "", // Add your deployed portfolio URL
      codeLink: "https://github.com/AndrewOchs/web-portfolio", // Update with actual repo link if public
      challenge: "Creating a professional, responsive portfolio that effectively showcases my projects and skills while providing a smooth user experience.",
      solution: "Leveraged React and Vite to build a modern, component-based website with smooth animations and responsive design that works across all devices.",
      features: [
        "Responsive design for all screen sizes",
        "Project showcase with filtering",
        "Skills and experience highlights",
        "Contact form",
        "Modern animations with Framer Motion"
      ]
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions and forecasts with a clean, visual interface.",
      longDescription: "This weather dashboard provides users with current weather conditions and forecasts in a visually appealing, easy-to-understand format. It includes features like location search, detailed weather data, and beautiful visualizations.",
      image: "/images/projects/weather.jpg",
      detailImage: "/images/projects/weather-detail.jpg",
      category: ["web", "frontend"],
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      featured: false,
      client: "Personal Project",
      date: "August 2023",
      liveLink: "https://example.com",
      codeLink: "https://github.com",
      challenge: "Weather data can be complex and overwhelming. I wanted to create an application that presents weather information in a clear, visually appealing way that anyone can understand at a glance.",
      solution: "I built a weather dashboard that combines clean design with powerful functionality. The app fetches data from a weather API and transforms it into easy-to-understand visual elements like icons, charts, and color-coded indicators.",
      features: [
        "Location search with autocomplete",
        "Current conditions display",
        "5-day forecast visualization",
        "Temperature, humidity, wind, and UV index data",
        "Sunrise and sunset times",
        "Responsive design for all devices"
      ]
    },
    {
      id: "5",
      title: "Recipe Finder App",
      description: "A web application that helps users discover recipes based on ingredients they have on hand.",
      longDescription: "This recipe finder application helps users make the most of the ingredients they already have. Users can enter available ingredients, and the app will suggest recipes they can make, along with detailed instructions and nutritional information.",
      image: "/images/projects/recipe.jpg",
      detailImage: "/images/projects/recipe-detail.jpg",
      category: ["web", "frontend"],
      technologies: ["React", "CSS", "Recipe API"],
      featured: false,
      client: "FoodTech Startup",
      date: "October 2023",
      liveLink: "https://example.com",
      codeLink: "https://github.com",
      challenge: "The client wanted to help users reduce food waste and make cooking more accessible by creating an app that suggests recipes based on ingredients users already have in their kitchen.",
      solution: "I developed a recipe finder app that allows users to input available ingredients and discover suitable recipes. The application integrates with a recipe API to provide users with detailed instructions, ingredient lists, and nutritional information.",
      features: [
        "Ingredient-based recipe search",
        "Dietary restriction filters",
        "Detailed cooking instructions",
        "Nutritional information display",
        "Recipe saving functionality",
        "Mobile-friendly design"
      ]
    },
    {
      id: "6",
      title: "Fitness Tracker",
      description: "A mobile-friendly application for tracking workouts, setting fitness goals, and monitoring progress.",
      longDescription: "This fitness tracking application helps users stay on top of their health and fitness goals. It allows for tracking various types of workouts, setting and monitoring goals, and visualizing progress over time with detailed charts and statistics.",
      image: "/images/projects/fitness.jpg",
      detailImage: "/images/projects/fitness-detail.jpg",
      category: ["web", "frontend", "backend"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      featured: false,
      client: "Health & Fitness Brand",
      date: "December 2023",
      liveLink: "https://example.com",
      codeLink: "https://github.com",
      challenge: "The client needed a comprehensive fitness tracking solution that would help their customers track workouts, set goals, and visualize progress in an engaging and motivating way.",
      solution: "I built a fitness tracking application with user authentication, workout logging functionality, goal setting features, and detailed progress visualization using charts and statistics.",
      features: [
        "User account system with profiles",
        "Workout logging with various exercise types",
        "Goal setting and tracking",
        "Progress visualization with charts",
        "Workout history and statistics",
        "Responsive design for mobile use"
      ]
    }
  ];