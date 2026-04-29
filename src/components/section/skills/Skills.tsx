import type { SkillGroup } from "../../../types/common.types";
import { SkillCategory } from "../skill-category/SkillCategory";

interface SkillsProps {
    skills: SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
    return (
        <div className="flex-1 text-center md:text-left">
            <h1>Habilidades</h1>
            <div className="mt-4 flex flex-col gap-6 font-light">
                {skills.map((skill) => (
                    <SkillCategory key={skill.type} skill={skill} />
                ))}
            </div>
        </div>
    );
}
