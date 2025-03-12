"use client"
import { Button } from "@/components/ui/button"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import CreateJob from "./create-job"
import Search from "./search"

type User = {
	_id: string
	username: string
	email: string
	picture: string
}

export default function Loginbar() {
	// const cookieStore = await cookies()
	// const user = cookieStore.get("user") // user id
	// const response = await axios.get(
	// 	"http://localhost:5000/users/me/" + user?.value,
	// 	{
	// 		withCredentials: true,
	// 	},
	// )

	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		async function getUser() {
			const response = await axios.get("http://localhost:5000/users/me/", {
				withCredentials: true,
			})
			// console.log(response.data)
			setUser(response.data)
		}
		getUser()
	}, [])
	async function handleLogout() {
		await axios.get("http://localhost:5000/users/logout", {
			withCredentials: true,
		})
		setUser(null)
	}

	return (
		<>
			<div className="flex items-center justify-between pt-[10px]">
				<div className="flex items-center justify-between gap-[50px]">
					<Image src="/Logo(1).png" width={100} height={20} alt="logo" />
					<Search />
				</div>
				<div className="flex items-center justify-between gap-[20px]">
					{user ? (
						<div className="flex items-center justify-between gap-[20px]">
							<Image src={user.picture} width={30} height={30} alt="user" />
							<p className="text-[14px] font-semibold">{user.username}</p>
						</div>
					) : (
						<button className="border-[1px] border-blue-500 rounded-[3px] text-blue-600 py-[10px] px-[20px]">
							Sign In
						</button>
					)}
					<CreateJob />
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			</div>
		</>
	)
}
