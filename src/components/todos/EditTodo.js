import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodo, updateTodo } from "../../actions/todoActions";

class EditTodo extends Component {
    state = {
        title: '',
        completed: false,
        userId: null,
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextState){
        const { userId, title, completed } = nextProps.todo;
        this.setState({
            title,
            completed,
            userId,
            errors: {}
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getTodo(id);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, completed, userId } = this.state;

        // Check For Errors
        if (title === '') {
            this.setState({ errors: { title: 'Название обязательно для заполнения' } });
            return;
        }


        const { id } = this.props.match.params;

        const updatedTodo = {
            id,
            title,
            completed,
            userId
        };

        this.props.updateTodo(updatedTodo);

        // Clear State
        this.setState({
            title: '',
            completed: false,
            errors: {}
        });

        this.props.history.push(`/contact/todos/${userId}`);
    };

    handleChange = (event) => {
        const { name, value, checked, type } = event.target;

        this.setState({ [name]: (type === 'checkbox' ? checked : value) });
    };

    render() {
        const { title, completed, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Редактировать дело</div>
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

EditTodo.propTypes = {
    todo: PropTypes.object.isRequired,
    getTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    todo: state.todo.todo
});

export default connect(mapStateToProps, { getTodo, updateTodo })(EditTodo);
