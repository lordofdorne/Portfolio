import React from 'react';
import react from './assets/react.svg'
import Bar from './Bar';

const languages = [
  {
    icon: react,
    name: 'JavaScript',
    level: '90'
  },
  {
    icon: react,
    name: 'Java',
    level: '45'
  },
  {
    icon: react,
    name: 'React',
    level: '85'
  },
  {
    icon: react,
    name: 'Redux',
    level: '80'
  },
  {
    icon: react,
    name: 'Node/Express',
    level: '85'
  },
  {
    icon: react,
    name: 'Swift',
    level: '45'
  }
]

const tools = [
  {
    icon: react,
    name: 'PostgreSQL',
    level: '85'
  },
  {
    icon: react,
    name: 'Firebase',
    level: '60'
  },
  {
    icon: react,
    name: 'Cloud Firestore',
    level: '60'
  },
  {
    icon: react,
    name: 'Sequelize',
    level: '90'
  },
  {
    icon: react,
    name: 'Git',
    level: '90'
  }

]



const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card" >
          <h4 className="resume-card__heading">
            Education
                    </h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Computer Science
                        </h5>
            <p className="resume-card__name">
              CUNY NYC College of Technology 2020
                        </p>
            <div>
              <h5 className="resume-card__title">
                Fullstack Academy
              </h5>
              <p className="resume-card__name">
                Computer Software Engineering 2020
                        </p>

            </div>
          </div>
        </div>
        <div className="col-lg-6 resume-card" >
          <h4 className="resume-card__heading">
            Experience
                    </h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Software Engineering Fellow
                        </h5>
            <p className="resume-card__name">
              Fullstack Academy 2020
                        </p>

          </div>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Teaching Associate
                        </h5>
            <p className="resume-card__name">
              Open House Nursery School 2015
                        </p>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">
            Languages and Frameworks
                    </h5>
          <div className="resume-language__body mt-3">
            {
              languages.map(language =>
                <Bar value={language} />
              )
            }
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">
            Tools and Software
                    </h5>
          <div className="resume-language__body mt-3">
            {
              tools.map(tool => <Bar value={tool} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;