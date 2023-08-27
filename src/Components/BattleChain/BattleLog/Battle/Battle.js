import React from 'react';

class Battle extends React.Component {
  renderCards() {
    const { battle } = this.props;

    const ownCards = battle.result === 'W' ? battle.ownCards : battle.opponentCards;
    const opponentCards = battle.result === 'W' ? battle.opponentCards : battle.ownCards;

    const ownCardClass = battle.result === 'W' ? 'win-cards' : 'loss-cards';
    const opponentCardClass = battle.result === 'W' ? 'loss-cards' : 'win-cards';

    return (
      <div className='battle-cards'>
        <div className={`own-cards ${ownCardClass}`}>
          {ownCards.map(card => (
            <div
              key={card.id}
              className='battle-card'
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>
          ))}
        </div>
        <div className='vs'>VS</div>
        <div className={`opponent-cards ${opponentCardClass}`}>
          {opponentCards.map(card => (
            <div
              key={card.id}
              className='battle-card'
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { battle } = this.props;
    return (
      <div className='battle'>
        <h4>
          {battle.result === 'W' ? <span className='win'>W</span> : <span className='loss'>L</span>} vs {battle.opponent}
        </h4>
        {this.renderCards()}
        <div>
          <div className='battle-stat'>
            <p>Duration: <strong>{battle.duration} Rounds</strong></p>
          </div>
          <div className='battle-stat'>
            <p>Earnings: <strong>{battle.earnings} DEC</strong></p>
          </div>
          <div className='battle-stat'>
            <p>
              Score change: <strong>{battle.scoreChange > 0 ? '+' : ''}{battle.scoreChange}</strong>
            </p>
          </div>
          <div className='battle-stat'>
            <p>{battle.time}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;
