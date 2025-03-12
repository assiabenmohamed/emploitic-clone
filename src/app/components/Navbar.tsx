"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
	const [clicked, setClicked] = useState<string | null>(null)
	function handleStyle(event: React.MouseEvent<HTMLButtonElement>) {
		setClicked(event.currentTarget.innerText)
	}
	return (
		<>
			<div className="flex justify-center backdrop-blur-lg sticky top-0 ">
				<div className="flex items-center justify-between h-[7vh] text-black max-w-[1300px] px-[50px] w-full">
					<div className="flex items-center justify-center gap-[30px] h-[7vh]">
						<Link href={"/"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Home"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Home
							</button>
						</Link>
						<Link href={"/jobs?page=1"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Find Job"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Find Job
							</button>
						</Link>
						<Link href={"/"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Employers"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Employers
							</button>
						</Link>
						<Link href={"/"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Candidates"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Candidates
							</button>
						</Link>
						<Link href={"/"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Pricing plans"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Pricing plans
							</button>
						</Link>
						<Link href={"/"}>
							<button
								onClick={handleStyle}
								className={
									clicked === "Customor support"
										? "py-[10px] px-[5px] border-b-2 border-blue-500 text-blue-500 bg-transparent"
										: "py-[10px] px-[5px] border-none bg-transparent"
								}
							>
								Customor support
							</button>
						</Link>
					</div>
					<div className="flex items-center gap-5 h-[7vh]">
						<div className="flex items-center justify-center gap-[5px]">
							<Image
								src="/PhoneCall.png"
								width={20}
								height={20}
								alt="Phone clall"
							/>
							<p>+1-202-555-0178</p>
						</div>
						<div className="flex items-center justify-center gap-[10px]">
							<Image src="/image 1.png" width={20} height={20} alt="flag" />
							<p>English</p>
							<Image
								src="/fi_chevron-down.png"
								width={20}
								height={20}
								alt="cheveron down"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
