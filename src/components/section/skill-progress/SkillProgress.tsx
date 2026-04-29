import type { SkillItem } from "../../../types/common.types";
import { SkillLevel } from "../skill-level/SkillLevel";

interface SkillProgressProps {
    item: SkillItem;
    testid: string;
}

export function SkillProgress({ item, testid }: SkillProgressProps) {
    return (
        <li className="grid grid-cols-2 font-light" data-testid={testid}>
            <p className="max-w-[20ch] uppercase">{item.label}</p>
            <SkillLevel level={item.level} />
        </li>
    );
}
