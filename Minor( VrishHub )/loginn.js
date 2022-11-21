// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLJd_bEl_l_hV9FY9M-BIRmXmBUnAtD2s",
    authDomain: "login-936a8.firebaseapp.com",
    databaseURL: "https://login-936a8-default-rtdb.firebaseio.com",
    projectId: "login-936a8",
    storageBucket: "login-936a8.appspot.com",
    messagingSenderId: "888289367373",
    appId: "1:888289367373:web:44da37ed55809c9adad304"
  };


  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialization variables

  const auth= firebase.auth()
  const database = firebase.database()


  //Set up our register function 
  function signup (){
    full_name = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  }

  //Validate input field 
  if(validate_email(email) ==  false || validate_password(password)==false){
    alert('Email and Password is not correct!!')
    return 
    //Dont continue running the code 
  }
  if (validate_field(full_name)==false  )


  function validate_email(email){
        expression = /^[^@]+@\w+(\.\w+)+\w$/
        if(expression.test(email)==true){
            //Email is good 
            return true 

        }
        else{
            return false
        }
//Move on with auth
auth.createUserWithEmailAndPassword(email,password).then(function(){
var user= auth.currentUser
})

.catch(function(error){

})

    function validate_password(password){
        //Firebase only accepts lengths greater than 6

        if (password < 6){
            return false
        }
        else{
            return true
        }


    }

    function validate_field(field){

    } 
  }
  