import React, { useState } from 'react'
import InvestmentInputs from '../../Components/InvestmentCalculatorComponents/InvestmentInputs/InvestmentInputs'
import InvestmentTable from '../../Components/InvestmentCalculatorComponents/InvestmentTable/InvestmentTable'

const InvestmentCalculator = () => {
    const [formData,setFormData] = useState('');
    const getCalculationData = (formData) =>{
        // console.log(formData);
        setFormData(formData)
    };
    return (
        <div className="font-sans w-screen h-screen flex justify-center items-center flex-col">
            <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">
                <InvestmentInputs calculationData={getCalculationData}/>
            </div>
            <div className="shadow-lg border w-2/3 p-3 rounded-md m-1">            
                <InvestmentTable formData={formData}/>
            </div>
        </div>
    )
}

export default InvestmentCalculator
