import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from "../../actions/todoActions";

class AddTodo extends Component {
    state = {
        title: '',
        completed: false,
        errors: {}
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, completed } = this.state;

        // Check For Errors
        if (title === '') {
            this.setState({ errors: { title: 'Название обязательно для заполнения' } });
            return;
        }


        const { id } = this.props.match.params;

        const newTodo = {
            title,
            completed,
            userId: id
        };

        this.props.addTodo(newTodo);

        // Clear State
        this.setState({
            title: '',
            completed: false,
            errors: {}
        });

        this.props.history.push(`/contact/todos/${id}`);
    };

    handleChange = (event) => {
        const { name, value, checked, type } = event.target;

        this.setState({ [name]: (type === 'checkbox' ? checked : value) });
    };

    render() {
        const { title, completed, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Добавить новое дело</div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <TextInputGroup
                            label="Название"
                            name="title"
                            placeholder="Введите название"
                            value={title}
                            onChange={this.handleChange}
                            error={errors.title}
                        />
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="completed"
                                checked={completed}
                                onChange={this.handleChange}
                            />
                            <label className="form-check-label">
                                Закончено
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Обновить дело"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(AddTodo);
