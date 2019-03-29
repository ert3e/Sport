import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';


import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';

    

class AddEditplayers extends Component {

    state = {
        playerId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        defaultImd:'',
        formdata:{
            name:{
                element: 'input',
                value: '',
                config:{
                    label: 'Player Name',
                    name: 'name_input',
                    type: 'text',

                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLable: true
            },
            number:{
                element: 'input',
                value: '',
                config:{
                    label: 'Player number',
                    name: 'number_input',
                    type: 'text',

                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLable: true
            },
            position:{
                element: 'select',
                value: '',
                config:{
                    label: 'Select a position',
                    name: 'select_position',
                    type: 'select',
                    options: [
                        {key:"Keeper",value:"Keeper"},
                        {key:"Defence",value:"Defence"},
                        {key:"Midfield",value:"Midfield"},
                        {key:"Strike",value:"Strike"},
                    ]
                },
                validation:{
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLable: true
            },
        }
    }
    updateFields(match, teamOptions, teams, type, matchId){
        const newFormdata = {
            ...this.state.formdata
        }
        for(let key in newFormdata){
            if(match){
                newFormdata[key].value = match[key];
                newFormdata[key].valid = true;
            }
            if(key === 'local' || key === 'away'){
                newFormdata[key].config.options = teamOptions
            }
        }
        this.setState({
            matchId,
            formType: type,
            formdata: newFormdata,
            teams
        })
    }
    componentDidMount(){
        const playerId = this .props.match.params.is;
        if(!playerId){
            this.setState({
                formType:'Add player'
            })
        } else {

        }
    }
    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    submitForm(event){
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] =this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        if(formIsValid){

            // submin form
        } else {
            this.setState({
                formError: true
            })
        }
    }

    render() {
        return (
            <AdminLayout> 
                <div className="wditplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=>this.submitForm(event)}>
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element)=> this.updateForm(element)}
                            />
                            <FormField
                                id={'lastname'}
                                formdata={this.state.formdata.lastname}
                                change={(element)=> this.updateForm(element)}
                            />
                             <FormField
                                id={'number'}
                                formdata={this.state.formdata.number}
                                change={(element)=> this.updateForm(element)}
                            />
                            <FormField
                                id={'position'}
                                formdata={this.state.formdata.position}
                                change={(element)=> this.updateForm(element)}
                            />
                            <div className="succes_lable">{this.state.formSuccess}</div>
                            {this.state.formError ?
                                <div className="erorr_label">
                                    Something is wrong
                                </div>
                                : ''
                            }
                            <div className="admin_submit">
                                    <button onClick={(event)=>this.submitForm(event)}>
                                        {this.state.formType}
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </AdminLayout>
        );
    }
}

export default AddEditplayers;