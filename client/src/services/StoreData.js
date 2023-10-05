import axios from "axios";
import mockData from "./mockData/MockData.js";
const url = 'http://localhost:5000/api/posts'

class DataService {
    static getData() {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await axios.get(url)
                const data = response.data
                resolve(
                    data.map(item => ({
                        ...item,
                        bigDescription: mockData.text,
                       
                    }))
                )
            } catch(e) {
                 reject(e)
            }
        })
    }
    static postData(text) {
        return axios.post(url, {
            text
        })
    }
    static deleteData(id) {
        return axios.delete(`${url}${id}`)
    }
}
export default DataService