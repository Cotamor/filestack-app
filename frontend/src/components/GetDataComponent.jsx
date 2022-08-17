import ImagesData from "../datas"

const GetDataComponent = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto gap-10 my-12">
      {
        ImagesData.map((i, index)=>(
          <div className="p-1 rounded flex-colo border border-blue-400" key={index}>
            <img src={i.image} alt={i.title} className='w-full h-64 object-cover'/>
            <h1 className="font-semibold text-blue-800 italic my-4 leading-8 text-center  bg-gray-200">{i.title}</h1>
          </div>
        ))
      }
    </div>
  )
}
export default GetDataComponent