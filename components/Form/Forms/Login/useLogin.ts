import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setToken } from "@/services/api/token";
import { Login } from "@/services/api/auth";
import { useDispatch } from "react-redux";
import { user } from "../../../../services/redux/features/userSlice";
import { useState } from "react";

export const useLogin = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputType, setInputType] = useState("password");
    const [isLoading, setLoading] = useState(false);
    const [payloadData, setPayloadData] = useState({
        email: "",
        password: "",
    });

    const revealPassword = () => {
        if (inputType === "password") {
            setInputType("text");
        } else if (inputType === "text") {
            setInputType("password");
        }
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        setLoading(true);
        e.preventDefault();
        try {
            let response = await Login(payloadData);
            const token  = response?.access_token;
            setToken(token);
            console.log(response?.data)
            dispatch(user(response?.data));
            toast.loading("Signing you in...");
            router.push("/dashboard");
            setLoading(false);
            toast.dismiss();
        } catch (err: any) {
            setLoading(false);
            if (err) {
                toast.error(err.message);
            }
        }
    };
  return {
    revealPassword,
    handleSubmit,
    payloadData,
    isLoading,
    setPayloadData,
    inputType
  }
}
