"use client"
import Navbar from "@/app/components/Navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import dayjs from "dayjs"
import { Bookmark, Calendar, Facebook, Loader2, Map } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Job } from "../page"

export default function Page() {
	// create a state for selectedJob
	const [selectedJob, setSelectedJob] = useState<Job | null>(null)
	// get id from params
	const { id } = useParams()
	// send a request to the server to get all jobs
	useEffect(() => {
		async function getJobs() {
			const response = await fetch("http://localhost:5000/jobs")
			const jobs = await response.json()
			// filter the jobs with id
			const job = jobs.find((job: Job) => job._id === id)
			// set state of selectedJob
			setSelectedJob(job)
		}
		getJobs()
	}, [])

	// const job = {
	// 	id: 1,
	// 	title: "Senior Product Designer",
	// 	company: "Paystack",
	// 	location: "Lagos",
	// 	type: "Full Time",
	// 	description:
	// 		"We are looking for a Senior Product Designer to join our team. You will be responsible for designing the user experience of our products. You will work closely with the product team to understand the user needs and design solutions that meet those needs.",
	// 	requirements: [
	// 		"3+ years of experience in product design",
	// 		"Experience with Figma",
	// 		"Experience with user research",
	// 		"Experience with prototyping",
	// 	],
	// 	benefits: [
	// 		"Health insurance",
	// 		"Paid time off",
	// 		"Remote work",
	// 		"Flexible hours",
	// 	],
	// 	salary: 100000,
	// 	createAt: "2022-09-12",
	// 	companyLogo: "https://cdn-icons-png.flaticon.com/256/124/124010.png",
	// }

	return (
		<div className="font-sans flex flex-col justify-center items-center w-full">
			<Navbar />
			{selectedJob ? (
				<>
					<div className="bg-gray-100 flex justify-center items-center h-16 w-full">
						<div className="max-w-[1200px] w-full flex justify-center items-center">
							{" "}
							<span className="font-semibold mr-auto">Job Details</span>
							Home / Jobs / {selectedJob.title} <Facebook />
						</div>
					</div>

					<div className="flex items-center justify-between max-w-[1230px] w-full mt-5">
						<div className="flex gap-5">
							<div className=" rounded-full overflow-hidden flex items-center">
								<Image
									src={selectedJob.companyLogo}
									height={100}
									width={100}
									alt="company logo"
								/>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">{selectedJob.title}</h3>
								at
								<span className="ml-1 text-gray-600">
									{selectedJob.company}
								</span>{" "}
								<Badge className="bg-[#0BA02C] text-white mr-2">
									{selectedJob.type}
								</Badge>
								<Badge>Featured</Badge>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<Button variant="outline" className="bg-[#E7F0FA] h-12">
								<Bookmark className="text-[#0A65CC]" />
							</Button>
							{/* <ApplyDialog /> */}
							<Button
								variant="outline"
								className="bg-[#3372b9] text-white h-12"
							>
								Apply Now
							</Button>
						</div>
					</div>
					<div className="flex w-full max-w-[1230px] mt-10">
						<div className="w-[60%]">
							<h3 className="text-2xl">Job Description</h3>
							<div className="text-gray-600">{selectedJob.description}</div>
							<h3 className="text-2xl mt-9">Requirements</h3>
							<ul className="text-gray-600 list-disc pl-5">
								{selectedJob.requirements.map((requirement) => (
									<li key={requirement}>{requirement}</li>
								))}
							</ul>
							<h3 className="text-2xl mt-9">Benefits</h3>
							<ul className="text-gray-600 list-disc pl-5">
								{selectedJob.benefits.map((benefit) => (
									<li key={benefit}>{benefit}</li>
								))}
							</ul>
						</div>
						<div className="w-[40%]">
							<Card>
								<CardContent className="!p-5 flex justify-around">
									<div className="flex flex-col justify-center items-center">
										<p>Salary(USD)</p>
										<p className="text-green-500 text-lg ">
											${selectedJob.salary - 10000} - $
											{selectedJob.salary + 10000}
										</p>
										<p className="text-xs text-gray-600">Yearly salary</p>
									</div>
									<Separator orientation="vertical" className="h-16" />
									<div className="flex flex-col justify-center items-center">
										<Map className="text-blue-400" />
										<p>Location</p>
										<p>{selectedJob.location}</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="!p-5 ">
									<h3>Job Overview</h3>
									<div className="flex flex-col justify-center items-center">
										<Calendar className="text-blue-400" />
										<p className="text-sm ">JOB POSTED:</p>
										<p>{dayjs(selectedJob.createAt).format("DD MMM,YYYY")}</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</>
			) : (
				<Loader2 className="animate-spin"></Loader2>
			)}
		</div>
	)
}
