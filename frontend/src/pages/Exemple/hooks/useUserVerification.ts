import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Method } from "axios";

// Tipando as interfaces fora do UVservice para evitar o erro de 'private name'
interface Req {
    username: string;
}

interface Res {
    message: string;
}

const UVservice = (username: string) => {
    const config = {
        endpoint: "/example/verify",
        method: "POST" as Method,
    };

    return useFetch<Req, Res>({ config, req: { username } });
}

const useUsernameVerification = () => {
    const [username, setUsername] = useState("");
    const { loading, data, error, fetchData: handleVerify } = UVservice(username);

    return {
        username,
        setUsername,
        loading,
        data,
        error,
        handleVerify,
    };
}

export default useUsernameVerification;
