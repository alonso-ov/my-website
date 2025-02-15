interface ExperienceProps {
    title: string;
    description: string;
    employer: string;
    timeFrame: string;
}
export default function ProfessionalExperiences() {

    const experiences: ExperienceProps[] = [
        {
            title: "SQL Report Developer",
            description: "Design, develop, and maintain reports, databases, dashboards, and stored procedures using SQL Server. Build require infrastructure for optimal extraction, transformation, and loading of various data source. Conduct data analysis to identify trends and insights.",
            employer: "Morning Star Company",
            timeFrame: "December 2024 - Present"
        },
        {
            title: "Engineering and Research Intern",
            description: "Developed and implemented data visualization tools to analyze complex datasets, to enhance operations with data-driven decisions. Effectively communicate with R&D colleagues about production schedules, activities, and issues. Creating, maintaining, organizing, and presenting detailed production records on production volume, product quality, and key performance metrics to drive continuous improvement. Recommended process and equipment improvements to boost efficiency and productivity.",
            employer: "Morning Star Company",
            timeFrame: "July 2024 - November 2024"
        },
        {
            title: "Web Developer Intern",
            description: "Developed and launched a high-performance website for an AgTech initiative using React, showcasing advanced user interface design and problem-solving expertise. Spearheaded project scheduling by creating and managing a detailed Gantt chart, leading weekly progress review meetings with supervisors to provide status updates and proactively address potential roadblocks. Authored comprehensive documentation, including technical specifications and training materials, ensuring effective knowledge transfer and team collaboration.",
            employer: "CITRIS",
            timeFrame: "January 2023 - August 2023"
        },
        {
            title: "Data Science Intern",
            description: "Engineered a web application using Python to visualize real-world traffic congestion data around the airport, offering insightful representations for enhanced weekly analysis. Enhanced data transformation with Python’s Pandas library, achieving a 50% reduction in processing time through efficient vectorization techniques. Utilized Jira for project management, task prioritization, and Agile methodologies, consistently improving project outcomes and delivering high-quality results. Concluded internship with a comprehensive PowerPoint presentation to a diverse staff, effectively communicating the insights and impact of my summer internship work.",
            employer: "San Francisco International Airport",
            timeFrame: "June 2022 - August 2022"
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
