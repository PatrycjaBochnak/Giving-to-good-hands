import React from 'react'

const WhoWeHelpListItem = ({ name, organizationGoal, items }) =>
  <li className='who-we-help-list-item'>
    <div className='who-we-help-list-item-content'>
      <div className='organization'>
        <h3 className='organization-name'>{`"${name}"`}</h3>
        <p className='organization-goal'>{organizationGoal}</p>
      </div>
      <p className='items'>{items}</p>
    </div>
  </li>

export default WhoWeHelpListItem