import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles-2.css';

import Section from './components/shared/section';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
// import Projects from './components/projects';
import Tags from './components/tags';

const CV = ({profile, careerProfile, experiences, projects, tags}) => {
    const renderExperiencesSection = () => {
        if (experiences) {
            return (<Experiences {...experiences} />);
        }
        return null;
    };
    /*const renderProjectsSection = () => {
        if (projects) {
            return (<Projects {...projects} />);
        }
        return null;
    };*/
    const renderTags = () => {
        if (tags) {
            return (<Tags {...tags} />);
        }
        return null;
    };
    const renderCareerProfile = () => {
        const {icon, sectionTitle, description} = careerProfile;
        const innerContent = (<div className="summary" dangerouslySetInnerHTML={{__html: description}}/>);
        return (
            <Section
                className="summary-section"
                icon={icon || 'user'}
                title={sectionTitle || 'Career Profile'}>
                {innerContent}
            </Section>
        );
    };

    return (
        <div className="wrapper">
            <Sidebar
                {...profile}
            />
            <div className="main-wrapper">
                {renderCareerProfile()}
                {renderExperiencesSection()}
                {/*{renderProjectsSection()}*/}
                {renderTags()}
            </div>
        </div>
    );
};

CV.propTypes = {
    profile: PropTypes.shape().isRequired,
    careerProfile: PropTypes.shape().isRequired,
    experiences: PropTypes.shape().isRequired,
    projects: PropTypes.shape().isRequired,
    tags: PropTypes.shape().isRequired
};

export default CV;