// import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const Skills = () => {

//   const skills = {
//     cloud: ["AWS", "GCP", "Azure"],
//     devOps: ["Docker", "Kubernetes", "Terraform"],
//     programmingLanguages: ["JavaScript", "Python", "Java"],
//     frameworks: ["React", "Flask", "SpringBoot"],
//     databaseManagement: ["MySQL", "Oracle DB"],
//     other: ["Git", "Linux"]
//   };

//   return (
//     <section id="skills" className="skills section-bg">
//       <div className="container" data-aos="fade-up">
//         <div className="section-title">
//           <h2>Skills</h2>
//         </div>
//         <div>
//           <Tabs>
//             <TabList>
//               <Tab>Cloud</Tab>
//               <Tab>DevOps</Tab>
//               <Tab>Programming Languages</Tab>
//               <Tab>Frameworks</Tab>
//               <Tab>Database Management</Tab>
//               <Tab>Other</Tab>
//             </TabList>

//             <TabPanel>
//               <ul>
//                 {skills.cloud.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//             <TabPanel>
//               <ul>
//                 {skills.devOps.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//             <TabPanel>
//               <ul>
//                 {skills.programmingLanguages.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//             <TabPanel>
//               <ul>
//                 {skills.frameworks.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//             <TabPanel>
//               <ul>
//                 {skills.databaseManagement.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//             <TabPanel>
//               <ul>
//                 {skills.other.map((skill, i) => (
//                   <li key={i}>{skill}</li>
//                 ))}
//               </ul>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


const Skills = () => {

  const skills = [
    "JavaScript"
  ]

  // const skills = {
  //   cloud: ["AWS", "GCP", "Azure"],
  //   devOps: ["Docker", "Kubernetes", "Terraform"],
  //   programmingLanguages: ["JavaScript", "Python", "Java"],
  //   frameworks: ["React", "Flask", "SpringBoot"],
  //   databaseManagement: ["MySQL", "Oracle DB"],
  //   other: ["Git", "Linux"]
  // };

  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;