export const projects = [
  {
    id: "online-voting",
    title: "Online Voting Platform",
    description: "Engineered a secure voting system with unique voter-ID verification, strict role separation between voters and administrators, and live election dashboards.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
    features: [
      "Engineered a secure voting system with unique voter-ID verification and strict role separation between voters and administrators.",
      "Guaranteed one-person-one-vote integrity using PostgreSQL transactions, row-level locking, and unique constraints, preventing double voting and race conditions.",
      "Built live election dashboards with Socket.io streaming real-time vote counts, plus password recovery and token-based sessions."
    ],
    githubUrl: "https://github.com/maheshpujari0476/PERNbased-voting-application"
  },
  {
    id: "real-time-chat",
    title: "Real-Time Chat Platform (WhatsApp Web Clone)",
    description: "A type-safe, full-stack messaging application with instant delivery, typing indicators, presence tracking, and secure Argon2 authentication.",
    technologies: ["React 19", "TypeScript", "Node.js", "Express 5", "MongoDB", "Socket.io"],
    features: [
      "Built a type-safe, full-stack messaging app with instant delivery, typing indicators, and online/offline presence using Socket.io.",
      "Secured authentication with Argon2 password hashing and stateless JWTs stored in HTTP-only cookies.",
      "Implemented file and media sharing with Multer and an optimized image-handling pipeline."
    ],
    githubUrl: "https://github.com/maheshpujari0476"
  }
];
