export const experiences = [
  {
    id: "skyllx",
    role: "Associate Software Engineer",
    company: "SkyllX Technologies Pvt. Ltd.",
    period: "Jun 2026 – Present",
    description: "Develop and maintain production ERP applications using Java, Spring Boot, Next.js, React.js, PostgreSQL, MySQL, and microservices architecture.",
    isPrimary: true,
    highlights: [
      "Develop and maintain production ERP applications using Java, Spring Boot, Next.js, React.js, PostgreSQL, MySQL, and microservices architecture.",
      "Design and develop secure REST APIs using Spring Boot and Spring Data JPA for core ERP modules and business workflows.",
      "Implement authentication, authorization, and Role-Based Access Control (RBAC) across student, staff, administrator, and organizational roles.",
      "Design notification workflows supporting Email, WhatsApp, and SMS, including MSG91 integration, template management, DLT template mapping, balance tracking, and delivery workflows.",
      "Develop bulk data migration services for Excel-based student and staff data with validation, structured processing, and error handling.",
      "Implement student and staff transfer workflows between institutes within the same organization while preserving required records and admission mappings.",
      "Implement biometric attendance integration including device enrollment, queued synchronization, device communication, and automatic attendance processing.",
      "Integrate Traccar-based GPS vehicle tracking using vehicle IMEI registration and real-time location data to display bus location, speed, and movement status through map-based interfaces.",
      "Work with PostgreSQL and MySQL databases for application data, production workflows, migrations, and database operations."
    ],
    projectHighlight: {
      title: "BAMS ERP",
      subtitle: "Production ERP Platform",
      technologies: ["Spring Boot", "Next.js", "React.js", "PostgreSQL", "Microservices"],
      description: "Production ERP platform for Ayurvedic institutions with centralized authentication, authorization, RBAC, notification workflows, biometric attendance, and backend integration services.",
      features: [
        "Centralized authentication and authorization",
        "RBAC for students, principals, teachers, staff and administrators",
        "Email/SMS/WhatsApp notification workflows",
        "Configurable notification templates",
        "Biometric attendance (Daily & period-wise)",
        "Multi-device biometric synchronization",
        "Backend APIs and integration workflows"
      ]
    }
  },
  {
    id: "topmai",
    role: "Backend Developer",
    company: "Topmai",
    period: "Previous",
    description: "Developed and maintained backend services using the MERN stack and PostgreSQL.",
    isPrimary: false,
    highlights: [
      "Developed and maintained backend services using Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Designed REST APIs for application modules, data management, authentication, and authorization workflows.",
      "Implemented Role-Based Access Control.",
      "Strengthened backend security through authentication, authorization and protected API routes.",
      "Developed scalable real-time communication modules using Socket.IO for event-driven workflows."
    ]
  }
];
