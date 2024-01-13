import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config"
import { Container, PostCard } from '../index'

function Home() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const result = async () => {
        const data = await appwriteService.getPosts([])
        setPosts(data.documents)
        // console.log(data.documents);
    }
    useEffect(() => {
        result()
    }, [])

    if (loading) {
        <h1>Loading....</h1>
    }

    if (posts) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts?.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


}

export default Home