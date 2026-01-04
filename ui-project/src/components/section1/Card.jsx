const Card = (props) => {
  return (
    <>
       <div className="card overflow-hidden rounded-2xl relative">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="py-8 px-10 flex flex-col content-wp-wrap absolute w-full h-full top-0 left-0">
                <h1 className="w-12 h-12 bg-white flex items-center justify-center font-semibold text-xl rounded-full">{props.number+1}</h1>
                <div className="con-wrp mt-auto">
                    <p className="text-2xl font-bold text-white mb-12">{props.des}</p>
                    <button style={{backgroundColor:props.color}} className="text-white py-2 px-10 rounded-full">{props.btn}</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Card
