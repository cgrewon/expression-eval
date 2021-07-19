import React, {useContext} from 'react'
import { Grid, TextField, Button , } from '@material-ui/core';

import { createTheme, ThemeProvider , makeStyles} from '@material-ui/core/styles';

import { ExpressionContext } from '../Context';
const useStyles = makeStyles((theme) => ({
    operand: {
      height: 70
    }
  }));
  

const Screen1 = () => {
    const classes = useStyles();
    const {
        operands,
        setOperands,
        operator,
        setOperator,
        getCalc,
        Operators
    } = useContext(ExpressionContext)
    
    const [value, setValue] = React.useState(0)


    const handleAdd = () => {
        let val = Number(value)
        if (isNaN(val)) {
            alert('Please enter valid number!')
          return 
        }

        setOperands([val])

        setTimeout(() => {
            window.location.href = '/screen2'    
        }, 100)

        
    }

    return(
        <Grid container spacing={2}>
            <Grid item md={12} className='titleContainer'>
            <h1>Expression <br/> Evaluator</h1>
            </Grid>
            <Grid item md={6} xs={12}>
            
            <TextField
                id="outlined-basic"
                inputProps={{
                style: {
                    height: 27
                }
                }}
                className={classes.operand}
                label="Please enter a number"
                variant="outlined"
                value={value}
                onChange={e => {
                    console.log('text:', e.target.value)
                    let text = e.target.value
                    setValue(text)
                }}
                fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    className="btn btn-add"
                    fullWidth
                        size="large"
                    onClick={handleAdd}>
                    Add number
                </Button>
            </Grid>

        </Grid>
    )
}


export default Screen1