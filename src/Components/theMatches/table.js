import React, { Component } from 'react';
import { firebseDB } from '../../firebase';
import { firebaseLooper } from '../ui/misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style = {
    cell:{
        padding: '4px 16px 4px 11px',
        borderBottom: '1px solid #ffffff',
        color: '#ffffff',
        textAlign: 'center'
    }
}
class LeagueTable extends Component {
    state = {
        positions:[]
    }
    componentDidMount(){
        firebseDB.ref('position').once('value').then((snapshot) =>{
            const position = firebaseLooper(snapshot);

            this.setState({
                position:position
            })
        })
    }
    showTeamposition = (pos) =>(
        pos ?
        pos.map((pos,i)=>(
            <TableRow key={i}>
                <TableCell style={style.cell}>{i+1}</TableCell>
                <TableCell style={style.cell}>{pos.team}</TableCell>
                <TableCell numeric style={style.cell}>{pos.w}</TableCell>
                <TableCell numeric style={style.cell}>{pos.d}</TableCell>
                <TableCell numeric style={style.cell}>{pos.l}</TableCell>
                <TableCell numeric style={style.cell}>{pos.pts}</TableCell>
            </TableRow>
        ))
        :null
    )
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LeagueTable;