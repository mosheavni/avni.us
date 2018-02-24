import React from 'react';
import PropTypes from 'prop-types';

import ProfileContainer from './profileContainer';
import ContactDetails from './contactDetails';
import EducationDetails from './educationDetails';
import LanguageDetails from './languageDetails';
import Interests from './interests';

const Sidebar = ({name, title, imagePath, mail, phoneNumber, website, linkedin, github, twitter, educationDetails, languages, interests}) => {
    const renderInterests = () => {
        if (interests) {
            return (<Interests list={interests.list} title={interests.sectionTitle}/>);
        }
        return null;
    };
    const renderLanguages = () => {
        if (languages) {
            return (<LanguageDetails list={languages.list} title={languages.sectionTitle}/>);
        }
        return null;
    };
    const renderEducationDetails = () => {
        if (educationDetails) {
            return (<EducationDetails list={educationDetails.list} title={educationDetails.sectionTitle}/>);
        }
        return null;
    };

    const renderProfileContainer = () => {
        return (<ProfileContainer
            name={name}
            title={title}
            imagePath={imagePath}
        />);
    };

    const renderContactDetails = () => {
        return (<ContactDetails
            mail={mail}
            phoneNumber={phoneNumber}
            website={website}
            linkedin={linkedin}
            github={github}
            title={title}
            twitter={twitter}
        />);
    };

    return (
        <div className="sidebar-wrapper">
            {renderProfileContainer()}
            {renderContactDetails()}
            {renderEducationDetails()}
            {renderLanguages()}
            {renderInterests()}
        </div>
    );
};

Sidebar.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
    mail: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    educationDetails: PropTypes.shape().isRequired,
    languages: PropTypes.shape().isRequired,
    interests: PropTypes.shape().isRequired,
};

Sidebar.defaultProps = {
    imagePath: null,
    phoneNumber: null,
    website: null,
    linkedin: null,
    github: null,
    twitter: null
};

export default Sidebar;