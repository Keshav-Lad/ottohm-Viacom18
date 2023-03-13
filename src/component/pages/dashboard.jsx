import React from 'react';
import Card from '../common/card';
import DashBoardTable from '../common/tables/table';

const Dashboard =() => {
  
  return (
    <div className='container mt-3'>

      <p className='fs-6'>DashBoard</p>
      <div className='row'>
        <div className="col-md-3 mb-2">
          <Card title="Total Tournament"/>
        </div>
        <div className="col-md-3 mb-2">
        <Card title="Total No of Teams"/>
        </div>
        <div className="col-md-3 mb-2">
        <Card title="Ongoing Tournament"/>
        </div>
        <div className="col-md-3 mb-2">
        <Card title="Tournament Relocated"/>
        </div>
      </div>
      <div className='container  border border-dark border-1 rounded-3 text-center mt-4'>
        <h1 className='mt-5 mb-5 pt-5 pb-5'>Analytics</h1>
      </div>
      <div className="mt-4 rounded-top ">
        <h5 className='pb-3'>Ongoing Tournament</h5>
        <DashBoardTable/>
      </div>
    </div>
  )
}
export default Dashboard;