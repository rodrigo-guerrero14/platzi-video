import { useEffect, useState } from 'react'
import data from '../initialState.json'

const useInitialState = (API) =>{
    const [videos, setVideos] = useState(data)
    
    return {videos, setVideos}
}
export default useInitialState