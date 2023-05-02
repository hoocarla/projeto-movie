import axios from "axios";

const url = axios.create({
    baseURL:"http://localhost:3000",
    headers:{
        "Content-Type": "application/json", //o cabeçalho Content-Type indica ao servidor que o corpo da solicitação será em formato JSON.
    }
});


export default url;