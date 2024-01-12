const conf = {
    appWriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appWriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appWriteDatabseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID)
}

export default conf