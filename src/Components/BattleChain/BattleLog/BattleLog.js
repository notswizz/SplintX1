import React from 'react';
import Battle from './Battle/Battle';

class BattleLog extends React.Component {
  render() {
    return (
      <div className='battle-log'>
        <h3>Last 5 Battles</h3>
        {this.props.battles.map(battle => (
          <Battle key={battle.id} battle={battle} />
        ))}
      </div>
    );
  }
}

export default BattleLog;
