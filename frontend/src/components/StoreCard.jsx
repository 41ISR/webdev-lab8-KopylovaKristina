import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"
import { useStore } from "../store/useStore"

const MessageCard = ({likes, id, content, username, createdAt, userId, likedBy }) => {
    const { session } = useUserStore()
    const { getMessages } = useStore()

    const handleDelete = async () => {
        await api.deleteMessage(id)
        await getMessages()
    }

    const handleReport = async () => {
        await api.reportMessage(id)
        await getMessages()
    }

    const handleLike = async () => {
        await api.likeMessage(id)
        await getMessages()
    }

    const isLiked = likedBy.some((likedUserId) => likedUserId === session?.user.id)

    const isOwn = session?.user.id === userId
    return (
        ///
    )
}

export default MessageCard