import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))

export default function HomeCard({home, user, clickAction}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

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
            <IconButton aria-label="add to favorites">
                <FavoriteIcon onClick={() => clickAction(home, user)} />
            </IconButton>
            <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Favorited By:</Typography>
                        <Typography paragraph>
                            {home.users.map(user => user.username).join(', ')}
                        </Typography>
                    </CardContent>
        </Collapse>
        </Card>
    )
}