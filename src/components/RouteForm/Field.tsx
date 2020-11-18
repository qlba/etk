import React, {FC, ReactNode} from 'react';
import classnames from 'classnames';

interface IFieldProps {
	controlId: string,
	required: boolean,
	label: string,
	error?: string,
	children: ReactNode
}

const Field: FC<IFieldProps> = (
	{controlId, required, error = '', label, children}: IFieldProps
) => (
	<div className="form-group row">
		<label
			htmlFor={controlId}
			className={classnames('col-sm-2', 'col-form-label', {label__required: required})}
		>
			{label}
		</label>
		<div className="col-sm-10">
			{children}
			{error && (
				<div className="invalid-tooltip">
					{error}
				</div>
			)}
		</div>
	</div>
);

export default Field;
