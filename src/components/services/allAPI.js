// API for adding videos

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"


export const uploadVideoApi = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/videos`, reqBody)
}

// API to get uploaded videos
export const getUploadedVideoApi = async () => {
   return await commonAPI('GET', `${serverURL}/videos`, "")
}

// API to delete a video
export const deleteVideoapi = async (id) => {
   return await commonAPI('DELETE', `${serverURL}/videos/${id}`, {})
}

// API to add history
export const addToHistory = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/history`, reqBody)
}

// API  to get all videos from history
export const getAllVideoHistoryApi = async () => {
   return await commonAPI('GET', `${serverURL}/history`, "")
}

// API to delete a video from history
export const deleteVideoHistoryApi = async (id) => {
   return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

// API to add category
export const addCategoryApi = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/category`, reqBody)
}

// API to get all category
export const getAllCategoryApi = async () => {
   return await commonAPI('GET', `${serverURL}/category`, "")
}

// API to delete a category
export const deleteCategoryApi = async (id) => {
   return await commonAPI('DELETE', `${serverURL}/category/${id}`, {})
}

// API to get a particular video
export const getAVideo= async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// API to update the category
export const updateCategoryApi=async(id,reqBody)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}