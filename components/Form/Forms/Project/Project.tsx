import React from "react";
import styles from "./project.module.css";
import Button from "@/components/Button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextInput } from "../../FormFields/TextInput/TextInput";

type Inputs = {
    name: string;
    description: string;
    files: File[];
    status: string;
};

interface AddFileProps {
    handleAddFileAssignment: (formdata: any, reset: () => void) => void;
}
const AddProjectForm = ({ handleAddFileAssignment }: AddFileProps) => {
    const { register, handleSubmit, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>
        handleAddFileAssignment(data, reset);

    return (
        <>
            <form
                className={styles.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="font-bold text-lg">Add Project</h1>
                <hr />

                <div className="grid grid-cols-2 gap-8 mt-10">
                    <TextInput
                        register={{ ...register("name", { required: true }) }}
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                    />

                    <div>
                        <TextInput
                            register={{
                                ...register("files", { required: true }),
                            }}
                            label="File Upload"
                            name="files"
                            type="file"
                            accept="image/png, image/jpeg, .pdf,"
                            placeholder="Add Attachment"
                        />
                        <span className="text-gray-200 text-sm block">
                            (* pdf, jpeg, png, jpg *)
                        </span>
                    </div>
                    <>
                        <TextInput
                            register={{
                                ...register("description", { required: true }),
                            }}
                            label="Description"
                            name="description"
                            type="text"
                            placeholder="Description"
                        />
                    </>
                </div>

                <div className={styles.btn}>
                    <Button text="Submit" type="submit" />
                </div>
            </form>

            <ToastContainer />
        </>
    );
};

export default AddProjectForm;
