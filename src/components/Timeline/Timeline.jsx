import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalTimeline from './ModalTimeline/ModalTimeline';
import './Timeline.scss';

const Timeline = ({ timelineData }) => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  const formatValue = (value) => {
    const isMillionYears = value < 0;
    const absValue = Math.abs(value);

    const formattedValue = isMillionYears ? (
      <span>
        {`-${absValue.toLocaleString()} Ma`}
        <br />
        {`(-${(absValue * 1000000).toLocaleString()} ans)`}
      </span>
    ) : (
      <span>{`${absValue.toLocaleString()} ${absValue < 0 ? 'Ma' : 'ans'}`}</span>
    );

    return formattedValue;
  };

  return (
    <div className="timeline-container">
      {timelineData.map((era) => (
        <div key={era.era} className="era">
          <div className="era-label">{era.era}</div>
          <div className="era-start">{formatValue(era.eraStart)}</div>
          <div className="era-end">{formatValue(era.eraEnd)}</div>

          {era.eraInfo && (
            <button type="button" className="info-btn" onClick={() => handleInfoClick(era.eraInfo)}>
              ℹ️
            </button>
          )}

          {era.periods.map((period) => (
            <div key={period.name} className="period">
              <div className="period-label">{period.name}</div>
              <div className="period-start">{formatValue(period.periodStart)}</div>
              <div className="period-end">{formatValue(period.periodEnd)}</div>
              {period.periodInfo && (
                <button type="button" className="info-btn" onClick={() => handleInfoClick(period.periodInfo)}>
                  ℹ️
                </button>
              )}

              {period.epochs.map((epoch) => (
                <div key={epoch.name} className="epoch">
                  <div className="epoch-label">{epoch.name}</div>
                  <div className="epoch-start">{formatValue(epoch.epochStart)}</div>
                  <div className="epoch-end">{formatValue(epoch.epochEnd)}</div>
                  {epoch.epochInfo && (
                    <button type="button" className="info-btn" onClick={() => handleInfoClick(epoch.epochInfo)}>
                      ℹ️
                    </button>
                  )}

                  {epoch.stage &&
                    epoch.stage.map((stage) => (
                      <div key={stage.name} className="stage">
                        <div className="stage-label">{stage.name}</div>
                        <div className="stage-start">{formatValue(stage.stageStart)}</div>
                        <div className="stage-end">{formatValue(stage.stageEnd)}</div>
                        {stage.stageInfo && (
                          <button type="button" className="info-btn" onClick={() => handleInfoClick(stage.stageInfo)}>
                            ℹ️
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <ModalTimeline isOpen={isModalOpen} closeModal={closeModal} content={modalContent} />
    </div>
  );
};

Timeline.propTypes = {
  timelineData: PropTypes.arrayOf(
    PropTypes.shape({
      era: PropTypes.string.isRequired,
      start: PropTypes.number,
      end: PropTypes.number,
      periods: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          start: PropTypes.number,
          end: PropTypes.number,
          epochs: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              start: PropTypes.number,
              end: PropTypes.number,
              stage: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string.isRequired,
                  start: PropTypes.number,
                  end: PropTypes.number,
                  stageInfo: PropTypes.string,
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  ).isRequired,
};

export default Timeline;
