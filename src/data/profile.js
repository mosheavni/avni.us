import profileImg from '../assets/profile.jpg';

const profile = {
    name: 'Moshe Michael Avni',
    title: 'DevOps Engineer and Full Stack Developer',
    mail: 'moshe@avni.us',
    phoneNumber: '+972 (54) 435 2293',
    website: 'avni.us',
    linkedin: 'linkedin.com/in/moshe-avni',
    github: 'github.com/Moshem123',
    imagePath: profileImg,
    twitter: null,
    educationDetails: {
        sectionTitle: '',
        list: [
            {name: 'Cisco Certified Network Associate', school: 'John Bryce College', date: '2015'},
            {name: 'Microsoft Certified Solution Associate', school: 'John Bryce College', date: '2013-2014'},
            {name: 'Automating Administration with Windows PowerShell 4.0', school: 'John Bryce College', date: '2014'},
            {name: 'Configuring, Managing and Maintaining Windows Server 2008 R2', school: 'John Bryce College', date: '2013'},
            {name: 'System Expert', school: 'Technological Unit of IDF – Mamram School', date: '2012'},
            {name: 'SharePoint 2007', school: 'Technological School of IAF', date: '2011'},
            {name: 'System Administrator Basic Course', school: 'Technological School of IAF', date: '2011'},
        ]
    },
    languages: {
        sectionTitle: 'Languages',
        list: [{name: 'Hebrew', level: 'Native'}, {name: 'English', level: 'Native Proficiency'}]
    },
    interests: {
        sectionTitle: '',
        list: ['Diving', 'Gym']
    }
};

export default profile;