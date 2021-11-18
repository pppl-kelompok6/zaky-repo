import React, { Component } from 'react'
import TableComp from '../components/TableComp'

export default class HomeUserCon extends Component {
    render() {
        return (
            <div>
                <TableComp users={this.props.users} />
            </div>
        )
    }
}
