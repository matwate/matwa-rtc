import { useEffect } from "react"
import { createClient } from "@/utils/supabase/server";
import { useUser } from "@/utils/store/user";
import { set } from "react-hook-form";

export default function sessionProvider(){

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