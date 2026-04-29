type SkillLevelProps = {
    level: number;
    max?: number;
};

export function SkillLevel({ level, max = 5 }: SkillLevelProps) {
    const circles = [...Array(level).fill(true), ...Array(max - level).fill(false)].reverse();

    return (
        <div className="flex gap-2">
            {circles.map((filled, index) => (
                <span
                    key={index}
                    className={`h-6 w-6 rounded-full border-2 ${
                        filled ? "bg-chart-1 border-chart-1" : "border-chart-1"
                    }`}
                />
            ))}
        </div>
    );
}
