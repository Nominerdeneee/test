function Deposit(){
  const user = React.useContext(UserContext);
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState(0);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function balanceDeposit(){
    if (!validate(depositAmount,       'balance'))     return;

    user.balance += parseInt(depositAmount);

    // write new balance to mongoDB
    const url = `/account/${user.email}/deposit/${depositAmount}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();

    console.log("Your current balance: $" + user.balance);
    setShow(false);
    return user.balance;
  }

  function clearForm(){
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (
        <>
        Balance: ${user.balance}<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Enter amount to Deposit" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={balanceDeposit}> Deposit</button>
        </>
      ):(
        <>
        <h5>Success! Remaining balance: ${user.balance}</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
        </>
      )}
    />
  )
};