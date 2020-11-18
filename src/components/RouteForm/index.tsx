import React, {FC, FormEvent, useState, useMemo, useCallback, useEffect} from 'react';
import {IRouteFormErrors, IRouteFormValues} from '../../typedefs';
import {loadValues, saveValues} from '../../utils/localStorage';
import AssigneeTypeSelect from './AssigneeTypeSelect';
import Field from './Field';
import LongRaidCheckbox from './LongRaidCheckbox';
import Submit from './Submit';
import TextInput from './TextInput';
import WeekdayRadio from './WeekdayRadio';

function validate(values: IRouteFormValues): IRouteFormErrors {
	const errors: IRouteFormErrors = {};

	if (!values.longRaid) {
		return errors;
	}

	if (!values.title) {
		errors.title = 'Наименование не указано';
	}

	if (!values.routeAuthor) {
		errors.routeAuthor = 'Автор маршрута не указан';
	}

	if (values.assigneeType === 'unselected') {
		errors.assigneeType = 'Тип исполнителя не указан';
	}

	return errors;
}

const RouteForm: FC = () => {
	const [values, setValues] = useState<IRouteFormValues>({
		title: '',
		routeAuthor: '',
		assigneeType: 'unselected',
		weekdays: 'mon',
		longRaid: false
	});

	const errors = useMemo<IRouteFormErrors>(
		() => validate(values),
		[values]
	);

	const isFormValid = useMemo<boolean>(
		() => !Object.keys(errors).length,
		[errors]
	);

	const onSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault();

			if (!isFormValid) {
				return;
			}

			saveValues(values);
		},
		[values, isFormValid]
	);

	useEffect(
		() => {
			const storedValues = loadValues();

			if (storedValues) {
				setValues(storedValues);
			}
		},
		[]
	);

	return (
		<form onSubmit={onSubmit}>
			<p className="h5 mb-4">Информация о маршруте</p>

			<Field
				error={errors.title}
				required={values.longRaid}
				controlId="title-input"
				label="Наименование"
			>
				<TextInput
					value={values.title}
					onChange={(title) => setValues({...values, title})}
					isValid={!errors.title}
					name="title"
					id="title-input"
				/>
			</Field>

			<Field
				error={errors.routeAuthor}
				required={values.longRaid}
				controlId="route-author-input"
				label="Автор маршрута"
			>
				<TextInput
					value={values.routeAuthor}
					onChange={(routeAuthor) => setValues({...values, routeAuthor})}
					isValid={!errors.routeAuthor}
					name="routeAuthor"
					id="route-author-input"
				/>
			</Field>

			<Field
				error={errors.assigneeType}
				required={values.longRaid}
				controlId="assignee-type-input"
				label="Тип исполнителя"
			>
				<AssigneeTypeSelect
					isValid={!errors.assigneeType}
					value={values.assigneeType}
					onChange={(assigneeType) => setValues({...values, assigneeType})}
				/>
			</Field>

			<Field
				error="Дни обходов не указаны"
				required={values.longRaid}
				controlId="weekdays-input"
				label="Дни обходов"
			>
				<div className="d-flex align-items-center justify-content-between w-100 h-100">
					<WeekdayRadio
						value={values.weekdays}
						onChange={(weekdays) => setValues({...values, weekdays})}
					/>
					<LongRaidCheckbox
						value={values.longRaid}
						onChange={(longRaid) => setValues({...values, longRaid})}
					/>
				</div>
			</Field>

			<div className="form-group row d-flex justify-content-end">
				<Submit disabled={!isFormValid} />
			</div>
		</form>
	);
};

export default RouteForm;
