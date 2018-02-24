import React from 'react';
import PropTypes from 'prop-types';

const LanguageDetails = ({list, title}) => {
    const renderListItem = (item) => {
        return (
            <li key={item}>
                {item}
            </li>
        );
    };
    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title">{title || 'Interests'}</h2>
            <ul className="list-unstyled interests-list">
                {list.map((item) => {
                    return renderListItem(item);
                })}
            </ul>
        </div>
    );
};

LanguageDetails.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
};

export default LanguageDetails;