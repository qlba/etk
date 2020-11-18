import {IRouteFormValues} from '../typedefs';

export function loadValues(): IRouteFormValues | null {
	const storedValue = window.localStorage.getItem('values');

	if (!storedValue) {
		return null;
	}

	try {
		return JSON.parse(storedValue) as IRouteFormValues;
	} catch (err) {
		return null;
	}
}

export function saveValues(values: IRouteFormValues): void {
	window.localStorage.setItem('values', JSON.stringify(values));
}
