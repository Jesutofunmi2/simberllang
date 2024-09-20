import { toast } from "react-toastify";
import makeApiCall from ".";
import useSWR from "swr";

import { IProjectPayload } from "@/types/project";

export const addProject = async (payload: FormData | IProjectPayload) => {
    toast.loading("Submitting...");
    try {
        const res = await makeApiCall("/api/v1/projects", "post", payload);
        toast.dismiss();
        if (res) {
            toast.success("Project Created!");
        }
        return res;
    } catch (err) {
        toast.dismiss();
        toast.error("Request Failed!");
        return err;
    }
};
