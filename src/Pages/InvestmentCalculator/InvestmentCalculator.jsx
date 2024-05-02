import React from 'react'
import InvestmentInputs from '../../Components/InvestmentCalculatorComponents/InvestmentInputs/InvestmentInputs'
import InvestmentForm from '../../Components/InvestmentCalculatorComponents/InvestmentForm/InvestmentForm'

const InvestmentCalculator = () => {
  return (
    <div className="font-sans w-screen h-screen flex justify-center items-center flex-col">
        <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">
            <InvestmentInputs />
        </div>
        <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">            
            <InvestmentForm />
        </div>
    </div>
    )
}

export default InvestmentCalculator
