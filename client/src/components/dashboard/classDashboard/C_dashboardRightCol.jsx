// Right column is going to hold the preview of class, student, or assignment that was clicked on from left column
import React from 'react'
import DashboardRightColDetail from './C_dashboardRightColDetail.jsx'
class DashboardRightCol extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log('here now', this.props)
    return (
      <div className='dashboardRightCol'>
        <DashboardRightColDetail assignments={this.props} />
      </div>
    )
  }
};
export default DashboardRightCol
