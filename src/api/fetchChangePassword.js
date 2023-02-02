

const fetchChangePassword = async (email) => {
    try {
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            data: {
              client_id: import.meta.env.VITE_API_AUTH0_CLIENT_ID,
              email: email,
              connection: 'Username-Password-Authentication'
            }
          };
          
          const res = await fetch(`https://${import.meta.env.VITE_API_AUTH0_DOMAIN}/dbconnections/change_password`, options)

          console.log(res)
    } catch (error) {
    console.error(error)
    }
}

export default fetchChangePassword
