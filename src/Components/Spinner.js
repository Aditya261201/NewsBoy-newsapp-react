import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
        return (
            <div className="text-center">
            <img src={loading} alt="loading" width="5%" height="5%"/>
            </div>
        )
}
export default Spinner