import { useMemo, useReducer } from "react";
import { AuthContext } from "./auth-context";
import { authReducer } from "./auth-reducer";
import { HttpAdapter } from "@/lib/http-adapter";
import envs from "@/lib/envs";
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
};

interface AuthProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const http = useMemo(() => new HttpAdapter(envs.apiUrl!), []);

  const login = async (email: string, password: string) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const response = await http.post("/auth/login", { email, password });
      dispatch({ type: "LOGIN_SUCCESS", payload: response });
    } catch (error: unknown) {
      dispatch({ type: "LOGIN_ERROR", payload: (error as Error).message });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: "REGISTER_REQUEST" });
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: login,
        register: register,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
