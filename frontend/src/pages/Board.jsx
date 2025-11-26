import Feed from "../components/Feed"
import Field from "../components/Field"
import { useUserStore } from "../store/useUserStore"

const Board = () => {
    const { session } = useUserStore()
    return (
        <>
            <h1>Board</h1>
            {session && <Field />}
            <Feed title="Товары" />
        </>
    )
}

export default Board