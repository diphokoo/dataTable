import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


function TruckForce() {

    const [tableData, setTableData] = useState([])


    useEffect(() => {
        fetch("https://mocki.io/v1/29bf6961-6f00-49c5-bf69-df7abd8ad1cb")
          .then((data) => data.json())
          .then((data) => setTableData(data))
    
      }, [])

      console.log(tableData)

    return (
        <div>
        <h5>ReactJS Editable Table</h5>
        <Dropdown className="float-end m-4">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                This Week
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">This Week</Dropdown.Item>
                <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <table>
          <thead>
            <tr className='truckFHeader'>
              <th>This Week Position</th>
              <th>Truck ID</th>
              <th>Bed Type</th>
              <th>No. of Loads</th>
              <th>Max values</th>
              <th>Last Week Position</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ position, truck_id, lining_type, number_of_loads, max_val, last_time_period_position  }) => (
              <tr key={position}>
                <td>   
                    {position}        
                </td>
                <td>
                    {truck_id}
                </td>
                <td>
                    {lining_type}
                </td>
                <td>
                    {number_of_loads}
                </td>
                <td>
                    {max_val}
                </td>
                <td>
                    {last_time_period_position}
                </td>
                <td>
                    View Report
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default TruckForce;