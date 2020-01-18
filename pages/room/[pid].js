import { useRouter } from 'next/router'

const Room = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>{pid}</p>
}

export default Room