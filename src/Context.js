import React, { createContext, useState, useEffect } from 'react'


const ExpressionContext = createContext()

const ContextProvider = ({ children }) => {
    
    const [operands, setOperands] = useState([])
    const [operator, setOperator] = useState(null)
    const Operators = ['*', '+', '-', '/']
    
    React.useEffect(() => {
        console.log('useEffect didmount : ')
        let operandsStr = localStorage.getItem('operands')
        if (operandsStr) {
            setOperands(JSON.parse(operandsStr)) 
        }
        let operator = localStorage.getItem('operator')
        setOperator(operator)

    }, [])

    React.useEffect(() => {
        localStorage.setItem('operands', JSON.stringify(operands))

    }, [operands])

    React.useEffect(() => {
        localStorage.setItem('operator', operator)
        
    }, [operator])


    const getCalc = () => {
        if (!operator) {
            return 'Nil operator'
        }

        if (!operands || operands.length < 2) {
            return 'Invalid operands'
        }

        if (operator == '*') {
            return Number(operands[0]) * Number(operands[1])
        }
        if (operator == '+') {
            return Number(operands[0]) + Number(operands[1])
        }
        if (operator == '-') {
            return Number(operands[0]) - Number(operands[1])
        }
        if (operator == '/') {
            return Number(operands[0]) / Number(operands[1])
        }
        return 'Unknown Operator'
    }

    

    return (
        <ExpressionContext.Provider value={{
            operands,
            setOperands,
            operator,
            setOperator,
            getCalc,
            Operators
        }}>
            {children}
        </ExpressionContext.Provider>
    )
}


export { ExpressionContext, ContextProvider }

