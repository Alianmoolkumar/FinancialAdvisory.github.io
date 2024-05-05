function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
  
    const result = `
      <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: $${totalPayment.toFixed(2)}</p>
      <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
  
    document.getElementById('loanResult').innerHTML = result;
  }
  