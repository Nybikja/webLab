import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SecondPage from './SecondPage';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${'https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/259457219_5351311361550036_6428190075378303139_n.png?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hbIvu-TsckwAX_1jbgw&_nc_ht=scontent.flwo3-1.fna&oh=0e63673a74d7790ddc1fda4f1ddad881&oe=61A37D11'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-50px',
        width: '90%',
        margin: '0 auto',
    },
    title: {
        fontSize: '50px',
        color: '#fff',
    },
    sizeParagraph: {
        fontSize: '24px',
        color: '#fff',
    },
}));

export default function Intro() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.main}>
                <div>
                    <h1 className={classes.title}>Rozetka</h1>
                    <p className={classes.sizeParagraph}> 
                    ROZETKA – самый большой онлайн-ритейлер в стране.  <br/>
                    С 2005 года мы воплощаем маленькие мечты и грандиозные планы миллионов людей. <br/>
                    У нас можно найти буквально все.<br/> 
                    <h1>Welcome!</h1> 
                    </p>
                </div>
            </div>
            <SecondPage />
        </div>
        
    );
}

