import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    render() {
        const { id, name, email, phone, company, address } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{' '}
                    <i
                        onClick={() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }
                        className="fas fa-info-circle"
                        style={{ cursor: 'pointer' }}
                    />
                    <Link to={`contact/todos/${id}/`}>
                        <i
                            className="fas fa-list-ol"
                            style={{
                                cursor: 'pointer',
                                float: 'right',
                                color: 'black',
                                marginRight: '1rem'
                            }}
                        />
                    </Link>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Телефон: {phone}</li>
                        <li className="list-group-item">Компания: {company.name}</li>
                        <li className="list-group-item">Адрес: {`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
