"use client";
import React, { createContext, useContext, useReducer } from "react";


const initialState = {
    cursorVariant: "default",
    cursorText : "a"

}

const cursorContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case "HoverNavbar":
            return { ...state, cursorVariant: "navbar" };
        
        case "HoverSite":
            return { ...state, cursorVariant: "text", cursorText: "Visit Site" };
        
        case "HoverGithub":
            return { ...state, cursorVariant: "text", cursorText: "Github" };
        
        case "HoverHeading":
            return { ...state, cursorVariant: "heading" };
        
        case "HoverName":
            return { ...state, cursorVariant: "name" };
        
        case "default":
            return { ...state, cursorVariant: "default", cursorText: "" };
    
        default:
            return state;
    }
}

export const CursorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const onEnter = (variant) => {
        dispatch({ type: variant} )
    }

    return (
        <cursorContext.Provider value={{...state , onEnter}}>
            {children}
        </cursorContext.Provider>
    )
}

export const useCursorContext = () => {
    return useContext(cursorContext)
}
