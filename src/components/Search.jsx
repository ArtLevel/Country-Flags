import styled from 'styled-components'

import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
	width: 100%;

	display: flex;
	align-items: center;

	background-color: var(--colors-ui-base);
	padding: 1rem 2rem;

	border-radius: var(--radii);
	box-shadow: var(--shadow);

	@media (min-width: 767px) {
		width: 280px;
		margin-bottom: 0;
	}
`

const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...',
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	color: var(--color-text);
	background-color: var(--colors-ui-base);
`

export const Search = ({ search, setSearch }) => {
	return (
		<InputContainer>
			<IoSearch />
			<Input
				onChange={(event) => setSearch(event.target.value)}
				value={search}
			/>
		</InputContainer>
	)
}
