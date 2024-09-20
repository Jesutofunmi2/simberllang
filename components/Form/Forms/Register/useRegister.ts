import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setToken } from "@/services/api/token";
import { Register } from "@/services/api/auth";
import { useDispatch } from "react-redux";
import { user } from "../../../../services/redux/features/userSlice";
import { useState } from "react";

export const useRegister = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [inputType, setInputType] = useState("password");
    const [isLoading, setLoading] = useState(false);
    const [payloadData, setPayloadData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            let response = await Register(payloadData);
            const { token } = response.access_token;
            setToken(token);
            dispatch(user(response.data));
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
        inputType,
    };
};
