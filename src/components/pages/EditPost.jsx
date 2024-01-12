import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../index'
import appwriteService from "../../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {

    const [posts, setPosts] = useState(null)

    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPosts(slug).then((post) => {
                if (post) {
                    setPosts(post)
                } else {
                    navigate('/')
                }
            })
        }
    }, [slug, navigate])

    return posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    ) : null
}

export default EditPost