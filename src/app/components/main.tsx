import { supabase} from '@/app/supabase/server_client'
import Card from "./sub_components/card";


export default async function Main(){

    const { data:maquinas } = await supabase.from('maquinas').select()


    return(
        <div>
            <h1 className="text-center">Selecciona una Maquina</h1>

            <div className="grid grid-cols-3 gap-3 mt-8">
                {
                    maquinas?.map((maquina)=> (
                        <Card key={maquina.ID_Maquina} nombre={maquina.Nombre_Maquina} img='/img_cosechadora.jpg' link={`/marcas/${maquina.ID_Maquina}`}/>
                    ))
                }
            </div>
        </div>
    )
}