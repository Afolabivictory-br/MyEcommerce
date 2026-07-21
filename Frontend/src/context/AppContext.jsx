import { createContext, useEffect, useState } from "react";
import { getCookie } from "../utils/getCookies";


export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
    // Call Django endpoint to set CSRF cookie
    fetch("http://127.0.0.1:8000/get_csrf/", {
      credentials: "include" // important so cookies are stored
    });
    }, []);

    async function login(username, password) {
        try {
            const res = await fetch('http://127.0.0.1:8000/signin/', 
                    {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        "X-CSRFToken": getCookie("csrftoken")
                     },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                    credentials: 'include' // Include cookies (e.g., accessToken) in the request
            })
       
            const data = await res.json()
            console.log(data);

            if(res.ok){
                setIsLoggedIn(true)
                setUser(data)
                return {
                    login: true,
                    message:'Login succesful',
                
                }
            }

             else{
                return {
                    login: false,
                    message:'Invalid credentails'
                }
            }
        }

         catch(error){
            console.log(error)
        }
    }

    const value = {
        login,
        isLoggedIn,
        setIsLoggedIn,
        user
    
    }

    return (
        <AppContext.Provider  value={value}>
            {props.children}
        </AppContext.Provider>
    )
    
}

export default AppContextProvider