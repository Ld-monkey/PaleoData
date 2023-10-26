import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalTimeline from './ModalTimeline/ModalTimeline';
import './Timeline.scss';

const Timeline = ({ timelineData }) => {
  const [openEra, setOpenEra] = useState(null);
  const [openPeriod, setOpenPeriod] = useState(null);
  const [openEpoch, setOpenEpoch] = useState(null);

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
      <span>{`${absValue.toLocaleString()} ${absValue < 0 ? 'Ma' : ''}`}</span>
    );

    return formattedValue;
  };

  return (
    <div className="timeline-container">
      <h3>Cliquez sur les boîtes pour voyager dans le temps</h3>
      {timelineData.map((era) => (
        <div key={era.era} className="era">
          <div
            className={`era-label ${openEra === era.era ? 'open' : ''}`}
            onClick={() => setOpenEra(openEra === era.era ? null : era.era)}
          >
            {era.era}

            <div className="era-start">{formatValue(era.eraStart)}</div>
            <div className="era-end">{formatValue(era.eraEnd)}</div>

            {era.eraInfo && (
              <button type="button" className="info-btn" onClick={() => handleInfoClick(era.eraInfo)}>
                ℹ️
              </button>
            )}
          </div>

          {openEra === era.era &&
            era.periods.map((period) => (
              <div key={period.name} className="period">
                <div
                  className={`period-label ${openPeriod === period.name ? 'open' : ''}`}
                  onClick={() => setOpenPeriod(openPeriod === period.name ? null : period.name)}
                >
                  {period.name}
                  <div className="period-start">{formatValue(period.periodStart)}</div>
                  <div className="period-end">{formatValue(period.periodEnd)}</div>
                  {period.periodInfo && (
                    <button type="button" className="info-btn" onClick={() => handleInfoClick(period.periodInfo)}>
                      ℹ️
                    </button>
                  )}{' '}
                </div>

                {openPeriod === period.name &&
                  period.epochs.map((epoch) => (
                    <div key={epoch.name} className="epoch">
                      <div
                        className={`epoch-label ${openEpoch === epoch.name ? 'open' : ''}`}
                        onClick={() => setOpenEpoch(openEpoch === epoch.name ? null : epoch.name)}
                      >
                        {epoch.name}
                        <div className="epoch-start">{formatValue(epoch.epochStart)}</div>
                        <div className="epoch-end">{formatValue(epoch.epochEnd)}</div>
                        {epoch.epochInfo && (
                          <button type="button" className="info-btn" onClick={() => handleInfoClick(epoch.epochInfo)}>
                            ℹ️
                          </button>
                        )}{' '}
                      </div>

                      {openEpoch === epoch.name &&
                        epoch.stage &&
                        epoch.stage.map((stage) => (
                          <div key={stage.name} className="stage">
                            <div className="stage-label">{stage.name}</div>
                            <div className="stage-start">{formatValue(stage.stageStart)}</div>
                            <div className="stage-end">{formatValue(stage.stageEnd)}</div>
                            {stage.stageInfo && (
                              <button
                                type="button"
                                className="info-btn"
                                onClick={() => handleInfoClick(stage.stageInfo)}
                              >
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
