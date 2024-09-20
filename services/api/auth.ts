import { LoginRequest } from "@/types/auth";
import makeApiCall from ".";

export async function Login(payload: LoginRequest) {
    const response = await makeApiCall("api/v1/auth/login", "post", payload);
    return response;
}

export async function Register(payload: LoginRequest) {
    const response = await makeApiCall("api/v1/auth/register", "post", payload);
    return response;
}