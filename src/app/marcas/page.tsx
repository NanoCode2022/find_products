import { supabase } from "../supabase/server_client"
export default async function marcasPage(){
     
    const { data: marcas } = await supabase.from('marcas').select()
    return(
        <div>
            hola Marcas fjasdfsadf 
            {
                JSON.stringify(marcas,null,2)
            }
        </div>
    )
}