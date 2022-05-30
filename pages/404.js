import { useRouter } from 'next/router'
import React from 'react'


const errorPage = () => {
    const router = useRouter()

    const redirectTohomePage = () => {

        router.push('/')
    }

    setTimeout(redirectTohomePage, 3000);

    return (
        <div>404 page Not Found</div>
    )
}


export default errorPage;