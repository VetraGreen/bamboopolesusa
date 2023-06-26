import React from "react";
import Image from "next/image";

const data = [
    {
        id: "1",
        src: "/assets/postsgaffs/image1.webp",
        title: "8' Calcutta Gaff Blank (Bale of 8)",
        cost: "$230.00"
    },
    {
        id: "2",
        src: "/assets/postsgaffs/image1.webp",
        title: "6' Calcutta Gaff Blank (Bale of 8)",
        cost: "$210.00",
    },
    {
        id: "3",
        src: "/assets/postsgaffs/image1.webp",
        title: "4' Calcutta Bamboo Gaff Blank (Bale of 8)",
        cost: "$195.00",
    },
    {
        id: "4",
        src: "/assets/postsgaffs/image1.webp",
        title: "4' Calcutta Bamboo Gaff Blank (Bale of 4)",
        cost: "$155.00",
    },
    {
        id: "5",
        src: "/assets/postsgaffs/image2.webp",
        title: "22' x 1.25' Calcutta Cane Pole (Bale of 25)",
        cost: "$790.00",
    },
    {
        id: "6",
        src: "/assets/postsgaffs/image1.webp",
        title: "6' Blank Calcutta Pole (Bale of 4)",
        cost: "$165.00",
    },
    {
        id: "7",
        src: "/assets/postsgaffs/image1.webp",
        title: "8' Calcutta Gaff Blank (Bale of 4)",
        cost: "$185.00",
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