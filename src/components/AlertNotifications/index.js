import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdInfo, MdWarning} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="mainContainer">
    <h1 className="mainheading">Alert Notifications</h1>
    <Notification className="successContainer">
      <AiFillCheckCircle className="logo" />
      <div className="nameparaContainer">
        <h1 className="heading">Success</h1>
        <p className="para">You can access all the files in the folder</p>
      </div>
    </Notification>
    <Notification className="errorContainer">
      <RiErrorWarningFill className="logo" />
      <div className="nameparaContainer">
        <h1 className="heading">Error</h1>
        <p className="para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification className="warningContainer">
      <MdWarning className="logo" />
      <div className="nameparaContainer">
        <h1 className="heading">Warning</h1>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification className="infoContainer">
      <MdInfo className="logo" />
      <div className="nameparaContainer">
        <h1 className="heading">Info</h1>
        <p className="para">Anyone on the Internet can view these files</p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
