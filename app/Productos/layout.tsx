export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className="">
            <h3 className="text-danger text-center">Productos Disponibles</h3>
            {children}
        </div>
        
    )
}


