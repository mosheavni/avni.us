import React from 'react';
import PropTypes from 'prop-types';

const EducationDetails = ({title, list}) => {
    const renderListItem = (item, i) => {
        return (
            <div className="item" key={`education_item_${i}`}>
                <h4 className="edu-title">{item.name}</h4>
                <h7 className="meta">{item.school}</h7>
                <div className="time">{item.date}</div>
            </div>
        );
    };

    return (
        <div className="education-container container-block">
            <h3 className="container-block-title">{title || 'Education'}</h3>
            {list.map((item, i) => {
                return renderListItem(item, i);
            })}
        </div>
    );
};

EducationDetails.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    title: PropTypes.string.isRequired
};

export default EducationDetails;