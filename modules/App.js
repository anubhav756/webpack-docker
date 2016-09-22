import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
    render: function () {
        return (
            <div>
                <ul role="nav">
                    <li><NavLink to="/login" activeClassName='active'>Login</NavLink></li>
                    <li><NavLink to="/register" activeClassName='active'>Register</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});