import React, { createContext, useReducer } from "react";
import createDataContext from "./createDataContext";

// Create context with default value
const tempValue = [
    { id: Math.floor(Math.random() * 999999), title: 'title 1', content: 'content'},
    { id: Math.floor(Math.random() * 999999), title: 'title 2', content: 'content'},
    { id: Math.floor(Math.random() * 999999), title: 'title 3', content: 'content'}]

function reducer(state, action){
    switch(action.type) {
        case 'add_blogPost':
            const toAdd = { id: Math.floor(Math.random() * 999999), title: `title ${state.length+1}`, content: "content"}
            return [...state, toAdd]
        case '':
            return [...state]
        default:
            return state
    }
}

function addBlogPost(dispatch) {
    return () => {
        dispatch({type: 'add_blogPost'})
    }
}

function deleteBlogPost(dispatch) {
    return () => {
        dispatch({type: 'delete_blogPost'})
    }
}

export const { Context, Provider } = createDataContext(reducer, { addBlogPost }, tempValue)
