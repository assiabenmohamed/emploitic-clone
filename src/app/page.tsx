"use client"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Footer from "./components/Footer"
import Loginbar from "./components/Loginbar"
import Navbar from "./components/Navbar"
import Card from "./components/card"
import Herosearch from "./components/herosearch"
import Location from "./components/location"
import "./globals.css"
const cardData = [
	{ imageSrc: "/Icon(1).png", title: "1,75,324", description: "Live Job" },
	{ imageSrc: "/Icon(2).png", title: "97,354", description: "Companies" },
	{ imageSrc: "/Icon(3).png", title: "38,47,154", description: "Candidates" },
	{ imageSrc: "/Icon(1).png", title: "7,532", description: "New Jobs" },
]
interface vacancies {
	title: string
	positions: number
	highlighted?: boolean
}
const initialVacancies: vacancies[] = [
	{ title: "Anesthesiologists", positions: 45804 },
	{ title: "Surgeons", positions: 50364 },
	{ title: "Obstetricians-Gynecologists", positions: 4339 },
	{ title: "Orthodontists", positions: 20079 },
	{ title: "Maxillofacial Surgeons", positions: 74875 },
	{ title: "Software Developer", positions: 43359 },
	{ title: "Psychiatrists", positions: 18599 },
	{ title: "Data Scientist", positions: 28200 },
	{ title: "Financial Manager", positions: 61391 },
	{ title: "Management Analysis", positions: 93046 },
	{ title: "IT Manager", positions: 50963 },
	{ title: "Operations Research Analysis", positions: 16627 },
]
interface Step {
	title: string
	description: string
	icon: string
	highlighted?: boolean
}
const initialSteps: Step[] = [
	{
		title: "Create account",
		description:
			"Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
		icon: "/Icon(5).png",
	},
	{
		title: "Upload CV/Resume",
		description:
			"Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.",
		icon: "/Icon(8).png",
	},
	{
		title: "Find suitable job",
		description: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
		icon: "/Icon(6).png",
	},
	{
		title: "Apply job",
		description:
			"Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.",
		icon: "/Icon(7).png",
	},
]

interface category {
	category: string
	open_positions: string
	imageSrc: string
	highlighted?: boolean
}

const initialCategory: category[] = [
	{
		category: "Graphics & Design",
		open_positions: "357",
		imageSrc: "/Icon(9).png",
	},
	{
		category: "Code & Programming",
		open_positions: "312",
		imageSrc: "/Icon(10).png",
	},
	{
		category: "Digital Marketing",
		open_positions: "297",
		imageSrc: "/Icon(11).png",
	},
	{
		category: "Video & Animation",
		open_positions: "247",
		imageSrc: "/Icon(12).png",
	},
	{
		category: "Music & Audio",
		open_positions: "204",
		imageSrc: "/Icon(13).png",
	},
	{
		category: "Account & Finance",
		open_positions: "167",
		imageSrc: "/Icon(14).png",
	},
	{
		category: "Health & Care",
		open_positions: "125",
		imageSrc: "/Icon(15).png",
	},
	{
		category: "Data & Science",
		open_positions: "57",
		imageSrc: "/Icon(16).png",
	},
]

export default function Home() {
	const navigationNextRef = useRef(null)
	const navigationPrevRef = useRef(null)
	// const titleRef = useRef<HTMLInputElement>(null)
	const [title, setTitle] = useState("")
	const [location, setLocation] = useState("")
	const locationRef = useRef<HTMLInputElement>(null)
	const [jobVacancies, setJobVacancies] =
		useState<vacancies[]>(initialVacancies)

	function handlefocuss(index: number) {
		setJobVacancies((prevSteps) =>
			prevSteps.map((step, i) =>
				i === index ? { ...step, highlighted: !step.highlighted } : step,
			),
		)
	}
	const [jobProcessSteps, setJobProcessSteps] = useState<Step[]>(initialSteps)

	function handleHighlight(index: number) {
		setJobProcessSteps((prevSteps) =>
			prevSteps.map((step, i) =>
				i === index ? { ...step, highlighted: !step.highlighted } : step,
			),
		)
	}
	const [category, setCategory] = useState<category[]>(initialCategory)

	function handleCategory(index: number) {
		setCategory((prevSteps) =>
			prevSteps.map((step, i) =>
				i === index ? { ...step, highlighted: !step.highlighted } : step,
			),
		)
	}
	return (
		<>
			<Navbar />
			<div className="flex justify-center bg-[#F1F2F499]">
				<div className="max-w-[1300px] px-[50px]">
					<Loginbar />
					<div className="flex items-center justify-center pt-[50px] gap-[50px]">
						<div>
							<h1 className="text-[50px] mb-5">
								Find a job that suits your interest & skills.
							</h1>
							<p className="text-[#5E6670] mb-5">
								Aliquam vitae turpis in diam convallis finibus in at risus.
								Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
							</p>
							<div className="flex mb-5 p-2 border rounded-[3px] justify-between">
								<div className="flex items-center">
									<Herosearch value={title} onChangeValue={setTitle} />
									<Location value={location} onChangeValue={setLocation} />
								</div>
								<Link href={`/jobs?title=${title}&location=${location}`}>
									<button className="border-[1px] border-none bg-blue-600 py-[8px] px-[20px] text-white rounded-[3px] ml-5">
										Find Job
									</button>
								</Link>
							</div>
							<div>
								<p className="text-[#474C54]">
									<span className="text-[#9199A3]">Suggestions: </span>designer,
									programming,{" "}
									<span className="text-blue-600">digital marketing</span>,
									video, animation
								</p>
							</div>
						</div>
						<div>
							<Image
								src="/Illustration.png"
								alt="hero"
								width={700}
								height={600}
							></Image>
						</div>
					</div>
					<div className="flex justify-center items-center gap-4 p-6 rounded-5">
						{cardData.map((card, index) => (
							<Card
								key={index}
								imageSrc={card.imageSrc}
								title={card.title}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</div>

			{/* {new section} */}

			<div className="flex justify-center">
				<div className="max-w-[1300px] p-[50px] w-full">
					<h1 className="mb-5 pl-3 text-[30px] font-bold">
						Most Popular Vacancies
					</h1>
					<div className="grid grid-cols-4 gap-3">
						{jobVacancies.map((jobVacancy, index) => (
							<div
								key={index}
								onMouseEnter={() => handlefocuss(index)}
								onMouseLeave={() => handlefocuss(index)}
								className="p-3 rounded-5"
							>
								<p
									className={
										jobVacancy.highlighted
											? "font-bold text-blue-600 underline"
											: "font-bold"
									}
								>
									{jobVacancy.title}
								</p>
								<p className="text-[#767F8C]">
									{jobVacancy.positions} open positions
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* {new section} */}

			<div className="flex justify-center bg-[#F1F2F499]">
				<div className="max-w-[1300px] p-[50px] w-full">
					<h1 className="pl-3 text-[30px] font-bold text-center w-full mb-15">
						How jobpilot work
					</h1>
					<div className="grid grid-cols-4 gap-3">
						{jobProcessSteps.map((jobProcess, index) => (
							<div
								key={index}
								onMouseEnter={() => handleHighlight(index)}
								onMouseLeave={() => handleHighlight(index)}
								className={
									jobProcess.highlighted
										? "cursor-pointer shadow-md p-4 rounded-lg bg-white w-full flex flex-col gap-3 items-center"
										: "cursor-pointer bg-transparent p-4 rounded-lg w-full flex flex-col gap-3 items-center"
								}
							>
								<Image
									src={jobProcess.icon}
									width={50}
									height={10}
									alt={jobProcess.title}
									className="rounded-md"
								/>
								<h3 className="text-lg font-semibold">{jobProcess.title}</h3>
								<p className="text-gray-600">{jobProcess.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* {new section} */}

			<div className="flex justify-center bg-[#F1F2F499]">
				<div className="max-w-[1300px] p-[50px] w-full">
					<div className="w-full flex justify-between items-center">
						<h1 className="mb-5 pl-3 text-[30px] font-bold">
							Popular category
						</h1>
						<p className="text-blue-600 flex gap-2 items-center">
							View All{" "}
							<Image
								src="/fi_arrow-right.png"
								alt="cheveron right"
								width={22}
								height={2}
							/>
						</p>
					</div>
					<div className="grid grid-cols-4 gap-4">
						{category.map((card, index) => (
							<div
								key={index}
								onMouseEnter={() => handleCategory(index)}
								onMouseLeave={() => handleCategory(index)}
								className={`p-4 ${
									card.highlighted ? "bg-white shadow-md" : ""
								} cursor-pointer rounded-lg flex items-center gap-5 w-full`}
							>
								<Image
									src={card.imageSrc}
									width={50}
									height={10}
									alt={card.category}
									className="rounded-md"
								/>
								<div>
									<h3
										className={`text-lg font-semibold ${
											card.highlighted ? "underline text-blue-600" : ""
										}`}
									>
										{card.category}
									</h3>
									<p className="text-gray-600">
										{card.open_positions} Open positions
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-center bg-[#F1F2F499]">
				<div className=" w-full">
					<div className="p-6  bg-gray-100">
						<h1 className="text-2xl font-bold mb-6 text-black">
							Top companies
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[...Array(6)].map((_, index) => (
								<div
									key={index}
									className="bg-white shadow-md rounded-lg p-4 flex flex-col"
								>
									<div className="flex items-center mb-4">
										<img
											src="/Employers Logo.png"
											alt="logo"
											className="w-16 h-16 rounded-full"
										/>
										<div className="ml-4">
											<div className="flex items-center gap-2">
												<h1 className="text-lg font-semibold text-black">
													Dribbble
												</h1>
												<span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
													Featured
												</span>
											</div>
											<div className="flex items-center text-gray-600 text-sm mt-1">
												<MapPin className="w-4 h-4 mr-1" />
												<h4>San Francisco, CA</h4>
											</div>
										</div>
									</div>
									<button className="mt-auto bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200">
										Open Position (3)
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="py-12 bg-gray-200">
						<h1 className="text-3xl font-bold text-center mb-8 text-black">
							Clients Testimonial
						</h1>
						<div className="relative max-w-6xl mx-auto px-4">
							<Swiper
								slidesPerView={3}
								spaceBetween={30}
								pagination={{
									clickable: true,
								}}
								navigation={{
									prevEl: navigationPrevRef.current,
									nextEl: navigationNextRef.current,
								}}
								onSwiper={(swiper) => {
									// Delay updating navigation refs to ensure DOM is ready
									setTimeout(() => {
										// swiper.params?.prev=
										// 	navigationPjkkrevRef.current
										// swiper.params?.navigation?.nextEl =
										// navigationNextRef.current
										// swiper.navigation.init()
										// swiper.navigation.update()
									}, 1000)
								}}
								modules={[Pagination, Navigation]}
								className="mySwiper"
							>
								{[...Array(6)].map((_, index) => (
									<SwiperSlide key={index}>
										<div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
											<img src="/Rating.png" alt="rating" className="w-24" />
											<p className="text-gray-600 italic">
												“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
												Maecenas ac placerat metus, in faucibus est.”
											</p>
											<div className="flex items-center gap-4">
												<img
													src="/Image.png"
													alt="profile"
													className="w-12 h-12 rounded-full"
												/>
												<div>
													<h2 className="text-lg font-semibold text-black">
														Robert Fox
													</h2>
													<p className="text-sm text-gray-500">
														UI/UX Designer
													</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div>
								<button ref={navigationNextRef} className="h-10 w-10">
									<ChevronRight />
								</button>
								<button ref={navigationPrevRef} className="h-10 w-10">
									<ChevronLeft />
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center min-h-[300px] bg-gray-100">
						<div className="flex gap-6">
							<div className="relative w-[400px] h-[200px] rounded-lg overflow-hidden shadow-lg">
								<div className="absolute inset-0 bg-[url('/condidate.png')] bg-cover bg-center opacity-95"></div>
								<div className="relative z-10 p-6">
									<h2 className="text-xl font-semibold  text-gray-900">
										Become a Candidate
									</h2>
									<p className="text-sm mt-2 w-1/2 text-gray-400">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Cras cursus a dolor
									</p>
									<button className="mt-4 flex items-center gap-2 text-gray-500  font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition">
										Register Now →
									</button>
								</div>
							</div>
							<div className="relative w-[400px] h-[200px] bg-blue-700 rounded-lg overflow-hidden shadow-lg">
								<div className="absolute inset-0 bg-[url('/employer.png')] bg-cover bg-center opacity-95"></div>
								<div className="relative z-10 p-6 text-white">
									<h2 className="text-xl font-semibold">Become an Employer</h2>
									<p className="text-[12px] w-1/2  mt-2">
										Cras in massa pellentesque, mollis ligula non, luctus dui.
										Morbi sed efficitur dolor.
									</p>
									<button className="mt-4 flex items-center gap-2 text-blue-600 font-medium bg-white px-4 py-2 rounded-lg hover:bg-gray-100">
										Register Now →
									</button>
								</div>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</div>
		</>
	)
}
