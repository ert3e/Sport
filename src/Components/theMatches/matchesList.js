import React, { Component } from 'react';
import {easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class MatchesList extends Component {
    state = {
        matcheslist:[]
    }
    static getDerivedStateFromProps(props,state) {
        return state = {
            matcheslist: props.matches
        }
    }
    const elements = [
        {
            opacity:0,
            endopacity:1
        },
        {}
    ]
    showMatches = () => (
        this.state.matcheslist ?
        <NodeGroup
            data={this.state.matcheslist}
            keyAccessor={(d)=> d.id}

            start={()=>({
                opacity:0,
                x:-200
            })}
            enter={(d,i)=>({
                opacity:[1],
                x:[0],
                timing:{duration: 500, delay: i * 50, ease: easePolyOut}
            })}
            update={(d,i)=>({
                opacity:[1],
                x: [0],
                timing:{duration: 500, delay: i * 50, ease: easePolyOut}
            })}
            leave={(d,i)=>({
                opacity:[0],
                x: [-200],
                timing:{duration: 500, delay: i * 50, ease: easePolyOut}
            })}
        >
            {(nodes) => (
                <div>
                    { node.map(({key,data, state:{x, opacity}})=>(
                        <div 
                            key={key} 
                            className="math_box_big"
                            style={{
                                opacity,
                                transform: `translate(${x}px)`
                            }}
                        >
                            <div className="block_wrappper">
                               <div className="block">
                                    <div 
                                        className="icon" 
                                        style={{background:`url(/images/team_icons/${data.localTmb}.png)`}}></div>
                                        <div className="team">{data.local}</div>
                                        <div className="result">{data.resultLocal}</div>
                               </div>
                               <div className="block">
                                    <div 
                                        className="icon" 
                                        style={{background:`url(/images/team_icons/${data.awayTmb}.png)`}}></div>
                                        <div className="team">{data.away}</div>
                                        <div className="result">{data.resultAway}</div>
                               </div>       
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </NodeGroup>
        :null
    )
    render() {
        console.log(this.state.matcheslist)
        return (
            <div>
                {this.showMatches()}
            </div>
        );
    }
}

export default MatchesList;