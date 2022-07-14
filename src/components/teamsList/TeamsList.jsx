import React from 'react';
import TeamList from '../../mocks/TeamList';

const TeamsList = () => {
  return (
    <div>
      {TeamList.map((team) => (
        <article key={team.id}>
          <div>
            <img src={team.img} alt={team.name} />
          </div>
          <h5>{team.name}</h5>
          <small>{team.title}</small>
        </article>
      ))}
    </div>
  )
}

export default TeamsList