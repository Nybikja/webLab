import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import items from '../static/items';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '117vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(3);

    const loadMore = () => {
        setVisible(visible + 3)
    }

    const renderingCard = (item) =>{
        return(
            <div>
                <ImageCard extended={ true } item={item}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {items.slice(0, visible).map(item => renderingCard(item))}
            {visible < items.length && (
                <button className="buttonSecondPage" onClick={ loadMore }>View more</button>
            )}
        </div>
    );
}
