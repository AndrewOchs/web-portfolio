export const projects = [
    {
      id: "1",
      title: "Tremont Borough Website",
      description: "An informational website for Tremont Borough PA, enhancing accessibility to community resources.",
      longDescription: "Designed and developed a comprehensive website for the Tremont, PA Borough to serve as an information hub for residents and visitors. The site provides easy access to community resources, meeting information, and borough updates.",
      image: "/images/projects/tremont_website_img.png", // Add placeholder image if needed
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
      image: "/images/projects/portfolio_website_img.png", 
      detailImage: "/images/projects/portfolio_website_img.png",
      category: ["web", "frontend"],
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      featured: false,
      client: "Personal Project",
      date: "2025",
      liveLink: "", // Add your deployed portfolio URL
      codeLink: "https://github.com/AndrewOchs/web-portfolio", 
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
      title: "Anomaly Detection Dashboard",
      description: "An interactive dashboard for analyzing time series data and detecting anomalies using multiple statistical methods.",
      longDescription: "Developed a comprehensive anomaly detection application with a web-based interactive dashboard. The application allows users to apply different statistical methods for detecting outliers in time series data, with customizable parameters and real-time visualization.",
      image: "/images/projects/anomaly-detection.png",  
      detailImage: "/images/projects/anomaly-abstract.png", 
      category: ["data-science", "web", "backend"],
      technologies: ["Python", "Dash", "Plotly", "Pandas", "NumPy"],
      featured: true,
      client: "Personal Project",
      date: "2024",
      liveLink: "https://anomaly-detector-rt8r.onrender.com/", 
      codeLink: "https://github.com/AndrewOchs/Anomaly-Detector",
      challenge: "Time series data often contains anomalies that can be difficult to detect manually. I wanted to build a tool that could automatically identify outliers using various statistical approaches, while providing an intuitive interface for adjusting detection parameters.",
      solution: "I developed a modular Python application with statistical algorithms for anomaly detection. The interactive dashboard built with Dash and Plotly allows users to select different detection methods (Z-Score, IQR, Moving Average), adjust parameters via sliders, and visualize results in real-time.",
      features: [
        "Multiple statistical detection algorithms (Z-Score, IQR, Moving Average)",
        "Interactive parameter adjustment via sliders",
        "Real-time visualization of detected anomalies",
        "Synthetic data generation for testing",
        "Modular architecture with separated components",
        "Responsive dashboard design with Bootstrap"
      ]
    }
  ];
    /*
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
  */