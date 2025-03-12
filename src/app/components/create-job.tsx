import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import axios from "axios"
import { useRef, useState } from "react"
type Props = {}

export default function CreateJob({}: Props) {
	const [type, setType] = useState("full-time")
	const [location, setLocation] = useState("")
	// create refs for each input field
	const titleRef = useRef<HTMLInputElement>(null)
	const companyRef = useRef<HTMLInputElement>(null)
	const companylogoRef = useRef<HTMLInputElement>(null)
	const salaryRef = useRef<HTMLInputElement>(null)
	const descRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const reqRef = useRef<HTMLInputElement>(null)
	const benefitsRef = useRef<HTMLInputElement>(null)
	const locationRef = useRef<HTMLInputElement>(null)

	// const jobs = await Job.find()
	// create a function to send data to POST "http://localhost:5000/jobs" with data
	async function createJob() {
		const response = await axios.post("http://localhost:5000/jobs", {
			title: titleRef.current?.value,
			company: companyRef.current?.value,
			companyLogo: companylogoRef.current?.value,
			salary: parseInt(salaryRef.current?.value!),
			description: descRef.current?.value,
			email: emailRef.current?.value,
			requirements: [reqRef.current?.value],
			benefits: [benefitsRef.current?.value],
			location,
			type,
		})
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Post a Job</Button>
			</DialogTrigger>
			<DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
				<DialogHeader>
					<DialogTitle>Create A Job</DialogTitle>
					<DialogDescription>
						Please fill in the details to create a job
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="title" className="text-right">
							title
						</Label>
						<Input id="title" ref={titleRef} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="company" className="text-right">
							Company
						</Label>
						<Input id="company" ref={companyRef} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="companylogo" className="text-right">
							Company Logo
						</Label>
						<Input
							id="companylogo"
							ref={companylogoRef}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="salary" className="text-right">
							Salary
						</Label>
						<Input ref={salaryRef} id="salary" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="desc" className="text-right">
							Description
						</Label>
						<Input id="desc" ref={descRef} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							email
						</Label>
						<Input id="email" ref={emailRef} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="req" className="text-right">
							Requirements
						</Label>
						<Input id="req" ref={reqRef} className="col-span-3" />
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="benefits" className="text-right">
							benefits
						</Label>
						<Input id="benefits" ref={benefitsRef} className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="location" className="text-right">
							Location
						</Label>
						<Input
							id="location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							className="col-span-3"
							required
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="benefits" className="text-right">
							Type
						</Label>
						<RadioGroup
							defaultValue="full-time"
							value={type}
							onValueChange={setType}
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="full-time" id="full-time" />
								<Label htmlFor="full-time">Full time</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="part-time" id="part-time" />
								<Label htmlFor="part-time">Part time</Label>
							</div>
						</RadioGroup>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={createJob} type="submit">
							Create Job
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
