import Image from "next/image";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
    return (
        <div className="border p-4 rounded-lg shadow-md flex items-center gap-5 w-full">
            <Image src={imageSrc} width={50} height={10} alt={title} className="rounded-md" />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
