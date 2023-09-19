import Features from "../features/Features";

const PriceOption = ({ data }) => {
    console.log(data)
  return (
    <div className="bg-white text-rose-600 p-5 flex flex-col  rounded-xl">
      <div className="">

       <div className="flex justify-center">
       <h1 className=" font-bold text-4xl items-center">{data.name}</h1>
       </div>

       <div className="flex justify-center mt-4">
       <p><span className="text-3xl font-bold">${data.price}</span>/mon</p>
       </div>

      </div>
      <div className="mt-8 flex-grow">
      {
    data.features.map((fea,idx)=><Features key={idx} fea={fea}></Features>)
}
      </div>
      <button className="w-full mt-3 bg-red-600 rounded-md text-white text-xl font-medium hover:bg-blue-900">choose</button>
    </div>
  );
};

export default PriceOption;
