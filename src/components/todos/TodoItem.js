import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from "../../actions/todoActions";

const TodoItem = (props) => {
    const { id, userId, title, completed } = props.todo;

    const completedStyle = {
        color: 'green',
        textDecoration: 'line-through'
    };

    const uncompletedStyle = {
        color: 'red',
        textDecoration: 'none'
    };

    const onDeleteClick = (id) => {
        props.deleteTodo(id);
    };

    return (
        <div className="card card-body mb-3">
            <h4>
                <span
                    style={ completed ? completedStyle : uncompletedStyle }
                >
                    {title}
                </span>
                {' '}
                <i
                    className="fas fa-times"
                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                    onClick={ () => { onDeleteClick(id) } }
                />
                <Link to={`/contact/todos/${userId}/edit/${id}`}>
                    <i
                        className="fas fa-pencil-alt"
                        style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: 'black',
                            marginRight: '1rem'
                        }}
                    />
                </Link>
            </h4>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default connect(null, { deleteTodo })(TodoItem);
