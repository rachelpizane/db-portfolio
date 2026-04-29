import type { SkillGroup } from "../../../types/common.types";
import { SkillProgress } from "../skill-progress/SkillProgress";

interface SkillCategoryProps {
    skill: SkillGroup;
}

export function SkillCategory({ skill }: SkillCategoryProps) {
    return (
        <div>
            <h5 className="capitalize">{skill.type}</h5>
            <ul className="mt-4 flex flex-col gap-3">
                {skill.items.map((item) => (
                    <SkillProgress
                        key={item.label}
                        item={item}
                        testid={`skill-${skill.type.toLowerCase()}`}
                    />
                ))}
            </ul>
        </div>
    );
}
