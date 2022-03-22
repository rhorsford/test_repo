import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1",
    headers: {
        'Content-type': 'application/json',
        'app-id': '61f14adf9cec5414e97ff3a0'
    }
});

const findAll = async () => {
    const response = await instance.get("/user");
    return response.data;
}

const deleteRecord = async (id) => {
    await instance.delete(`/user/${id}`);
}

const createRecord = async ({lname, fname, email}) => {
    await instance.post('/user/create', {lastName: lname, firstName: fname, email: email});

}

const AxiosService = {
    findAll,
    deleteRecord,
    createRecord
}

export default AxiosService;