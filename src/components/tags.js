import React from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

const Tags = ({icon, sectionTitle, list}) => {
    const renderListItem = (item, i) => {
        return (
            <li className="item" key={`tag_item_${i}`}>
                {item}
            </li>
        );
    };
    return (
        <Section
            className="tags-section"
            icon={icon || 'rocket'}
            id="tags"
            title={sectionTitle || 'Skills & Proficiency'}>
            <div className="skills">
                <ul className="skillset">
                    {list.map((item, i) => {
                        return renderListItem(item, i);
                    })}
                </ul>
            </div>
        </Section>
    );
};

Tags.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Tags;