import React, {useContext} from 'react';
import FaceIcon from '@material-ui/icons/Face';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export const UserMenuButton = props => {
    const classes = useStyles();
    // const dispatchUser = useContext(DispatchUserContext);
    // const userState = useContext(UserContext);
    return (
        <Fab color="primary" aria-label="user" className={classes.margin}>
            <FaceIcon />
        </Fab>
    )
};
