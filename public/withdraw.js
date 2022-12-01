function Withdraw(){

  const user = React.useContext(UserContext);
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [withdrawAmount, setWithdrawAmount] = React.useState(0);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (!insufficient(withdrawAmount, user.balance))
      return false;
    return true;
  }

  function insufficient(withdrawAmount, balance){
    if (withdrawAmount > balance){
      setStatus("Error: Insufficient Funds");
      return false;
    }
    return true;
  }

  function balanceWithdraw(){
    if (!validate(withdrawAmount, 'balance'))           return;

    user.balance -= withdrawAmount;

    // write new balance to mongoDB
    const url = `/account/${user.email}/withdraw/${withdrawAmount}`;
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
      header="Withdraw"
      status={status}
      body={show ? (
        <>
        Balance: ${user.balance}<br/>
        <input type="number" className="form-control" id="balance"
        placeholder="Enter amount to withdraw" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={balanceWithdraw}> Withdraw</button>
        </>
      ):(
        <>
        <h5>Complete! Your current balance: ${user.balance}</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more money</button>
        </>
      )}
    />
  )
};