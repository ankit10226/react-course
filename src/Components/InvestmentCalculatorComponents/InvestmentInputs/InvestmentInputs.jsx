import React, { useState } from 'react'

const initialformData = {
  currentSavings:'',
  yearlySavings:'',
  expectedInt:'',
  investmentDuration:'' 
};

const InvestmentInputs = ({calculationData}) => {
    const [formData,setFormData] = useState(initialformData);
    const [errorBorder,setErrorBorder] = useState(false);

    const handleFormData = (e) =>{
      const {name,value} = e.target; 
      setFormData(prev =>({
          ...prev,
          [name]:value
      })); 
    }

    const submitFormHandler = (e) =>{
        e.preventDefault();         
        const isEmpty = Object.values(formData).some(value => value === '');

        if (isEmpty) {
          setErrorBorder(true);
          return;
        }else{
          setErrorBorder(false);
        }

        calculationData(formData);
    };

    const resetForm = () =>{
      setErrorBorder(false);
      setFormData(initialformData);
      calculationData('');
    };
    return (
      <form onSubmit={submitFormHandler}>
          <p className={`font-semibold text-red-500 my-2 ${errorBorder ? 'block' : 'hidden'}`}>Please Fill all the Fields</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
              <h3 className='font-semibold text-slate-500 my-2'>Current Savings (&#8377;) *</h3>
              <input type="number" name="currentSavings" id="currentSavings" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.currentSavings} onChange={handleFormData}/> 
          </div>
          <div>
              <h3 className='font-semibold text-slate-500 my-2'>Yearly Savings (&#8377;) *</h3>
              <input type="number" name="yearlySavings" id="yearlySavings" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.yearlySavings} onChange={handleFormData}/>
          </div>
          <div>
              <h3 className='font-semibold text-slate-500 my-2'>Expected Int(% per year) *</h3>
              <input type="number" name="expectedInt" id="expectedInt" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.expectedInt} onChange={handleFormData}/>
          </div>
          <div>
              <h3 className='font-semibold text-slate-500 my-2'>Investment Duration (years) *</h3>
              <input type="number" name="investmentDuration" id="investmentDuration" className='shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold' value={formData.investmentDuration} onChange={handleFormData}/>
          </div> 
        </div>
        <div className='text-right my-2'>
          <button type="button" className="rounded-md py-1 px-4 border bg-slate-400 text-white my-2" onClick={resetForm}>Reset</button>
          <button type="submit" className="rounded-md py-1 px-4 border bg-slate-400 text-white my-2">Calculate</button>
        </div>
      </form>
    )
}

export default InvestmentInputs
