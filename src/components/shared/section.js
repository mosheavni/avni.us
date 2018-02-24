import React from 'react';
import PropTypes from 'prop-types';

const Section = ({className, title, icon, children, id}) => (
    <section className={`section ${className || ''}`} id={id || null}>
        <h2 className="section-title">
            <i className={`fa fa-${icon}`}/>
            {title}
        </h2>
        {children}
    </section>
);


Section.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string
};

export default Section;