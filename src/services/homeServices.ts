import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGPost = {
    id: number;
    location: string;
    account: string;
    avatar: string;
    photo: string;
    likes: number;
    description: string;
    hashTags: string;
    createTime: string;
};

type IGStory = {
    id: number;
    name: string;
    avatar: string;
};

// 產生一個reducer
export const homeApi = createApi({
    reducerPath: "homeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    endpoints: (builder) => ({
        // 第一個是回傳的參數型態，第二個是傳入的參數型態
        getIGPosts: builder.query<IGPost[], number | "all">({
            query: (id) => {
                if (id !== "all") {
                    return `posts/${id}`;
                }
                return "posts";
            },
        }),
        getIGStories: builder.query<IGStory[], number | "all">({
            query: (id) => {
                if (id !== "all") {
                    return `stories/${id}`
                }
                return "stories"
            }
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIGPostsQuery, useGetIGStoriesQuery } = homeApi
// export const homeApiReducer = homeApi.reducer