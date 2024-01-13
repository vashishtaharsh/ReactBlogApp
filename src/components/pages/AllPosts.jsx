import React, { useEffect, useState } from 'react'
import appwriteService from '../../appwrite/config'
import { Container, PostCard } from "../index"

function AllPosts() {

    const [posts, setPosts] = useState([])

    const result = async () => {
        const data = await appwriteService.getPosts([])
        setPosts(data.documents)
    }
    useEffect(() => {
        result()
    }, [])

    if (posts.length !== 0) {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className="flex flex-wrap">
                        {
                            posts?.map((post) => (

                                <div className='p-2 w-1/4 h-20' key={post.$id}>
                                    <PostCard {...post} />
                                </div>

                            ))
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default AllPosts