import { useReducer } from "react";
import { AuthContext } from "./auth-context";
import { authReducer } from "./auth-reducer";

export interface AuthState { 
    user: { name: string; email: string } | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}


const AUTH_INITIAL_STATE: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
}


interface AuthProviderProps {
    children: React.ReactNode | React.ReactNode[];
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [ state, dispatch ] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const login = async (email: string, password: string) => {
        dispatch({ type: "LOGIN_REQUEST" });
    }

    const register = async (name: string, email: string, password: string) => {
        dispatch({ type: "REGISTER_REQUEST" });
    }

    const logout = async () => {
        dispatch({ type: "LOGOUT" });
    }
    return ( 
        <AuthContext.Provider value={{
            ...state, 
            login: login,
            register: register,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}