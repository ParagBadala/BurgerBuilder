/**
 * return class based component need to use lifecycle hooks, can keep functional componenet also and use
 * useEffect react hook.
 * In this we are calling interceptor in constructor as componentDidMount will be called after the 
 * child component get render i.e all the lifecycle hooks of child component is also ran so
 * in this case we can either call the interceptor in componentWillMount(which will be deprecated in future)
 * or constructor. 
 * But current using ComponentWillMount   
 */

import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({error:null});
                return request
            })
            axios.interceptors.response.use(res=>res,error => {
                this.setState({error:error})
            })
        }

        componentDidMount() {
        }

        componentDidUpdate() {
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null}
                </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler