import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children, className} = props

  return (
    <div className={className}>
      {children}
      <GrFormClose className="closeIcon" />
    </div>
  )
}

export default Notification
