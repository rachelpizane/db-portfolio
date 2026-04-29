import type { Profile } from "../types/common.types";

export const profile: Profile = {
    name: "Rachel Pizane",
    position: "Trainee de desenvolvimento de software",
    about: "Desenvolvedora de software em início de carreira, com experiência em projetos sob demanda, atuando principalmente no desenvolvimento back-end. Trabalho na construção de APIs REST com Java e Spring Boot, além da modelagem e manipulação de dados com PostgreSQL e integração com aplicações front-end. \nAtuo com testes automatizados (JUnit e Mockito), versionamento com Git e aplicação de boas práticas como POO e princípios SOLID, sempre buscando qualidade e organização de código. \nMeu objetivo é evoluir como desenvolvedora back-end, assumindo novos desafios que ampliem minha experiência e fortaleçam minha atuação na área, com foco em compreender as soluções de forma aprofundada, indo além da implementação.",
    src: "/images/perfil/perfil.jpg",
    skills: [
        {
            type: "Backend",
            items: [
                {
                    label: "Java",
                    level: 3,
                },
                {
                    label: "Spring Boot",
                    level: 3,
                },
                {
                    label: "JUnit / Mockito",
                    level: 3,
                },
                {
                    label: "PostgreSQL",
                    level: 3,
                },
                {
                    label: "Postman",
                    level: 3,
                },
                {
                    label: "Docker",
                    level: 2,
                },
            ],
        },
        {
            type: "Frontend",
            items: [
                {
                    label: "Angular",
                    level: 3,
                },
                {
                    label: "TypeScript",
                    level: 3,
                },
                {
                    label: "React",
                    level: 2,
                },
                {
                    label: "Tailwind CSS",
                    level: 3,
                },
                {
                    label: "Jasmine / Vitest / Testing Library",
                    level: 2,
                },
            ],
        },
    ],
};
