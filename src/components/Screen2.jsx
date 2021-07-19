import React, {useContext} from 'react'
import { Grid, TextField, Button , FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';

import {  makeStyles} from '@material-ui/core/styles';

import { ExpressionContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  operand: {
    height: 70
  },
  operandBox: {
    width: 90,
    height: 110,
    backgroundColor: '#b4e8f1',
    margin: '0 10px',
    
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
    
    
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
    
  },
  text: {
    fontSize: 50
  },
  operator: {
    fontSize: 50,
    paddingTop: 10
  },
  operatorItem:{
    fontSize: 20,
  },
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  }
}));

const Screen2 = () => {
  const classes = useStyles();
    
    const {
        operands,
        setOperands,
        operator,
        setOperator,
        getCalc,
        Operators
    } = useContext(ExpressionContext)
    
    const [op2, setOp2] = React.useState()
    const [result, setResult] = React.useState()
    
  
    const operand1 = operands.length>0 ?  operands[0] : ''
    const operand2 = operands.length > 1 ? operands[1] : ''
    
  
    const handleAdd = () => {
      let val = Number(op2)
      if (isNaN(val)) {
        alert('Please enter valid number')
        return 
      }
      let res = Number(result)
      if (!isNaN(res)) {
        setOperands([res, val])  
      } else {
        setOperands([operand1, val])
      }

      

    }
  
    React.useEffect(() => {
      if (operands.length == 2 && !!operator) {
         setResult(getCalc())
      }
    }, [operands])
  console.log(operator)
  return (
    <div className={ classes.container}>
      <Grid container spacing={2}>
        {console.log('>>>>> operands:',operands)}  
        <Grid item xs={12} >
          <div className={classes.row}>
            <div className={classes.operandBox}>
                <span className={classes.operatorItem}>{operand1}</span>
              </div>
              <div className={classes.operandBox}>
                <span className={classes.operatorItem}>{operand2}</span>
              </div>
              <div className={classes.operandBox}>
                <span className={classes.operatorItem}>{operator}</span>
              </div>
            </div>
            
          </Grid>
          
          <Grid item xs={12} >
            <span className={classes.text}>=</span>
          </Grid>

          <Grid item xs={12} style={{marginBottom: 70}}>
            <span className={classes.text}>{result}</span>
          </Grid>
          

          <Grid item md={4} xs={6} >
            <FormControl variant="outlined" fullWidth >
              <InputLabel shrink id="demo-simple-select-outlined-label">Operator</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={operator}
                onChange={e => {
                  setOperator(e.target.value)
                }}
                label="Age"
                style={{
                  height: 64
                }}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                {
                  Operators.map(one => <MenuItem value={one}>
                    <span className={classes.operator}>{one}</span>
                  </MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={6} >
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
              value={op2}
              onChange={e => {
                setOp2(Number(e.target.value))                
              }}
              fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="contained" color="primary" className="btn btn-add" fullWidth size="large" onClick={handleAdd}>
              Add operation
            </Button>
          </Grid>

        </Grid>
      </div>
    )
}


export default Screen2