import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error, info)
    }
    render() {
        if (this.state.hasError) {
            return <div className='row errorBoundary'>
                <div className='col-lg-12'>
                    <h2><span className='fa fa-exclamation-circle '></span></h2>
                    <h4>Oops! Something went wrong.</h4>
                </div>
            </div>
        }
        return this.props.children

    }
}

export default ErrorBoundry
