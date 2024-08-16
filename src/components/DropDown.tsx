import { useState } from 'react';
import { AutoComplete, Button, } from 'antd';
import { Select, Space } from 'antd';
import { weatherSearchApiHandler } from '../services/weatherapi';
import { countries } from '../utils/countries'
import Slider from './Slider';
interface OptionType {
    label: string;
    value: string;
}

const Dropdown: React.FC = () => {
    const [options, setOptions] = useState<OptionType[]>(Object.keys(countries).map(c => ({ label: c, value: c })));
    const [cities, setCities] = useState<OptionType[]>([]);
    const [search, setSearch] = useState<string[]>([])
    const [weather, setWeather] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const handleSearch = (value: string) => {
        const pattern = new RegExp(value, 'i');
        setOptions(() => {
            return options.filter((ele) => pattern.test(ele.label))
        });
    };


    const selectCountry = (value: string) => {
        setCities(countries[value as keyof typeof countries].map((city: string) => ({ label: city, value: city })))
    }

    const handleChange = (value: string[]) => {
        setSearch(value)
    };

    const searchButtonHandler = async () => {
        setLoading(true)
        const response = await Promise.all(search.map(name => weatherSearchApiHandler(name)))
        setWeather(response)
        console.log("response :", response)
        setLoading(false)
    }

    return (
        <>
        <div className='dropdown-container'>

            <Space style={{ width: '100%' }} direction="vertical">
                <AutoComplete
                    onSelect={selectCountry}
                    style={{ width: '80%' }}
                    onSearch={handleSearch}
                    placeholder="Search country"
                    options={options}
                />
            </Space>
            <Space style={{ width: '100%' }} direction="vertical">
                <Select
                    mode="multiple"
                    allowClear
                    style={{ minWidth: '80%' , maxWidth:'80%' }}
                    placeholder="Select City"
                    onChange={handleChange}
                    options={cities}
                />
            </Space>

            <Button type="primary" loading={loading} onClick={searchButtonHandler} style={{ padding: "0 50px" }}>
                Search
            </Button>



            <Slider weather={weather} />
        </div>
        </>
    );
};

export default Dropdown;