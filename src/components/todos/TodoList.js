import React, { useEffect } from 'react';
import TodoItem from "./TodoItem";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos } from "../../actions/todoActions";
import { getContact } from "../../actions/contactActions";
import {Link} from "react-router-dom";

const TodoList = (props) => {
    const { todos, contact } = props;

    useEffect(() => {
        const { id } = props.match.params;
        props.getTodos(id);
        props.getContact(id);
    }, []);

    return (
        <React.Fragment>
            <h1 className="display-4 mb-2">
                <span className="text-danger">Дела</span> {contact.name}
                <Link to={`/contact/todos/${contact.id}/add`}>
                    <i
                        className="fa fa-plus"
                        style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: 'black',
                            marginRight: '1rem'
                        }}
                    />
                </Link>
            </h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </React.Fragment>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    getContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
    contact: state.contact.contact
});

export default connect(mapStateToProps, { getTodos, getContact })(TodoList);
