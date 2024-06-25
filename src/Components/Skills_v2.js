import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../assets/css/Skills.css'; // Import the CSS file

// Import icons for skills (these are examples, replace them with actual icons)
import JiraIcon from '../assets/icons/jira.png';
import PostmanIcon from '../assets/icons/postman.png';
import ReactIcon from '../assets/icons/react.png';
import ServerlessIcon from '../assets/icons/serverless.png';
import FlaskIcon from '../assets/icons/flask.png';
import WordIcon from '../assets/icons/word.png';
import ExcelIcon from '../assets/icons/excel.png';
import LatexIcon from '../assets/icons/latex.png';
import OverleafIcon from '../assets/icons/overleaf.png';
import DrawioIcon from '../assets/icons/drawio.png';
import JavaIcon from '../assets/icons/java.png';
import PythonIcon from '../assets/icons/python.png';
import SQLIcon from '../assets/icons/sql.png';
import MySQLIcon from '../assets/icons/MySQL_logo.png';

import MongoDBIcon from '../assets/icons/mongodb.png';
import DynamoDBIcon from '../assets/icons/dynamodb.png';
import HtmlIcon from '../assets/icons/html.png';
import CssIcon from '../assets/icons/css.png';
import JsIcon from '../assets/icons/js.png';
import TsIcon from '../assets/icons/ts.png';


import AWSIcon  from '../assets/icons/aws.png';
import GCPIcon  from '../assets/icons/gcp.png';
import DockerIcon  from '../assets/icons/docker.png';
import K8sIcon  from '../assets/icons/k8s.png';
import TerraformIcon  from '../assets/icons/terraform.png';

export default function Skills_v2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const skillsData = [
    {
      label: "All",
      skills: [
        { name: "AWS", icon: AWSIcon },
        { name: "GCP", icon: GCPIcon },
        { name: "Docker", icon: DockerIcon },
        { name: "K8s", icon: K8sIcon },
        { name: "Terraform", icon: TerraformIcon },
        { name: "Serverless", icon: ServerlessIcon },
        { name: "Flask", icon: FlaskIcon },
        { name: "JIRA", icon: JiraIcon },
        { name: "Postman", icon: PostmanIcon },
        { name: "React.js", icon: ReactIcon },
        { name: "Serverless", icon: ServerlessIcon },
        { name: "Flask", icon: FlaskIcon },
        { name: "Java", icon: JavaIcon },
        { name: "Python", icon: PythonIcon },
        { name: "SQL", icon: SQLIcon },
        { name: "MySQL", icon: MySQLIcon },
        { name: "MongoDB", icon: MongoDBIcon },
        { name: "DynamoDB", icon: DynamoDBIcon },
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "TypeScript", icon: TsIcon },
        { name: "Word", icon: WordIcon },
        { name: "Excel", icon: ExcelIcon },
        { name: "Latex", icon: LatexIcon },
        { name: "Overleaf", icon: OverleafIcon },
        { name: "draw.io", icon: DrawioIcon },
        
      ],
    },
    {
      label: "Cloud",
      skills: [
        { name: "AWS", icon: AWSIcon },
        { name: "GCP", icon: GCPIcon },
      ],
    },
    {
      label: "DevOps",
      skills: [
        { name: "Docker", icon: DockerIcon },
        { name: "K8s", icon: K8sIcon },
        { name: "Terraform", icon: TerraformIcon },
      ],
    },
    {
      label: "Frameworks",
      skills: [
        { name: "React.js", icon: ReactIcon },
        { name: "Serverless", icon: ServerlessIcon },
        { name: "Flask", icon: FlaskIcon },
      ],
    },
    {
      label: "Programming Languages",
      skills: [
        { name: "Java", icon: JavaIcon },
        { name: "Python", icon: PythonIcon },
      ],
    },
    {
      label: "Database Management",
      skills: [
        { name: "SQL", icon: SQLIcon },
        { name: "MySQL", icon: MySQLIcon },
        { name: "MongoDB", icon: MongoDBIcon },
        { name: "DynamoDB", icon: DynamoDBIcon },
      ],
    },
    {
      label: "Web Development",
      skills: [
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "TypeScript", icon: TsIcon },
      ],
    },
    {
      label: "Documentation",
      skills: [
        { name: "Latex", icon: LatexIcon },
        { name: "Overleaf", icon: OverleafIcon },
        { name: "draw.io", icon: DrawioIcon },
        { name: "Word", icon: WordIcon },
        { name: "Excel", icon: ExcelIcon },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered 
          TabIndicatorProps={{
            style: {
              backgroundColor: '#66fcf1',
            },
          }}
          className="custom-tabs"
        >
          {skillsData.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </Tabs>
        <div className="skills-content">
          {skillsData[value].skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
