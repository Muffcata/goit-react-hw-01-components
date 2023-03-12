import style from './statistics.module.css';
import { getRandomColor } from 'get-color-bg';
import PropTypes, { string } from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title.length > 0 && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
