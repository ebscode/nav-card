/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Tem = ({tem}) => {
  



    return (
        <div >
           <ul >

           <li className=" text-white mr-7 hover:bg-amber-500"><a   href={tem.path}>{tem.name}</a></li>
           </ul>
        </div>
    );
};

export default Tem;