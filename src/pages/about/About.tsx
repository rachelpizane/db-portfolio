import { AboutMe, Introduction, Skills } from "../../components";
import { profile } from "../../datas/profile";

export function About() {
    return (
        <section className="w-11/12">
            <Introduction name={profile.name} position={profile.position} src={profile.src} />
            <div className="mt-8 flex flex-col items-center gap-10 md:flex-row md:justify-between">
                <AboutMe about={profile.about} />
                <Skills skills={profile.skills} />
            </div>
        </section>
    );
}
