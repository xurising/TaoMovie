import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../../components/Star';
import './ScoreSummary.css';

const ScoreSummary = () => {
  return (
    <div className="scoreSummary">
      <div className="scoreSummary__top">
        <div className="summaryItem">
          <div className="summaryItem__value">9.3 <Star value={9.3}/></div>
          <div className="summaryItem__title">观众评分4396人</div>
        </div>
        <div className="summaryItem__module">
          <div className="summaryItem__value">80%</div>
          <div className="summaryItem__title">V淘推荐度</div>
        </div>
        <div className="summaryItem__module">
          <div className="summaryItem__value">87723人</div>
          <div className="summaryItem__title">想看</div>
        </div>
      </div>
      <div className="summaryBtn">
        <div className="summaryBtn__item summaryBtn__item--want"><i />想看</div>
        <div className="summaryBtn__item summaryBtn__item--seen"><i />看过</div>
      </div>
    </div>
  );
};

ScoreSummary.propTypes = {

};

export default ScoreSummary;
