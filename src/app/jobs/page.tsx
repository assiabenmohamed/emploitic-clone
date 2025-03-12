import { getJobs } from "@/queries/jobs"
import { Bookmark, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import Loginbar from "../components/Loginbar"
import Navbar from "../components/Navbar"
import PaginationJobs from "../components/pagination-jobs"
export type Job = {
	_id: string
	title: string
	company: string
	companyLogo: string
	salary: number
	description: string
	email: string
	requirements: string[]
	location: string
	type: "full-time" | "part-time"
	benefits: string[]
}

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ page: string; location: string; title: string }>
}) {
	const jobsData = await getJobs()
	const search = await searchParams
	const page = parseInt(search.page)
	console.log(search.location, search.title)
	const searchResults = jobsData.filter((job: Job) => {
		if (search.location && search.title) {
			return (
				job.title.toLowerCase().includes(search.title.toLowerCase()) &&
				job?.location?.toLowerCase().includes(search.location.toLowerCase())
			)
		}
		if (search.title) {
			return job.title.toLowerCase().includes(search.title.toLowerCase())
		}
		if (search.location) {
			return job?.location
				?.toLowerCase()
				.includes(search.location.toLowerCase())
		}
	})

	const pageElements = jobsData
		.map((job: Job, index: number) => {
			if (index < page * 2 && index >= (page - 1) * 2) {
				// 2  0
				return job
			}
		})
		.filter((job) => job !== undefined)

	return (
		<>
			<Navbar />
			<div className="flex justify-center bg-[#F1F2F499]">
				<div className="max-w-[1300px] px-[50px]">
					<Loginbar />
				</div>
			</div>
			<div className="p-4 flex gap-6 justify-center flex-wrap min-h-screen">
				{searchResults.length
					? searchResults.map((job: Job, index: number) => (
							<Link
								key={index}
								href={`/jobs/${job._id}`}
								className="flex flex-col gap-2 p-4 h-fit border-gray-200 border-1 bg-gradient-to-r from-[#FFF6E6] to-white w-[350px] rounded-lg shadow-md "
							>
								<h1 className="text-lg font-semibold">{job.title}</h1>

								<div className="flex gap-4">
									<div className="text-[10px] text-[#0BA02C] bg-[#E7F6EA] py-1 px-3 rounded-md font-medium">
										{job.type?.toUpperCase()}
									</div>
									<p className="text-sm text-gray-500">
										Salary: ${job.salary - 10000} - ${job.salary + 10000}
									</p>
								</div>

								<div className="mt-4 flex justify-between items-center">
									<div className="flex gap-2 items-center">
										<Image
											src={job.companyLogo}
											width={50}
											height={50}
											alt="Company Logo"
										/>
										<div>
											<h4 className="font-medium">{job.company}</h4>
											<div className="flex items-center text-sm text-gray-500 gap-1">
												<MapPin size={16} />
												<p>{job?.location}</p>
											</div>
										</div>
									</div>
									<Bookmark className="text-gray-500 cursor-pointer" />
								</div>
							</Link>
					  ))
					: null}
				{!searchResults.length
					? pageElements.map((job: Job, index: number) => (
							<Link
								key={index}
								href={`/jobs/${job._id}`}
								className="flex flex-col gap-2 p-4 h-fit border-gray-200 border-1 bg-gradient-to-r from-[#FFF6E6] to-white w-[350px] rounded-lg shadow-md "
							>
								<h1 className="text-lg font-semibold">{job.title}</h1>

								<div className="flex gap-4">
									<div className="text-[10px] text-[#0BA02C] bg-[#E7F6EA] py-1 px-3 rounded-md font-medium">
										{job.type?.toUpperCase()}
									</div>
									<p className="text-sm text-gray-500">
										Salary: ${job.salary - 10000} - ${job.salary + 10000}
									</p>
								</div>

								<div className="mt-4 flex justify-between items-center">
									<div className="flex gap-2 items-center">
										<Image
											src={job.companyLogo}
											width={50}
											height={50}
											alt="Company Logo"
										/>
										<div>
											<h4 className="font-medium">{job.company}</h4>
											<div className="flex items-center text-sm text-gray-500 gap-1">
												<MapPin size={16} />
												<p>{job?.location}</p>
											</div>
										</div>
									</div>
									<Bookmark className="text-gray-500 cursor-pointer" />
								</div>
							</Link>
					  ))
					: null}
			</div>
			{!searchResults.length && (
				<PaginationJobs
					currentPage={page}
					pageCount={Math.ceil(jobsData.length / 2)}
				/>
			)}
			<Footer />
		</>
	)
}
