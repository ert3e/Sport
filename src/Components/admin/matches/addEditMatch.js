import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../ui/formFields';
import { validate } from '../../ui/misc';

class AddEditMatch extends Component {
    state = {
        matchId:'',
        formType:'',
        formError: false,
        formSuccess:'',
        teams:[],
        formdata:{
            date:{
                element: 'input',
                value: '',
                config:{
                    label: 'Event date',
                    name: 'date_input',
                    type: 'date',

                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage: '',
                showLable: true
            },
            local:{
                element: 'select',
                value: '',
                config:{
                    label: 'Select a local team',
                    name: 'select_local',
                    type: 'select',
                    options: [{ key: 'Yes', value: 'Yes'}, {key: 'No', value: 'No'}]
                },
                validation:{
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLable: false
            },
            resultLocal:{
                element: 'input',
                value: '',
                config:{
                    label: 'Result local',
                    name: 'result_local_input',  
                    type: 'text',

                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showLable: false
            },
            resultAwey:{
                element: 'input',
                value: '',
                config:{
                    label: 'Result local',
                    name: 'result_local_input',  
                    type: 'text',

                },
                validation:{
                    required: true
                },
                valid: false,
                validationMessage:'',
                showLable: false
            },
        }
    }
    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <form onSubmit={(event)=>this.submitForm(event)}>
                        <FormField
                            id={'date'}
                            formdata={this.state.formdata.date}
                            change={(element)=> this.updateForm(element)}
                        />
                        <div className="select_team_layout">
                            <div className="label_inputs">Local</div>
                            <div className="wrapper">
                                <div className="left">
                                    <FormField
                                        id={'local'}
                                        formdata={this.state.formdata.local}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        id={'resultLocal'}
                                        formdata={this.state.formdata.resultLocal}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                            </div>
                        </div>
                        <FormField
                            id={'local'}
                            formdata={this.state.formdata.local}
                            change={(element)=> this.updateForm(element)}
                        />
                    </form>
                </div>
                            
            </AdminLayout>
        );
    }
}

export default AddEditMatch;