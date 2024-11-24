import React from 'react'

const StatupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <div>
      <li className='startup-card group'>
            <div className="flex-between">
                <p className='startup_card_date'>{post?._creeatedAt}</p>
            </div>
      </li>
    </div>
  )
}

export default StatupCard
