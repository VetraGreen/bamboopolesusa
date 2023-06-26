import React from "react";
import Image from "next/image";

const data = [
    {
        id: "1",
        src: "/assets/stakes/image1.webp",
        title: "2' x 6-8mm (5/16'') Natural Bamboo 1,000/bale",
        cost: "$175.00"
    },
    {
        id: "2",
        src: "/assets/stakes/image2.webp",
        title: "2.5' x 8-10mm (3/8'') Natural Bamboo 500/bale",
        cost: "$160.00"
    },
    {
        id: "3",
        src: "/assets/stakes/image2.webp",
        title: "3' x 8-10mm(3/8'') Natural Bamboo 500/bale",
        cost: "$175.00"
    },
    {
        id: "4",
        src: "/assets/stakes/image3.webp",
        title: "3' x 12-14mm(1/2'') Natural Bamboo Stakes 250/bale",
        cost: "$135.00"
    },
    {
        id: "5",
        src: "/assets/stakes/image2.webp",
        title: "4' x 8-10mm(3/8'') Natural Bamboo 500/bale",
        cost: "$210.00"
    },
    {
        id: "6",
        src: "/assets/stakes/image4.webp",
        title: "4' x 10-12mm(7/16'') Natural Bamboo 250/bale",
        cost: "$170.00"
    },
    {
        id: "7",
        src: "/assets/stakes/image3.webp",
        title: "4' x 12-14mm(1/2'') Natural Bamboo 250/bale",
        cost: "$185.00"
    },
    {
        id: "8",
        src: "/assets/stakes/image2.webp",
        title: "5' x 8-10mm(3/8'') Natural Bamboo 500/bale",
        cost: "$225.00"
    },
    {
        id: "9",
        src: "/assets/stakes/image4.webp",
        title: "5' x 10-12mm(7/16'') Natural Bamboo 250/bale",
        cost: "$185.00"
    },
    {
        id: "10",
        src: "/assets/stakes/image3.webp",
        title: "5' x 12-14mm(1/2'') Natural Bamboo 250/bale",
        cost: "$215.00"
    },
    {
        id: "11",
        src: "/assets/stakes/image5.webp",
        title: "5' x15-17mm(5/8'') Natural Bamboo 100/bale",
        cost: "$165.00"
    },
    {
        id: "12",
        src: "/assets/stakes/image3.webp",
        title: "6' x 12-14mm(1/2'') Natural Bamboo 200/bale",
        cost: "$215.00"
    },
    {
        id: "13",
        src: "/assets/stakes/image5.webp",
        title: "6' x15-17mm(5/8'') Natural Bamboo 100/bale",
        cost: "$175.00"
    },
    {
        id: "14",
        src: "/assets/stakes/image6.webp",
        title: "6' x 18-20mm(3/4'') Natural Bamboo 100/bale",
        cost: "$215.00"
    },
    {
        id: "15",
        src: "/assets/stakes/image3.webp",
        title: "7' x 12-14mm(1/2'') Natural Bamboo 100/bale",
        cost: "$160.00"
    },
    {
        id: "16",
        src: "/assets/stakes/image5.webp",
        title: "7' x 15-17mm(5/8'') Natural Bamboo 100/bale",
        cost: "$175.00"
    },
    {
        id: "17",
        src: "/assets/stakes/image6.webp",
        title: "7' x 18-20mm(3/4'') Natural Bamboo 100/bale",
        cost: "$225.00"
    },
    {
        id: "18",
        src: "/assets/stakes/image6.webp",
        title: "8' x 18-20mm(3/4'') Natural Bamboo 50/bale",
        cost: "$210.00"
    },
    {
        id: "19",
        src: "/assets/stakes/image7.webp",
        title: "8' x 22-24mm(7/8'') Natural Bamboo 50/bale",
        cost: "$240.00"
    },
    {
        id: "20",
        src: "/assets/stakes/image8.webp",
        title: "8' x 24-26mm(1'') Natural Bamboo 50/bale",
        cost: "$255.00"
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