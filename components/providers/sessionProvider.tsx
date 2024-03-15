"use client"
import { useEffect } from "react"
import { createClient } from "@/utils/supabase/client";
import { useUser } from "@/utils/store/user";


export default function SessionProvider(): JSX.Element{

    const setUser = useUser((state) => state.setUser)

    const supabase = createClient();

    const readUserSession = async () => {
        const {data} = await supabase.auth.getSession()
        setUser(data.session?.user)
    }

    useEffect(() => {
        readUserSession()
    }, []) 

    return (
        <></>
    )
}