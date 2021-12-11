import './sign-in.scss';
import React, { Component } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase';

export default class SignIn extends Component {

    state ={
        email: '',
        password: '',
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className='sign-in' >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} 
                    label='email' value={this.state.email} required/>
                    <FormInput name='password' type='password' handleChange={this.handleChange} 
                    label='password' value={this.state.password} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
