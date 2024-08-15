import {useState} from 'react';
import { AutoComplete } from 'antd';
import {countries} from '../utils/countries'
interface OptionType {
    label: string;
    value: string;
  }

const Dropdown: React.FC = () => {
  const [options, setOptions] =useState(Object.keys(countries).map(c=>({lable:c,value:c})));
  const [cities, setCities] =useState(Object.keys(countries).map(c=>({lable:c,value:c})));

  const handleSearch = (value: string) => {
    const pattern = new RegExp(value, 'i');


const optionsData =[
    {
        label:'Pakistan',
        value:'pk'
    },
    {
        label:'Afghanistan',
        value:'af'
    }
    ,
    {
        label:'Iran',
        value:'ir'
    }
]

    setOptions(() => {
       return optionsData.filter((ele)=>pattern.test(ele.label))
    });
  };

  console.log("==>",)

  return (
    <>
    <AutoComplete
onSelect={(e)=>console.log(e)}
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />

    <AutoComplete
    style={{ width: 200 }}
    onSearch={handleSearch}
    placeholder="input here"
    options={options}
  />
  </>
  );
};

export default Dropdown;