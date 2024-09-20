import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import styles from "./login.module.css";
import { useLogin } from "./useLogin";

const LoginForm = () => {
    const { revealPassword, handleSubmit, setPayloadData, inputType } =
        useLogin();

    return (
        <div className="min-h-screen bg-blue-400 p-4 md:p-16">
            <div className="flex items-center justify-center text-brown gap-10">
                <hr className="border-brown border-[2px] w-20" />
                <h1 className="font-bold text-3xl">Login</h1>
                <hr className="border-brown border-[2px] w-20" />
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <p className="text-yellow text-center text-lg">
                    Sign in to your account to continue.
                </p>
                <>
                    <span className={styles.inputWrap}>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            onChange={(e) =>
                                setPayloadData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                            className={styles.inputfield}
                        />
                    </span>
                    <span className={styles.inputWrap}>
                        <input
                            type={inputType}
                            name="password"
                            required
                            placeholder="Password"
                            onChange={(e) =>
                                setPayloadData((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                            className={styles.inputfield}
                        />
                        {inputType === "password" ? (
                            <AiOutlineEye
                                className={styles.revealIcon}
                                onClick={() => revealPassword()}
                            />
                        ) : (
                            <AiOutlineEyeInvisible
                                className={styles.revealIcon}
                                onClick={() => revealPassword()}
                            />
                        )}
                    </span>
                </>
                <div className="text-center mt-12">
                    <button type="submit" className={styles.loginBtn}>
                        SIGN IN
                    </button>
                </div>
            </form>
            <ToastContainer autoClose={5000} />
        </div>
    );
};

export default LoginForm;
