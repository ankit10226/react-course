import React from 'react'

const InvestmentTable = ({formData}) => { 
  if (formData.length == 0) {
    return(
      <h4 className='font-semibold text-slate-500 my-2 text-center'>No Record To Show</h4>
    )
  }

  let yearlyData = [];
  let currentSavings = parseFloat(formData.currentSavings);
  const yearlySavings = parseFloat(formData.yearlySavings);
  const expectedInt = parseFloat(formData.expectedInt) / 100; 
  const investmentDuration = parseFloat(formData.investmentDuration);
  
  for (let i = 0; i < investmentDuration; i++) {
    const yearlyInterest = currentSavings * expectedInt;
    currentSavings += yearlyInterest + yearlySavings;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlySavings: yearlySavings
    });
  }
  
  // console.log(yearlyData);
  return (
    <div>
      <table className='table-fixed w-full'>
        <thead className='font-semibold text-slate-500'>
          <tr>
            <td>Year</td>
            <td>Total Savings</td>
            <td>Interest(Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody className='text-slate-500'>
          {yearlyData.map(data => (
            <tr>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear}</td>
              <td>{data.yearlyInterest}</td>
              <td>{data.savingsEndOfYear - parseFloat(formData.currentSavings) - (data.yearlySavings * data.year)}</td>
              <td>{parseFloat(formData.currentSavings) + (data.yearlySavings * data.year)}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default InvestmentTable
