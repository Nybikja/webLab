import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import DataFetching from './DataFetching';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
    },
    filter:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));


export default function Catalog() {
    const classes = useStyles();


    const [searchText, setSearchText] = useState('');
    const [items, setPosts] = useState([])
    
    const [sortType, setSortType] = useState(null)

    const [loading, setLoading] = useState(true)

    const handleChange = value => {
        axios.get(`http://127.0.0.1:5000/search?title=${value}`).then(res => {
            setPosts(res.data)
        })
        setSearchText(value);
    }

    const onSort = sortType => {
        setSortType(sortType);
    }

    items.sort((a , b) => {
        if (sortType != null) {
            const isReserved = (sortType === 'asc') ? 1: -1;
            return isReserved * a.title.localeCompare(b.title)
        } 
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/items')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setTimeout(() =>{
                    setLoading(false)
                }, 2000)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (loading===true ? <div className="circular"><CircularProgress className="circularProgress" /></div> : 
        <div>
            <div className={classes.inputs}>
                <div className={classes.filter}>
                    <button className="buttonSort" onClick={() => onSort('asc')}>Sort by asc</button>
                    <button className="buttonSort" onClick={() => onSort('desc')}>Sort by desc</button>         
                </div>
                <input 
                className="inputSearch"
                type="text"
                placeholder="Type to search..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
                />
            </div>
            <div className="">
                <div className="">
                    <div className={classes.root}>
                        <DataFetching items={ items } />
                        {items.length === 0 && <span>No records found to display!</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
