function Spa() {

// firebase key
const firebaseConfig = {
  apiKey: "AIzaSyB_sR3uC0bp9UgXPx_W2DJL-ipOC38gyQ4",
  authDomain: "badbank-50082.firebaseapp.com",
  databaseURL: "https://badbank-50082-default-rtdb.firebaseio.com",
  projectId: "badbank-50082",
  storageBucket: "badbank-50082.appspot.com",
  messagingSenderId: "5759003941",
  appId: "1:5759003941:web:3b309f5b78a63d843efecc"

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
