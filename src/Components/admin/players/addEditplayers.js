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
    render() {
        return (
            <AdminLayout> 
                <div className="wditplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=>this.submitForm(event)}>
                            
                        </form>
                    </div>
                </div>
                
            </AdminLayout>
        );
    }
}

export default AddEditplayers;