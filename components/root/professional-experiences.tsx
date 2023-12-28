interface ExperienceProps {
    title: string;
    description: string;
    employer: string;
    timeFrame: string;
}
export default function ProfessionalExperiences() {

    const experiences: ExperienceProps[] = [
        {
            title: "Web Developer Intern",
            description: "Led the $65M AgTech and climate-smart farming initiative redesign, transforming branding and program structure. Utilized React.js for an inclusive UI. Revamped two organization websites (vista.ucmerced.edu, f3.ucmerced.edu), enhancing functionality, user experience, accessibility, and performance.",
            employer: "CITRIS",
            timeFrame: "January 2023 - August 2023"
        },
        {
            title: "Software Engineer Intern",
            description: "Led frontend design and UI development, crafted efficient database schema and APIs using Python (Flask), SQL, and web technologies. Mentored a team in Git for better collaboration. Delivered a secure database solution for the client's unique datasets, ensuring efficient oversight.",
            employer: "CTTA",
            timeFrame: "January 2023 - May 2023"
        },
        {
            title: "Data Science Intern",
            description: "Created a data visualization web app for analyzing traffic congestion trends, optimized the data wrangling process, and developed a tool to aid officials in traffic-related policy-making",
            employer: "San Francisco International Airport",
            timeFrame: "Jun 2022 - Aug 2022"
        }
    ]

    return(
        <div className="w-5/6 py-8">
            {
                experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col sm:flex-row mt-6">
                        <div className="flex-grow-0 flex-shrink-0 p-2 w-[300px]">
                            <p className="text-lg font-bold">{experience.title}</p>
                            <p className="font-extralight">{experience.employer}</p>
                            <p className="font-extralight">{experience.timeFrame}</p>
                        </div>
                        <div className="flex-grow p-2">
                            {experience.description}
                        </div>
                    </div>
                ))
            }
        </div>
    );

}