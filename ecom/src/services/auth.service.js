import HttpService from "./http-service";

class AuthService extends HttpService{
    login = async(data) => {
        try{
            let response = await this.postRequest("login", data);
            let result = response.result;

            let local_user = {
                name: result.user.name,
                email: result.user.email,
                role: result.user.role,
                user_id: result.user._id
            };
            localStorage.setItem("mern15_token", result.access_token);
            // localStorage.setItem("mern15_user", JSON.stringify(local_user))
            
            return local_user;
        } catch(error) {
            throw error;
        }
    }
    getLoggedInUser = async() => {
        try {
            let response  = await this.getRequest('/me', {
                login: true
            })
            return response;
        } catch(error) {
            throw error;
        }
    }
}
export const auth_svc = new AuthService();
export default AuthService;