        <script>
            //Login Script
            
            // Create a callback which logs the current auth state
            // function authDataCallback(authData) {
            // if (authData) {
            //     console.log("User " + authData.uid + " is logged in with " + authData.provider);
            // } else {
            //     console.log("User is logged out");
            // }
            // }
            
           
            
            $("#loginButton").on('click', function(event) {
                event.preventDefault();
                doLogin();
            })
            
            
            // Create a callback to handle the result of the authentication
            function authHandler(error, authData) {
                console.log(authData)
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                window.location.replace("./home.html");
            }
            }
            
            //Callback
            var ref = new Firebase("https://fiery-heat-4470.firebaseio.com");

            
            // Email/password combination
            function doLogin() {
                ref.authWithPassword({
                email    : $("#email").val(),
                password : $("#password").val(),
                }, authHandler);
                
            }
            
            
            

            // var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
            //     if (error) {
            //         alert(error);
            //         return;
            //     }
            //     console.log(user)
            //     if (user) {
            //         //User is already logged in
                    
            //         console.log('logged in')
            //     } else {
            //         // User has logged out
            //         console.log('logged out');
            //     }
                
            // });
            
            // function checkDeets() {
            //     var email = 
            //     console.log(email)
                
            //     var password = ;
            //     console.log(password)
            //     doLogin(email,password);
                
            // };
            
            // //Registration
            // function doLogin(email, password) {
            //      authClient.login('password', {
            //          email: email,
            //          password: password,
            //      });

            // };
            
            
        </script>