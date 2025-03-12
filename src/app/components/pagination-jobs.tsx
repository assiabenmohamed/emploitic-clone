import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
	pageCount: number
	currentPage: number
}

export default function PaginationJobs({ pageCount, currentPage }: Props) {
	console.log("pageCount", pageCount)
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href={`?page=${currentPage - 1}`} />
				</PaginationItem>
				{[...Array(pageCount)].map((_, index) => (
					<PaginationItem className="rounded-2xl" key={"page" + index}>
						<PaginationLink href={`?page=${index + 1}`}>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href={`?page=${currentPage + 1}`} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
