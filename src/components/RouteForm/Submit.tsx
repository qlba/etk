import React, {FC} from 'react';

interface ISubmitProps {
	disabled: boolean
}

const Submit: FC<ISubmitProps> = ({disabled}: ISubmitProps) => (
	<button type="submit" className="btn btn-primary" disabled={disabled}>
		Сохранить
	</button>
);

export default Submit;
