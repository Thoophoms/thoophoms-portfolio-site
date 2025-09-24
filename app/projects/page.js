import { headers } from "next/headers";
import Image from "next/image";
import Hero from "../components/Hero";

async function getProjects() {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
  const query = `query GetProjects {
    projects {
      nodes {
        title,
        projectDetails {
          fieldGroupName
          projectDescription
          completionDate
          projectUrl
          sourceCode
          projectImage {
    node {
      sourceUrl
    }
  }
        },
      }
    }
  }`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }

  const response = await fetch(apiUrl, options);
  const json = await response.json();
  console.log("Full response from Wordpress: ", json)
  return json.data.projects

}

export default async function Home() {
  const allProjects = await getProjects();
  console.log(allProjects)
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-h-7xl mx-auto px-4"> {/* <= constrain & center */}
      <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-12 text-center">My Portfolio</h1>
      {allProjects.nodes.map((project) => (

        <div key={project.title} className="flex border rounded-lg p-6 shadow-lg mt-4 mb-4 items-center p-4">

          <div className="w-2/5">
            <Image src={project.projectDetails.projectImage.node.sourceUrl} alt={project.title} width={800} height={800}></Image>
          </div>

          <div className="w-3/5 pl-10 flex flex-col gap-2 justify-center">
            <h2 className="text-xl font-bold">
              {project.title}
            </h2>

            <p className="text-gray-400">{project.projectDetails.projectDescription}</p>

            <div>
              <a href={project.projectDetails.projectUrl} className="text-blue-500 hover:underline mr-4" target="_blank" rel="noopener noreferrer">
                View Project
              </a>


              <a href={project.projectDetails.sourceCode} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Source Code on GitHub
              </a>

            </div>
          </div>
        </div>

      ))}
  </div>
    </main>
  );
  
};