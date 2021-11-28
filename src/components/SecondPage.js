import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import itemsCatalog from '../static/itemsCatalog';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
}));


export default function () {
    const classes = useStyles();

    const [visible, setVisible] = useState(2);

    const loadMore = () => {
        setVisible(visible + 2)
    }

    const renderingCard = (item) =>{
        return(
            <div>
                <ImageCard item={item}/>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            {itemsCatalog.slice(0, visible).map(item => renderingCard(item))}
            {visible < itemsCatalog.length && (
                <button className="buttonSecondPage" onClick={loadMore}>View more</button>
            )}
        </div>
    );
}