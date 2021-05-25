import React from 'react';
import { connect } from 'react-redux';
import changeFilter from '../../redux/Filter/filterAction';
import { getFilter } from '../../redux/Contacts/allContactsSelector';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label className={s.label}>
                Find contacts
                <input
                    type="text"
                    name="filter"
                    //placeholder="Name"
                    onChange={onChange}
                    value={value}
                    className={s.input}
                />
            </label>
        </div>
    );
};

const mapStateToProps = state => ({
    value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e =>
        dispatch(
            changeFilter.changeFilter(
                e.currentTarget.value,
            ),
        ),
});
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);
