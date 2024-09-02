import Image from "next/image"

interface IProps {
    nombre: string,
    codigo?: string,
    img: string,
    link: string
}
export default function Card({nombre,codigo,img,link}: IProps){


    return(
        

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={link}>
        <Image
            src={img}
            width={500}
            height={400}
            alt={nombre}
            className="p-1"
        />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{nombre}</h5>
        </a>
        {
            codigo ? <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Codigo: {codigo}</p> : null
        }
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Seleccionar
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    )
}