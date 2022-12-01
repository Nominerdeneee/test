function Spa() {

// firebase key
const firebaseConfig = {
  apiKey: "AIzaSyCtAtaBkGUffeC2mbLpgtdF4qWn0mug9ZI",
  authDomain: "bankapp-92b84.firebaseapp.com",
  databaseURL: "https://bankapp-92b84-default-rtdb.firebaseio.com",
  projectId: "bankapp-92b84",
  storageBucket: "bankapp-92b84.appspot.com",
  messagingSenderId: "496662247579",
  appId: "1:496662247579:web:5060ceacf1b7fa4a312e3e"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// handle on firebase db
const db = firebase.database();

// functions for changing user data
const setAll = (name, email, password, balance) => {
  setUser({...user, name: name, email: email, password: password, balance: balance})
  console.log('setAll was called');
}

  const initUser = {
    balance: 1000,
    setAll: setAll
  }
  const [user, setUser] = React.useState(initUser);

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={user}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );

  }
ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
