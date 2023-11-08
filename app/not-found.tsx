import Link from "next/link";

export default function NotFound(){
    return(
        <div className="text-success text-danger text-center container">
            <h2>El recurso solicitado no esta disponible</h2>
            <Link href="../Productos" className="btn btn-warning">Regresar a Productos</Link>
        </div>
    )
}