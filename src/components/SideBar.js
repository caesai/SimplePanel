import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  departments: state.reducer.departments,
  depchoice: state.reducer.depchoice
})

const actions = {
  chooseDep: (choice) => ({
    type: 'CHOOSE_DEPARTMENT',
    choice
  })
}

class SideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      department: -1
    }
  }
  render() {
    return(
      <div className='sidebar'>
        <h2>Departments</h2>
        <ul>
          {this.props.departments ? this.props.departments.map((dep, key) => {
            return <li key={key} onClick={(e) => {
              this.setState({
                department: key
              })
              this.props.dispatch(actions.chooseDep(dep));
            }}>
              {dep.name}
              <ul>
                {this.state.department == key ? dep.employees.map((empl, key) => {
                  return <li key={key}>{empl.firstName} {empl.lastName}</li>
                }) : null}
              </ul>
            </li>
          }) : null}
        </ul>
      </div>
    )
  }
}

SideBar = connect(mapStateToProps)(SideBar);

export default SideBar;
