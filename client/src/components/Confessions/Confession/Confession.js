import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { deleteConfession } from "../../../actions/confessions";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

const Confession = ({ confession, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardHeader title={confession.name+":"} style={{color: "rgba(0,0,0, 0.60)"}}>
        <Typography
          className={classes.title}
          variant="h6"
          gutterBottom
        >{confession.name}</Typography>
      </CardHeader>
      <div className={classes.overlay2}>
        <Button size="small" onClick={() => setCurrentId(confession._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          "{confession.content}"
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteConfession(confession._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <div className={classes.overlay}>
          <Typography variant="body2">
            {moment(confession.createdAt).fromNow()}
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default Confession;
