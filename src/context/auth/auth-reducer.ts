import { AuthState } from "./auth-provider";

type AuthActionType =
  | { type: "LOGIN_REQUEST" }
  | {
      type: "LOGIN_SUCCESS";
      payload: { user: { name: string; email: string }; token: string };
    }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "LOGOUT" }
  | { type: "REGISTER_REQUEST" }
  | {
      type: "REGISTER_SUCCESS";
      payload: { user: { name: string; email: string }; token: string };
    }
  | { type: "REGISTER_ERROR"; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
