export const projectData = [
  {
    id: 1,
    title: "FinSight",
    description:
      "AI-powered personal finance dashboard for tracking transactions, managing budgets, and analyzing spending through smart insights.",
    image: "/dashBoard.png",
    tech: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Gemini",
      "Inngest",
      "Shadcn",
      "Recharts",
    ],
    liveUrl: "https://finsight-dashboard-three.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/FinSight-Personal-Financial-Dashboard",
  },
  {
    id: 2,
    title: "SyncUp",
    description:
      "Real-time chat application with private and group messaging, media sharing, typing indicators, and secure authentication.",
    image: "/syncup.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
    liveUrl: "https://syncup-chat-app.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Chat-app",
  },
  {
    id: 3,
    title: "DevBlog",
    description:
      "Full-featured blog platform with markdown support, authentication, comments, and content management.",
    image: "/devblogs.png",
    tech: ["React.js", "Tailwind", "MongoDB", "Node.js", "Express", "JWT"],
    liveUrl: "https://devblog.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Blog-App",
  },
  {
    id: 4,
    title: "Placement Predictor",
    description:
      "Machine learning–based web app that predicts placement outcomes using academic data and performance metrics.",
    image: "/placement-predictor.png",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "HTML", "CSS"],
    liveUrl: "https://placement-predictor.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Placement-Predictor",
  },
];


export const projects = [
  {
    id: 1,
    title: "FinSight",
    description: [
      {
        id: 1,
        title: "Transaction Tracking",
        description:
          "Track income and expenses across accounts with a clear transaction history.",
      },
      {
        id: 2,
        title: "Budget Management",
        description:
          "Create and manage monthly budgets to control and plan spending.",
      },
      {
        id: 3,
        title: "AI Spending Insights",
        description:
          "AI-generated insights highlight spending patterns and unusual activity.",
      },
      {
        id: 4,
        title: "Budget Alerts",
        description:
          "Get alerts when spending approaches or exceeds your budget limits.",
      },
      {
        id: 5,
        title: "Monthly AI Reports",
        description:
          "Monthly financial reports with AI summaries for quick understanding.",
      },
    ],
    image: "/dashBoard.png",
    tech: [
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Tailwind", icon: "/tech/tailwind.svg" },
      { name: "Inngest", icon: "/tech/inngest.svg" },
      { name: "Shadcn", icon: "/tech/shadcn.png" },
    ],
    liveUrl: "https://finsight-dashboard-three.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/FinSight-Personal-Financial-Dashboard",
  },
  {
    id: 2,
    title: "SyncUp",
    description: [
      {
        id: 1,
        title: "Real-time Messaging",
        description:
          "Send and receive messages instantly using WebSocket-based real-time communication.",
      },
      {
        id: 2,
        title: "Private & Group Chats",
        description:
          "Support for one-to-one conversations as well as group chats with multiple participants.",
      },
      {
        id: 3,
        title: "Media Sharing",
        description:
          "Share images and videos securely with optimized uploads and previews.",
      },
      {
        id: 4,
        title: "Typing Indicators",
        description:
          "Live typing indicators improve conversation flow and user experience.",
      },
      {
        id: 5,
        title: "Read & Delivery Status",
        description:
          "Messages show delivery and read status for better communication clarity.",
      },
    ],
    image: "/syncup.png",
    tech: [
      { name: "React", icon: "/tech/react.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express", icon: "/tech/expressjs.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Socket.IO", icon: "/tech/socket.png" },
    ],
    liveUrl: "https://syncup-chat-app.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Chat-app",
  },
  {
    id: 3,
    title: "DevBlog",
    description: [
      {
        id: 1,
        title: "Markdown-Based Writing",
        description:
          "Create and publish blog posts using markdown for a clean and flexible writing experience.",
      },
      {
        id: 2,
        title: "User Authentication",
        description:
          "Secure authentication allows users to manage their own posts and profiles.",
      },
      {
        id: 3,
        title: "Comment System",
        description:
          "Readers can comment on posts, enabling discussion and engagement.",
      },
      {
        id: 4,
        title: "Post Management",
        description:
          "Create, edit, and delete posts with a simple content management workflow.",
      },
      {
        id: 5,
        title: "Responsive Design",
        description:
          "Fully responsive UI optimized for readability across devices.",
      },
    ],
    image: "/devblogs.png",
    tech: [
      { name: "React", icon: "/tech/react.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Express", icon: "/tech/expressjs.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Tailwind", icon: "/tech/tailwind.svg" },
    ],
    liveUrl: "https://devblog.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Blog-App",
  },
  {
    id: 4,
    title: "Placement Predictor",
    description: [
      {
        id: 1,
        title: "Placement Outcome Prediction",
        description:
          "Predicts placement chances based on academic performance and input metrics.",
      },
      {
        id: 2,
        title: "Machine Learning Model",
        description:
          "Uses a trained machine learning model to analyze patterns in historical data.",
      },
      {
        id: 3,
        title: "User Data Input",
        description:
          "Simple input form for entering academic and performance-related details.",
      },
      {
        id: 4,
        title: "Model-Based Insights",
        description:
          "Displays prediction results with probability-based outcomes.",
      },
      {
        id: 5,
        title: "Web-Based Interface",
        description:
          "Accessible web interface for interacting with the model and viewing results.",
      },
    ],
    image: "/placement-predictor.png",
    tech: [
      { name: "Python", icon: "/tech/python.svg" },
      { name: "Pandas", icon: "/tech/pandas.svg" },
      { name: "NumPy", icon: "/tech/numpy.svg" },
      { name: "EJS", icon: "/tech/ejs.jpg" },
      {name: "Node.js", icon: "/tech/nodejs.svg"},
      {name: "Express.js", icon: "/tech/expressjs.svg"},
      {name: "MongoDB", icon: "/tech/mongodb.svg"},
    ],
    liveUrl: "https://placement-predictor.vercel.app/",
    githubUrl: "https://github.com/Himanshuazad03/Placement-Predictor",
  },
];
