"use client"

import { useState } from "react"

export function Experience (){
    const [activeId,setactiveId] = useState(1)

    const Experience = [
        {
            id:1,
            title : "Frontend Developer",
            year: "Full time",
            company: "Pathlabs",
            Date: "date-to-date",
            description:"Contributed to OptaCut and OptaPlan, manufacturing SaaS platforms serving 200+ clients with cutting optimization and production planning solutions. Built full-stack features spanning React UIs, REST APIs, and database architecture to improve workflow efficiency and system performance."

        },
         {
            id:2,
            title : "Frontend Developer",
            year: "Full time",
            company: "Pathlabs",
            Date: "date-to-date",
            description:"Contributed to OptaCut and OptaPlan, manufacturing SaaS platforms serving 200+ clients with cutting optimization and production planning solutions. Built full-stack features spanning React UIs, REST APIs, and database architecture to improve workflow efficiency and system performance."

        }
    ]

    return (
        <section className="w-full max-w-300 px-5 py-10 flex flex-col items-center ">
            
                <h1>Career journey</h1>
                <h2>Work experience</h2>

                <p>My professional journey across diverse software engineering roles building real-world applications across multiple industries</p>
                {/* experience journey */}

                
                    { Experience.map((exp)=>
                
                    <div className="border border-amber-200 p-2 m-3 w-100 " key={exp.id}>
                        
                    <div className="flex gap-3">
                        <h1>{exp.title}</h1>
                        <h2>{exp.year}</h2>
                        <button className="pointer border border-amber-400" onClick={()=>setactiveId(exp.id)}>click</button>
                    </div>
                    <h2>{exp.company}</h2>
                    <h2>{exp.Date}</h2>
                    <br />

                    <p className={`text-red-400 ${activeId === exp.id ? "visible" : "hidden"}`} >{exp.description}</p>
                        
                    </div>)}
                    
            
        </section>
    )
    
}