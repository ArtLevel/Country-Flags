import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import Controls from '../components/Controls'
import Card from '../components/Card'
import List from '../components/List'
import { ALL_COUNTRIES } from '../config'

const HomePage = ({ countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState([])

	const { push } = useHistory()

	const handleSearch = (search, region) => {
		let data = [...countries]

		if (region) {
			data = data.filter((c) => c.region.includes(region))
		}

		if (search) {
			data = data.filter((c) =>
				c.name.toLowerCase().includes(search.toLowerCase())
			)
		}

		setFilteredCountries(data)
	}

	useEffect(() => {
		if (!countries.length) {
			axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
		}
	}, [countries])

	useEffect(() => {
		handleSearch()
	}, [countries])

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filteredCountries.map((c) => {
					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString(),
							},
							{
								title: 'Region',
								description: c.region,
							},
							{
								title: 'Capital',
								description: c.capital,
							},
						],
					}

					return (
						<Card
							key={c.name}
							onClick={() => push(`/country/${c.name}`)}
							{...countryInfo}
						/>
					)
				})}
			</List>
		</>
	)
}

export default HomePage
