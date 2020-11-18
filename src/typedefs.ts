export type AssigneeType = 'intern' | 'junior' | 'middle' | 'senior' | 'lead';

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface IRouteFormValues {
	title: string,
	routeAuthor: string,
	assigneeType: AssigneeType | 'unselected',
	weekdays: Weekday,
	longRaid: boolean
}

export interface IRouteFormErrors {
	title?: string,
	routeAuthor?: string,
	assigneeType?: string
}
