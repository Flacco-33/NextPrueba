export async function getProductos(){
  const datos=await fetch('http://localhost:5009/Productos');
  const json=await datos.json();
  console.log(json);
}


export default async function PrincipalPage () {
  getProductos();
  return (
    <>
      Pagina Principal
      <table className="table table-bordered mt-3 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
          </tr>
        </thead>
      </table>
    </>
  )
}