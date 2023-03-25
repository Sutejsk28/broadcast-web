import React, { useEffect, useState } from 'react'
import Dropdown from '../components/Util/Dropdown'
import axios from 'axios'
import Subcasts from '../data/Subcasts'
import { useSelector } from 'react-redux'

// const subcasts = [
//     { id: 1, name: 'Subcast 1' },
//     { id: 2, name: 'Subcast 2' },
//     { id: 3, name: 'Subcast 3' },
//     { id: 4, name: 'Subcast 4' },
//     { id: 5, name: 'Subcast 5' },
//     { id: 6, name: 'Subcast 6' },
//   ]

  
const CreatePost = () => {

    const { user: currentUser } = useSelector((state) => state.auth);
    console.log(currentUser.authticationToken);

    const instance = axios.create({
        baseURL: 'http://localhost:8080/api/',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+ currentUser.authticationToken}
      });
    const [subcasts,setSubcasts] = useState([])

    useEffect(()=>{
        async function getSubcasts(){
            const res = await instance.get("subcast")
            setSubcasts(res.data)
        }
        getSubcasts()
    },[])

    let subcastName;
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [url, setUrl] = useState()
    //const [subcastName, setSubcastName] = useState("")
    const [post, setPost] = useState()

    function titleChangeHandler(event){
        setTitle(event.target.value)
        console.log(title);
    }

    function descriptionChangeHandler(event){
        setDescription(event.target.value)
        console.log(description);
    }

    function urlChangeHandler(event){
        setUrl(event.target.value)
        console.log(url);
    }

    function subcastNameHandler(selected){
        subcastName = selected
        console.log("subcast: " + subcastName);
    }
    
    async function createPostHandler(){
        setPost({
            postName: title,
            description: description,
            subcastName: subcastName,
            url: url
        })
        const response = await instance.post('posts', post)
        console.log(response);
    }

    return (

            
            <div className='center++ flex justify-center' >
                <div className="p-4 m-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                    <h1 className='text-2xl mb-4' >Create Post</h1>
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Title Post</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                placeholder="name"
                                onChange={titleChangeHandler} 
                                value={title}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Post Description</label>
                            <textarea 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
                                placeholder="description" 
                                onChange={descriptionChangeHandler}
                                value={description}
                                required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Url</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                                placeholder="url"
                                onChange={urlChangeHandler} 
                                value={url}
                                required />
                        </div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Subcast</label>
                        <Dropdown subcasts={subcasts} subcastNameHandler={subcastNameHandler} />
                        <button type="submit" onSubmit={createPostHandler} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                    </form>
                </div>
            </div>


    )
}

export default CreatePost
