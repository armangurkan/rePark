import React, {useContext} from 'react';
import UserContext from '../../contexts/UserContext'
import Button from '@material-ui/core/Button';

export const OfferParkingSpotButton = props => {
    const [user, setUser] = useContext(UserContext);
    const renComponent = (user.id === )? (<Button></Button>) : <div></div>
    return(
        {renComponent}
    )
};
