export const engineeringHighlights = [
  {
    id: "legacy-modernization",
    title: "Legacy Codebase Modernization",
    description: "Refactored a large legacy Node.js/Express production codebase from procedural callbacks into modular ES6+ async/await with standardized error handling and REST status codes.",
    technologies: ["Node.js", "Express.js", "ES6+", "Async/Await", "REST APIs"],
    icon: "Code2"
  },
  {
    id: "zero-downtime-migration",
    title: "Zero-Downtime Password Migration",
    description: "Designed and delivered a zero-downtime password migration re-hashing legacy SHA-1 credentials to Argon2id at login with zero disruption and no forced user resets.",
    technologies: ["Argon2id", "SHA-1", "Cryptography", "Node.js", "Security"],
    icon: "KeyRound"
  },
  {
    id: "jwt-rbac-security",
    title: "RBAC & JWT Security Hardening",
    description: "Implemented RBAC and strengthened JWT security with issuer/audience verification and Redis-backed rate limiting while preserving backwards compatibility with mobile apps.",
    technologies: ["JWT", "Argon2id", "RBAC", "Redis", "Rate Limiting"],
    icon: "ShieldCheck"
  },
  {
    id: "realtime-chat",
    title: "Real-Time Threaded Chat Architecture",
    description: "Engineered threaded message replies for direct and group chat using Sequelize with optimized SQL joins, encrypted payloads, and real-time Socket.io event streaming.",
    technologies: ["Socket.io", "Sequelize ORM", "WebSockets", "MySQL", "Real-Time"],
    icon: "MessageSquare"
  },
  {
    id: "acid-concurrency",
    title: "ACID Transactions & Concurrency Locking",
    description: "Guaranteed one-person-one-vote integrity using PostgreSQL transactions, row-level locking, and unique constraints, preventing double voting and race conditions.",
    technologies: ["PostgreSQL", "ACID Transactions", "Row-Level Locking", "SQL"],
    icon: "Database"
  },
  {
    id: "type-safe-media",
    title: "Type-Safe Full-Stack Media Pipeline",
    description: "Built a type-safe messaging platform with instant delivery, presence tracking, Argon2 cookies, and an optimized media-sharing pipeline powered by Multer.",
    technologies: ["React 19", "TypeScript", "Express 5", "MongoDB", "Multer"],
    icon: "Layers"
  }
];
