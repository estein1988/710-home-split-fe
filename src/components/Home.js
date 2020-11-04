import React, { Component } from 'react'
import GoogleMap from './GoogleMap'
import CardsContainer from './CardsContainer'
import MortgageRates from './MortgageRates'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {Link as RouterLink} from 'react-router-dom'
import {BrowserRouter as Route} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },    
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
    })
    ((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
    }}
        {...props}
    />
    ));

    const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
        },
    },
    }))(MenuItem);

export default class Home extends Component {

    state = {
        anchorEl: null,
        setAnchorEl: !null
    }
    
    render(){

        const handleClick = (event) => {
            this.setState({anchorEl: (event.currentTarget)})
        };
    
        const handleClose = () => {
            this.setState({setAnchorEl: null});
        };

        return(
            <div>
            <div className={useStyles.root}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                        <div>
                <MenuIcon            
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleClick}>
                </MenuIcon>

                <StyledMenu
                    id="customized-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={handleClose}
                >
                <StyledMenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                        <ListItemText primary="Home Listings" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                        <ListItemText primary="Mortgage Rates" />
                </StyledMenuItem>

                <StyledMenuItem>
                <ListItemIcon>
                    <InboxIcon path='/rates' fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
                </StyledMenuItem>
                </StyledMenu>
                </div>
                    </IconButton>
                        <Typography variant="h6" className={useStyles.title}>
                            Home Listings
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
                <h3>Welcome Back {this.props.user.username}</h3>
            <div>
                <CardsContainer 
                    allHomes={this.props.allHomes} 
                    user={this.props.user} 
                    favorites={this.props.favorites}
                    clickAction={this.props.clickAction}
                    deleteFavorite={this.props.deleteFavorite}
                />
            </div>

            <div className="googleMap">
                <GoogleMap 
                    allHomes={this.props.allHomes} 
                />
            </div>

            <Route path='/rates'>
                <MortgageRates />
            </Route>

        </div>
        )
    }
}