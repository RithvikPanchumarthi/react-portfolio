import React from 'react';
import { Cloud, Database, BarChart3, Code, Award, MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Cloud & Data Platforms",
      icon: <Cloud className="w-6 h-6" />,
      items: ["Azure (Data Factory, Synapse, Databricks)", "Snowflake", "GCP (BigQuery, Cloud Storage)", "AWS S3"]
    },
    {
      category: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      items: ["ETL/ELT Pipelines", "Apache Spark", "Data Modeling", "Apache Airflow", "dbt"]
    },
    {
      category: "Analytics & Programming",
      icon: <Code className="w-6 h-6" />,
      items: ["SQL (Advanced)", "Python", "Statistical Analysis", "Data Validation"]
    },
    {
      category: "Visualization & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Power BI", "Tableau", "Excel (Advanced)", "Jupyter Notebooks"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Data & Analytics Engineering",
      description: "End-to-end data solutions from pipeline engineering to analytical insights"
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary-600" />,
      title: "Cloud Architecture Expertise",
      description: "Azure certified with hands-on experience in Snowflake, GCP, and multi-cloud solutions"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      title: "Performance Optimization",
      description: "Delivered 30% efficiency improvements and 25% query performance enhancements"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable business insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                I'm a <span className="text-primary-600 font-semibold">Data and Analytics Engineer</span> with 
                expertise in designing scalable data solutions and transforming complex datasets into 
                actionable business insights.
              </p>
              
              <p className="leading-relaxed mb-6">
                With hands-on experience across the full data lifecycle, I specialize in building robust 
                ETL/ELT pipelines, optimizing cloud architectures, and creating analytics-ready datasets 
                that drive strategic decision-making. My technical foundation spans cloud platforms including 
                Azure, Snowflake, and GCP, combined with strong analytical skills in SQL, Python, and 
                visualization tools.
              </p>
              
              <p className="leading-relaxed mb-8">
                I've successfully delivered end-to-end data solutions that improved processing efficiency 
                by 30%, reduced query latency by 25%, and enhanced stakeholder engagement through intuitive 
                dashboards and reports. Currently pursuing opportunities where I can leverage both my 
                engineering expertise and analytical acumen to solve complex business challenges.
              </p>
            </div>

            {/* Location & Contact */}
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span>Minneapolis, MN, USA (Open to Relocation)</span>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technical Expertise
            </h3>
            
            {skills.map((skillGroup, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                    {skillGroup.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Skills Matrix */}
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Proficiency Levels</h4>
              <div className="space-y-3">
                {[
                  { skill: 'Data Engineering & ETL', level: 95 },
                  { skill: 'SQL & Data Analysis', level: 95 },
                  { skill: 'Cloud Platforms (Azure/Snowflake)', level: 90 },
                  { skill: 'Business Intelligence & Visualization', level: 85 },
                  { skill: 'Big Data & Performance Optimization', level: 85 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
