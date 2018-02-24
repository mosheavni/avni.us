import React from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

const Projects = ({icon, sectionTitle, categories, description}) => {
    const renderListItem = (item, i) => {
        return (
            <div className="item" key={`project_item_${i}`}>
                {renderProjectTitle(item)}
                -
                <span
                    style={{marginLeft: 5}}
                    className="project-tagline"
                    dangerouslySetInnerHTML={{__html: item.description}}
                />
            </div>
        );
    };
    const renderProjectTitle = (project) => {
        let inner = project.title;
        if (project.url) {
            inner = <a href={project.url} target="_blank">{project.title}</a>;
        }
        return (<span className="project-title" style={{marginRight: 5}}>{inner}</span>);
    };
    const renderIntro = (description) => {
        if (!description) {
            return null;
        }
        return (
            <div className="intro">
                <p dangerouslySetInnerHTML={{__html: description}}/>
            </div>);
    };
    const renderCategory = (category, key) => {
        return (
            <div className="category-item" key={`category_${key}`}>
                <h5>{category.name}</h5>
                <hr/>
                {
                    category.list.map((item, i) => renderListItem(item, i))
                }
            </div>
        );
    };
    return (
        <Section
            className="projects-section"
            icon={icon || 'archive'}
            id="projects"
            title={sectionTitle || 'Projects'}>
            {renderIntro(description)}
            <div className="projects">
                {categories.map(renderCategory)}
            </div>
        </Section>
    );
};

Projects.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    description: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Projects;