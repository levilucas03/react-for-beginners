import React from 'react';
import {Fragment} from 'react'

class StorePicker extends React.Component {

    render() {
        return (
            <Fragment>
                <p>So Far so good</p>
                <form action="" className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input required type="text" placeholder="Store Name" />
                    <button type="submit">Visist Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;