import {
	BriefcaseBusiness,
	Instagram,
	Linkedin,
	Twitter,
	Youtube,
} from "lucide-react"

type Props = {}

export default function Footer({}: Props) {
	return (
		<footer className="bg-gray-900 text-gray-300 px-5 py-10 ">
			<div className="flex gap-24">
				<div className="w-[350px]">
					<ul>
						<li className=" text-xl font-semibold text-white flex items-center gap-2">
							<BriefcaseBusiness />
							<h1>Joppilot</h1>
						</li>
						<li className="mt-2">
							call'Now :{" "}
							<span className="text-white font-semibold"> (319) 555-0115</span>
						</li>
						<li className="mt-2 text-sm">
							6391 Elgin St. Celina, Delaware 10299, New York, United States of
							America
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white font-medium mb-4">Quick Link</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-white">
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-white flex items-center gap-1 text-white"
							>
								→ Contact
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Pricing
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white font-medium mb-4">Candidate</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-white">
								Browse Jobs
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Browse Employers
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Candidate Dashboard
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Saved Jobs
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white font-medium mb-4">Employers</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-white">
								Post a Job
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Browse Candidates
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Employers Dashboard
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Applications
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-white font-medium mb-4">Support</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:text-white">
								FAQs
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white">
								Terms & Conditions
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
				<p className="text-sm">
					&copy; 2021 Jobpilot - Job Portal. All rights reserved.
				</p>
				<div className="flex gap-6">
					<Youtube />
					<Instagram />
					<Twitter />
					<Linkedin />
				</div>
			</div>
		</footer>
	)
}
