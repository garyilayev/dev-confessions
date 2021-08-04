import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,145,255, 1)',
  },
  heading2: {
    margin: '10px',
    color: 'rgba(0,90,200, 1)',
  },
  [theme.breakpoints.down('sm')] : {
    main: {
      flexDirection: "column-reverse",
    }
  }
}));