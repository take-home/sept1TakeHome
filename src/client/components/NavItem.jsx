import React from 'react';
import * as actions from '../actions/actions';
import { useDispatch } from 'react-redux';
import { teal } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BlurOnIcon from '@material-ui/icons/BlurOn';

const useStyles = makeStyles((theme) => ({
  floatRight: {
    display: 'inline',
    float: 'right',
  },
  name: {
    position: 'absolute',
    left: '50px',
  },
  discount: {
    position: 'absolute',
    left: '170px',
  },
  floatLeft: {
    position: 'absolute',
    left: '220px',
  },

}));

export default function NavItem({topic, fav}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
      <ListItem button onClick={(e) => dispatch(actions.addFav(topic))}>
        <BlurOnIcon color="inherit" className={classes.floatRight}/>
        <span className={classes.name}>{topic}</span>
        <span className={classes.discount}>{topic === 'Sale Product'? '50% off' : ''}</span>
        <ArrowForwardIosIcon color="inherit" className={classes.floatLeft}/>
      </ListItem>
  );
}
