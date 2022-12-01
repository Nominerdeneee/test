function NavBar(){
  const ctx = React.useContext(UserContext);
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/deposit/" id="navDeposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/withdraw/" id="navWithdraw" >Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/balance/" id="navBalance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/alldata/" id="navAllData">AllData</a>
          </li>
        </ul>
        <span className="navbar-text">
           <div id="name-display"></div>
        </span> 
      </div>
    </nav>

  );
}