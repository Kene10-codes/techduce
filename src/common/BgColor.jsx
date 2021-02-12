import React from 'react'
import { Helmet } from 'react-helmet';

const BgColor = () => {
    return (
        <div>
            <Helmet>
                <style>{'body { background: #d0edf5; }'}</style>
            </Helmet>
        </div>
    )
}

export default BgColor
