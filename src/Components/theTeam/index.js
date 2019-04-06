import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase} from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';
class TheTeam extends Component {
    state = {
        loading:true,
        players:[]
    }
    componentDidMount(){
        firebasePlayers.once('value').then(snapshot =>{
            const players = firebaseLooper(snapshot);
            const promises = [];
            for(let key in players){
                promises.push(
                    new Promise((resolve, reject)=>{
                        firebase.storage().ref('playera')
                        .child(players[key].image).getDownloadURL()
                        .then( url => {
                            players[key].url = url;
                            resolve();
                        })
                    })
                )
            }
            Promise.all(promises).then(()=>{
                this.setState({
                    loading: false,
                    players
                })
            })
        })
    }
    render() {
        return (
            <div className="the_team_container" 
                style={{
                    background: `url(${Stripes}) repeat`
                }}>
                { !this.state.loading ?
                    <div className="team_category_wrapper">
                        <div className="title">Keepers</div>
                        <div className="team_cards">
                            {this.showlayersByCategory('Keeper')}
                        </div>
                    </div>
                :null
                }
            </div>
        );
    }
}

export default TheTeam;