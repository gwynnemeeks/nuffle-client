import React, { useState } from "react"

export const ProfileContext = React.createContext()


export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([])
    const [singleProfile, setSingleProfile] = useState([])

    const getProfile = () => {
        return fetch(`http://localhost:8000/profile`)
            .then(res => res.json())
            .then(setProfile)
    }

    const getSingleProfile = (id) => {
        return fetch(`http://localhost:8000/profile/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(setSingleProfile)
    }


    return (
        <ProfileContext.Provider value={{
            profile, getProfile, singleProfile, getSingleProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}