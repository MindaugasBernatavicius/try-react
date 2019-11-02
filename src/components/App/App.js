import React from 'react';
import './App.css';
import Card from '../Card/Card';
import Form from '../Form/Form';

const CardList = (props) => (
    <>{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}</>
);

class App extends React.Component {
    state = {
        profiles: [],
    };
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
            // profiles: [profileData],
        }));
    };
    render() {
        return (
        <div>
            <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile} />
            <CardList profiles={this.state.profiles} />
        </div>
        );
    }
}

export default App;