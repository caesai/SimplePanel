import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  depchoice: state.reducer.depchoice
})

class DetailedInfo extends React.Component{
  render() {
    let departments = this.props.depchoice || {};
    return(
      <div className='info'>
        <h2>Info</h2>
        { departments ?
          <div>
            <h3>{departments.name}</h3>
            {departments.employees ?
              <div>
                <h4>Employees:</h4>
                <table className='employeetable' cellPadding='0' cellSpacing='0'>
                  <tbody>
                     {departments.employees.map((emp,key) => {
                      return <tr key={key} onClick={(e) => {
                        if (e.target && e.target.nodeName == 'P') {
                          e.target.classList.toggle('inactive');
                          e.target.nextSibling.classList.toggle('active');
                        }
                      }}>
                        <td>
                          <p ref={'firstName' + key}>{emp.firstName}</p>
                          <input type='text' defaultValue={emp.firstName} onKeyPress={(e) => {
                              if (e.key == 'Enter') {
                                this.refs['firstName' + key].classList.toggle('inactive');
                                e.target.classList.toggle('active');
                              }
                            }
                          }/>
                        </td>
                        <td>
                          <p ref={'lastName' + key}>{emp.lastName}</p>
                          <input type='text' defaultValue={emp.lastName}  onKeyPress={(e) => {
                              if (e.key == 'Enter') {
                                this.refs['lastName' + key].classList.toggle('inactive');
                                e.target.classList.toggle('active');
                              }
                            }
                          }/>
                        </td>
                      </tr>})}
                  </tbody>
                </table>
              </div>
              : null}
          </div>
        : null}
      </div>
    )
  }
}

DetailedInfo = connect(mapStateToProps)(DetailedInfo);

export default DetailedInfo;
