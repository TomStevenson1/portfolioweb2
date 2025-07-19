import React from 'react';
import './recommendations.css';
import { Data } from './Data';

const Recommendations = () => {
  return (
    <section className="recommendations container section" id="recommendations">
      <h2 className="section__title">Recommendations</h2>
      <span className="section__subtitle">Professional References</span>
      
      <div className="recommendations__container">
        {Data.map(({ id, name, title, relationship, letter }) => {
          return (
            <div className="recommendations__card" key={id}>
              <div className="recommendations__header">
                <div className="recommendations__info">
                  <h3 className="recommendations__name">{name}</h3>
                  <p className="recommendations__title">{title}</p>
                  <p className="recommendations__relationship">{relationship}</p>
                </div>
              </div>
              
              <div className="recommendations__content">
                <div className="recommendations__letter-content">
                  {letter.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recommendations; 