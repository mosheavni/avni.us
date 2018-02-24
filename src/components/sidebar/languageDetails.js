import React from 'react';
import PropTypes from 'prop-types';

const LanguageDetails = ({list, title}) => {
    const renderListItem = (item, i) => {
        return (
            <li key={`language_item_${i}`}>
                {item.name}
                <span className="lang-desc">  ({item.level})</span>
            </li>
        );
    };

    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title" key="lang_header">{title || 'Languages'}</h2>
            <ul className="list-unstyled interests-list" key="lang_list">
                {list.map((item, i) => {
                    return renderListItem(item, i);
                })}
            </ul>
        </div>
    );

};

LanguageDetails.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    title: PropTypes.string.isRequired
};

export default LanguageDetails;