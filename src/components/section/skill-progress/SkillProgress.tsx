import type { SkillItem } from "../../../types/common.types";
import { SkillLevel } from "../skill-level/SkillLevel";

interface SkillProgressProps {
    item: SkillItem;
}

export function SkillProgress({ item }: SkillProgressProps) {
    return (
        <li className="grid grid-cols-2 font-light">
            <p className="uppercase">{item.label}</p>
            <SkillLevel level={item.level} />
        </li>
    );
}
