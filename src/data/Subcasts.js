import axios from "axios";

const API = "http://localhost:8080/api/"

class Subcasts {

    async getAllSubcasts(){
        return await axios.get(API + "subcast").then((response)=>response.data)
    }

}

export default new Subcasts();