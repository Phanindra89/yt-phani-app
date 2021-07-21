import {useState,useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm])
    const search = async formValues => {
        const response = await youtube.get('/search', {params:{
            q:formValues
        }});
        setVideos(response.data.items);
    }
    return [videos, search];
}

export default useVideos