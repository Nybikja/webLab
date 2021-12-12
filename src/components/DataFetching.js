import React, { useState } from 'react'
import ImageCard from './ImageCard';
import itemsCatalog from '../static/itemsCatalog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function DataFetching({items}) {

    const [data] = useState(itemsCatalog);
    const classes = useStyles();

    return (
        <div>
            <ul>
                {
                    <div className={classes.root}>
                        {items.map(item => (<ImageCard extended={false} item={ item }/>))}
                        {data.length === 0 && <span>No records found to display!</span>}
                    </div>
                }
            </ul>
        </div>
    )
}



export default DataFetching
