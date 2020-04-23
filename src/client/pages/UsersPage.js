import React from 'react'
import { connect } from 'react-redux' 
import { fetchUsers } from '../actions'

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render() {
        return (
            <div>
                Here's a big list of Users
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

const loadData = store => {
    //returns a promise that represents the underlying request
    return store.dispatch(fetchUsers()) 
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersPage)
}