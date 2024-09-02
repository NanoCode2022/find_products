import Card from "@/app/components/sub_components/card";
import { supabase } from "@/app/supabase/server_client";

export default async function idMaquina({ params }: { params: { ID_Maquina: string } }) {
  const { ID_Maquina } = params;
  console.log(ID_Maquina);

  const { data: marcas, error } = await supabase
    .from('marcas')
    .select()
    .eq('ID_Maquina', ID_Maquina);

  if (error) {
    console.error('Error fetching marcas:', error);
    return <div>Error al cargar las marcas.</div>;
  }

  return (
    <div>
      <h1 className="text-center">Marcas</h1>

      <div className="grid grid-cols-3 gap-3 mt-8">
        {marcas?.length > 0 ? (
          marcas.map((maquina) => (
            <Card key={maquina.ID_Marca} nombre={maquina.Nombre_Marca} img='/img_cosechadora.jpg' link={`#`} />
          ))
        ) : (
          <p className="col-span-3 text-center">No se encontraron marcas para esta máquina.</p>
        )}
      </div>
    </div>
  );
}

