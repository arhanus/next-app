import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"
export const GET = async(request, { params }) => {
    const {slug} = params;

    
    try {
        connectToDb()
        const post = await Post.findOne({slug}) //post'u'database'den çektik.
        return NextResponse.json(post)
    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch posts!")
    }
}

export const DELETE = async(request, { params }) => {
    const {slug} = params;

    try {
        connectToDb()
        await Post.deleteOne({slug}) //post'u'database'den çektik.
        return NextResponse.json("post deleted")
    } catch (err) {
        console.log(err)
        throw new Error("Failed to delete posts!")
    }
}