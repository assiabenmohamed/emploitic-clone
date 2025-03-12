import { SearchIcon } from "lucide-react"
import { Input } from "./ui/input"

interface CountryOption {
	label: string
	value: string
	image: string
}

const countryOptions: CountryOption[] = [
	{ label: "India", value: "ind", image: "/image 1(1).png" },
	{ label: "America", value: "us", image: "/image 1.png" },
]
interface Props {
	value: string
	onChangeValue: (value: string) => void
}

export default function Herosearch({ onChangeValue, value }: Props) {
	return (
		<div className="*:not-first:mt-2">
			<div className="flex h-8">
				<div className="relative h-full border-r">
					<Input
						className="peer ps-9 pe-9 border-none h-full w-[15vw]"
						placeholder="Job title, keyword..."
						type="search"
						value={value}
						onChange={(e) => onChangeValue(e.target.value)}
					/>
					<div className="text-blue-600 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
						<SearchIcon size={16} />
					</div>
					<button
						className="text-muted-foreground/80 hover:text-foreground absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center transition-[color,box-shadow] outline-none"
						aria-label="Submit search"
						type="submit"
					></button>
				</div>
			</div>
		</div>
	)
}
