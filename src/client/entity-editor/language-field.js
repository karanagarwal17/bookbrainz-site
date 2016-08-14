/*
 * Copyright (C) 2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import {Col, Input, Row} from 'react-bootstrap';

import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import {connect} from 'react-redux';

let LanguageField = ({
	dispatch,
	selectValue,
	languageOptions
}) => (
	<Row>
		<Col
			md={6}
			mdOffset={3}
		>
			<Input
				label="Language"
			>
				<VirtualizedSelect
					options={languageOptions}
					value={selectValue}
					onChange={(value) =>
						dispatch({
							type: 'UPDATE_LANGUAGE_FIELD',
							value
						})
					}
				/>
			</Input>
		</Col>
	</Row>
);

LanguageField.displayName = 'LanguageField';
LanguageField.propTypes = {
	dispatch: React.PropTypes.func,
	languageOptions: React.PropTypes.array,
	selectValue: React.PropTypes.object
};

LanguageField = connect(
	(state) => ({
		selectValue: state.languageValue
	})
)(LanguageField);

export default LanguageField;