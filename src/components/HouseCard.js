import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({home}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={home.photo}
                title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {home.street}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
                {home.city} - {home.state} - {home.zip_code}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Single family home priced at ${home.price}. {home.bed} beds and {home.bath} baths. Located in {home.city}'s South Denver neighborhood. Listing ID: 2922984512.  
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Favorite
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
        </Card>
    )
}