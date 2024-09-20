import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import styles from "./register.module.css";
import { useRegister } from "./useRegister";


const RegisterForm = () => {
   const {
    revealPassword,
    handleSubmit,
    setPayloadData,
    inputType
   } = useRegister();
   
    return (
        <div className="min-h-screen bg-blue-400 p-4 md:p-16">
            <div className="flex items-center justify-center text-brown gap-10">
                <hr className="border-brown border-[2px] w-20" />
                <h1 className="font-bold text-3xl">Register</h1>
                <hr className="border-brown border-[2px] w-20" />
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-10">
                <p className="text-yellow text-center text-lg">
                    Sign up to create an account.
                </p>
                <>
                <span className={styles.inputWrap}>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            onChange={(e) =>
                                setPayloadData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                            className={styles.inputfield}
                        />
                    </span>
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
                    <span className={styles.inputWrap}>
                        <input
                            type={inputType}
                            name="password"
                            required
                            placeholder="confirm password"
                            onChange={(e) =>
                                setPayloadData((prev) => ({
                                    ...prev,
                                    password_confirmation: e.target.value,
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
              SIGN UP
            </button>
            </div>
            </form>
            <ToastContainer autoClose={5000} />
        </div>
    );
};

export default RegisterForm;
