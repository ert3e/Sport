import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './table';
import MatchesList from './matchesList';
class TheMatches extends Component {
    state = {
        loading: true,
        matches:[],
        filterMatches:[],
        playerFilter:'All',
        resultFilter:'All'
    }
    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                loading: false,
                matches: reverseArray(matches),
                filterMatches: reverseArray(matches)
            })
        })
    }
    showPlayed = (played) => {
        const list = this.state.matches.filter((match)=>{
            return match.final === played
        });
        this.setState({
            filterMatches: played === 'All' ? this.state.matches : list,
            playerFilter: played,
            resultFilter: 'All'
        })
    }
    render() {
        const state = this.state;
        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">
                        <div className="match_filters">
                            <div className="match_filters_box">
                                <div className="tag">
                                    Show match
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.plyedFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showPlayed('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.plyedFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showPlayed('Yes')}
                                    >
                                        Played
                                    </div>
                                    <div className={`option ${state.plyedFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showPlayed('No')}
                                    >
                                        Not played
                                    </div>
                                </div>
                            </div>
                            <div className="match_filters_box">
                                <div className="tag">
                                    Reuslt
                                </div>
                                <div className="cont">
                                    <div className={`option ${state.plyedFilter === 'All'?'active':''}`}
                                        onClick={()=> this.showResult('All')}
                                    >
                                        All
                                    </div>
                                    <div className={`option ${state.plyedFilter === 'Yes'?'active':''}`}
                                        onClick={()=> this.showResult('W')}
                                    >
                                       W
                                    </div>
                                    <div className={`option ${state.plyedFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showResult('L')}
                                    >
                                        L
                                    </div>
                                    <div className={`option ${state.plyedFilter === 'No'?'active':''}`}
                                        onClick={()=> this.showResult('D')}
                                    >
                                        D
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MatchesList matches={state.filterMatches}/>
                    </div>
                    <div className="right">
                        <LeagueTable/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TheMatches;