import { useEffect } from "react";

function Classroom() {
    useEffect(() => {
        window.location.href = "https://inglesadm.com.br/moodle/login/index.php";
    }, []);

    return <p>Redirecionando para o Moodle...</p>;
}

export default Classroom;
