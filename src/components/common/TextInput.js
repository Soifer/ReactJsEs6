import React, {PropTypes} from 'react';

const TextInput = ({
    name,
    label,
    onChange,
    placeholder,
    value,
    error
}) => {
    let wrapperClass = 'form-group';
    return (
        <div className={wrapperClass}></div>
    );

};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;