export const experiences = [
  {
    id: "skyllx",
    role: "Backend Developer (Node.js)",
    company: "SkyllX Technologies Pvt. Ltd.",
    client: "Topmai, Mexico",
    technologies: ["Node.js", "Express.js", "MySQL", "Redis", "Socket.io", "Sequelize", "JWT", "Argon2"],
    period: "Jun 2026 – Present",
    description: "Modernizing legacy production services, implementing high-security credential migrations, and engineering real-time messaging architecture for an international client.",
    isPrimary: true,
    highlights: [
      "Modernized a large legacy Node.js/Express codebase by refactoring procedural, callback-based code into modular ES6+ async/await with standardized error handling and REST status codes.",
      "Designed a zero-downtime credential migration that re-hashed legacy SHA-1 passwords to Argon2id at login, with no service disruption and no forced password resets.",
      "Implemented RBAC and strengthened JWT security with issuer/audience verification and Redis-backed rate limiting, while keeping older mobile app versions compatible.",
      "Built threaded message replies for direct and group chat using Sequelize with optimized SQL joins, encrypted payload handling, and real-time Socket.io events; worked directly with an international team to fix production issues and deliver client requirements."
    ]
  }
];
