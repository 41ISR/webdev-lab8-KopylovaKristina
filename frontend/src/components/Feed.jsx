import { useEffect, useState } from "react"
import { api } from "../api/api"
import StoreCard from "./StoreCard"
import { useStore } from "../store/useStore"
import { useUserStore } from "../store/useUserStore"

const Feed = ({ title = "Сообщения", myOwn = false }) => {
    const { messages, getMessages } = useStore()
    const [timerId, setTimerId] = useState(undefined)
    const {session} = useUserStore()

    useEffect(() => {
        getMessages()
        setTimerId(setInterval(() => {
            getMessages()
        }, 5000))

        return () => {clearInterval(timerId)}
    }, [])

    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages && myOwn ?
                        messages.filter((message) => message.userId == session.user.id).map((message, i) => (
                            <StoreCard key={i} {...message} />
                        ))
                        : messages.map((message, i) => (
                            <StoreCard key={i} {...message} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed