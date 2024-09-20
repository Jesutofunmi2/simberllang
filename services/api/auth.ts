import { LoginRequest } from "@/types/auth";
import makeApiCall from ".";

export async function Login(payload: LoginRequest) {
    const response = await makeApiCall("/api/v1/auth/login", "post", payload);
    return response;
}
