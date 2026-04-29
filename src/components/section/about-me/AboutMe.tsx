interface AboutMeProps {
    about: string;
}

export function AboutMe({ about }: AboutMeProps) {
    const paragraphs = about.split("\n");

    return (
        <div className="flex-1">
            <div className="max-w-[50ch] text-center md:text-left">
                <h1>Sobre mim</h1>
                <div className="flex flex-col gap-3">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="font-light">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
