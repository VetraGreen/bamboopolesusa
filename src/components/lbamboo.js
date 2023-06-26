import React from "react";
import Image from "next/image";

const data = [
    {
        id: "1",
        src: "/assets/lbamboo/image1.webp",
        title: "6''x10' Large Diameter Bamboo Poles(Bale of 5)",
        cost: "$665.00"
    },
    {
        id: "1",
        src: "/assets/lbamboo/image1.webp",
        title: "5''x10' Large Diameter Bamboo Poles(Bale of 5)",
        cost: "$585.00"
    },
    {
        id: "1",
        src: "/assets/lbamboo/image1.webp",
        title: "4''x10' Large Diameter Bamboo Poles(Bale of 5)",
        cost: "$505.00"
    },
    {
        id: "1",
        src: "/assets/lbamboo/image1.webp",
        title: "3''x10' Large Diameter Bamboo Poles(Bale of 5)",
        cost: "$465.00"
    },
    {
        id: "1",
        src: "/assets/lbamboo/image1.webp",
        title: "2''x10' Large Diameter Bamboo Poles(Bale of 5)",
        cost: "$490.00"
    },


]

const ProjectCards = () => {
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-10">
        {data.map((data, id) => (
            <div key={id} className="w-[30rem] text-white relative rounded-[1.25rem] flex-col border-gray-300 border">
                <div className="flex justify-center px-10 mb-8 mt-16">
                    <Image src={data.src} width={350} height={200} className="rounded-lg"/>
                </div>
                
                <div className="flex justify-center mb-3 text-lg text-black">
                    {data.title}
                </div>
                <div className="flex flex-wrap justify-center mb-4 mx-10 text-[#707071] text-[15px]">
                    {data.cost}
                </div>
            </div>
        ))}
    </div>
    )
}

export default ProjectCards;