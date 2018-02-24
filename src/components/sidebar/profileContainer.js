import React from 'react';
import PropTypes from 'prop-types';

const ProfileContainer = ({name, title, imagePath}) => {
    const renderProfilePicture = (imagePath) =>{
        if (imagePath) {
            return (<img className="profile" src={imagePath} alt="" style={{maxWidth: 185}}/>);
        }
        return null;
    };
    return (
        <div className="profile-container">
            {renderProfilePicture(imagePath)}
            <h1 className="name" style={{fontSize: 25}}>{name}</h1>
            <h3 className="tagline"> {title} </h3>
        </div>
    );
};

ProfileContainer.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string
};

ProfileContainer.defaultProps = {
    imagePath: null
};

export default ProfileContainer;