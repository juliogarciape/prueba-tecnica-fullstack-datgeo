export interface Employee {
	id: number
	first_name: string
	last_name: string
	email: string
	employee: EmployeeDetail
}

export interface EmployeeDetail {
	job_title: string
	salary: number
}
