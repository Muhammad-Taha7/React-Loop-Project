const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2500,
    description: "Premium wireless headphones with crystal-clear sound for daily comfort use."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4500,
    description: "Feature-rich smartwatch offering fitness tracking, alerts, and modern design."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 3200,
    description: "Portable Bluetooth speaker delivering deep bass and long-lasting battery life."
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 1800,
    description: "High-precision gaming mouse with ergonomic design and customizable RGB lights."
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 5200,
    description: "Durable mechanical keyboard providing tactile feedback and faster key response."
  },
  {
    id: 6,
    name: "4K Monitor",
    price: 15000,
    description: "Ultra HD 4K monitor delivering sharp visuals and wide color accuracy for work."
  },
  {
    id: 7,
    name: "External SSD",
    price: 8000,
    description: "Fast external SSD storage with reliable performance and sleek compact design."
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    price: 6000,
    description: "Comfortable earbuds that block background noise and ensure superior audio flow."
  },
  {
    id: 9,
    name: "Smartphone Gimbal",
    price: 7500,
    description: "Stabilized smartphone gimbal ensuring smooth video recording for every angle."
  },
  {
    id: 10,
    name: "Portable Power Bank",
    price: 2200,
    description: "Compact power bank with fast charging, lightweight body, and reliable safety."
  }
  ,
  {
    id: 11,
    name: "Computer ",
    price: 3400,
    description: "Light weight, heavy machinary Computer with completely AOX system."
  }
];



export const Hero = ()=>
{
    return(
        <>
        <div className="hero-section h-[90vh] w-full bg-black text-white ">
            <div className="text">
                <h2 className="text-[1.5rem] p-10">Products:</h2>
                <div className="layout grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 px-10">
                    {
                        products.map((number)=>
                        {
                            return(
                                <li className="list-none border">
                                    <div className="card p-5">
                                        <h2 className="">Name: {number.name}</h2>
                                        <h2>Price: {number.price}</h2>
                                        <h2>Description: {number.description}</h2>
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}