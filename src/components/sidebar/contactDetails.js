import React from 'react';
import PropTypes from 'prop-types';

const ContactDetails = ({mail, phoneNumber, website, linkedin, github, twitter}) => {
    const renderListItem = (className, data, iconName, type) => {
        if (!data) {
            return null;
        }
        let href = data;
        // eslint-disable-next-line
        switch (type) {
            case 'email':
                href = `mailto: ${data}`;
                break;
            case 'phone':
                href = `tel:${data}`;
                break;
        }
        return (
            <li className={className}>
                <i className={`fa ${iconName}`}/>
                <a href={`//${href}`} target="_blank"> {data} </a>
            </li>
        );
    };
    return (
        <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
                {renderListItem('email', mail, 'fa-envelope', 'email')}
                {renderListItem('phone', phoneNumber, 'fa-phone', 'phone')}
                {renderListItem('website', website, 'fa-globe', 'link')}
                {renderListItem('linkedin', linkedin, 'fa-linkedin', 'link')}
                {renderListItem('github', github, 'fa-github', 'link')}
                {renderListItem('twitter', twitter, 'fa-twitter', 'link')}
            </ul>
        </div>
    );
};

ContactDetails.propTypes = {
    mail: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    website: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
};

ContactDetails.defaultProps = {
    phoneNumber: null,
    website: null,
    linkedin: null,
    github: null,
    twitter: null
};

export default ContactDetails;