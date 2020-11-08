import React from 'react';
// import './Statistics.css';
import PropTypes from 'prop-types';
import { Section, List, Item } from './styles';

function Statistics({ title, stats }) {
  return (
    <Section>
      <h2>{title}</h2>

      <List>
        {stats.map(element => (
          <Item key={element.id}>
            <span>{element.label}</span>
            <span>{element.percentage}%</span>
          </Item>
        ))}
      </List>
    </Section>
    // <section className="statistics">
    //   <h2 className="title">{title}</h2>

    //   <ul className="stat-list">
    //     {stats.map(element => (
    //       <li className="item" key={element.id}>
    //         <span className="label">{element.label}</span>
    //         <span className="percentage">{element.percentage}%</span>
    //       </li>
    //     ))}
    //   </ul>
    // </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
