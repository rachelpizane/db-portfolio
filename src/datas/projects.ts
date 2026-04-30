import type { Project } from "../types/common.types";

export const projects: Project[] = [
    {
        name: "Biblioteca API",
        description:
            "A aplicação permite o cadastro e gerenciamento de entidades da biblioteca, incluindo controle de disponibilidade de livros e fluxo de aluguéis. Possui implementação de regras de negócio, paginação, filtros em consultas e documentação interativa via Swagger. Conta com testes automatizados (unitários e integração) e execução via Docker.",
        linkGithub: "https://github.com/rachelpizane/biblioteca-api",
        linkDeploy: null,
        src: "/images/projects/biblioteca-api.png",
        createdAt: "2026-03-24",
        technologies: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Docker",
            "Flyway",
            "JUnit",
            "Mockito",
            "JaCoCo",
            "Swagger",
        ],
    },
    {
        name: "Reserva de Salas",
        description:
            "O sistema permite o cadastro de salas e criação de reservas com validações de regras de negócio, como conflito de horários, restrições de período e organização por agenda semanal. Conta com API REST documentada, integração com interface web responsiva e inclui testes automatizados no backend e frontend.",
        linkGithub: "https://github.com/rachelpizane/reserva-sala-api",
        linkDeploy: "https://reserva-sala-app.onrender.com/",
        src: "/images/projects/reserva-sala-app.png",
        createdAt: "2026-04-29",
        technologies: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "Docker",
            "Flyway",
            "Swagger",
            "React",
            "TypeScript",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
        ],
    },
    {
        name: "Mini Mundo Harry Potter",
        description:
            "Aplicação em Java para gerenciamento de bruxos em memória, desenvolvida como projeto de estudo para treinar orientação a objetos e arquitetura em camadas. Utiliza princípios SOLID, inversão de dependência e testes automatizados com JUnit e Mockito.",
        linkGithub: "https://github.com/rachelpizane/mini-mundo-harry-potter",
        linkDeploy: null,
        src: "images/projects/mundo-harry-potter-java.png",
        createdAt: "2026-02-26",
        technologies: ["Java", "Gradle", "JUnit", "Mockito"],
    },
    {
        name: "Dragons",
        description:
            "Sistema em React para gerenciamento de dragões com CRUD completo, autenticação simulada, rotas protegidas e consumo de API mockada, utilizando Context API e React Hook Form.",
        linkGithub: "https://github.com/rachelpizane/dragons-rachelpizane-2026",
        linkDeploy: "https://dragons-rachelpizane-2026.vercel.app/",
        src: "/images/projects/dragons-app.png",
        createdAt: "2026-01-27",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "React Router DOM",
            "Context API",
            "Axios",
            "React Hook Form",
        ],
    },
];
