import Select from 'react-select';
import { StylesConfig } from 'react-select';

const options = [
    { value: 'negative', label: 'Negative notification type description', color: '#CC2610' },
    { value: 'neutral', label: 'Neutral notification type description', color: '#F1AE11' },
    { value: 'positive', label: 'Positive notification type description', color: '#00A441' }
  ];
  
const customStyles: StylesConfig  = {
    control: (provided:any) => ({
      ...provided,
      background:"#F7F7F7",
      border:"none",
      fontSize:"12px",
      fontWeight:"600",
      borderRadius:"0px 12px 12px 0px",
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }),
    valueContainer:(provided:any)=>({
        ...provided,
        padding:"8px 18px"
    }),
    dropdownIndicator: (provided:any) => ({
      ...provided,
      display: 'none'
    }),
    clearIndicator: (provided:any) => ({
      ...provided,
      padding: '5px',
      color: "#5F69C7"
    }),
    singleValue: (provided:any, state:any) => ({
        ...provided,
        color: state.selectProps.value ? state.selectProps.value.color : '#495057' // Set single value color based on selected option
      }),
    option: (provided:any, state:any) => ({
        ...provided,
        fontSize:"12px",
        fontWeight:"600",
        background:state.isFocused?'none':"none",
        color: state.data.color,
      })
  };  


const SearchSelect = () => {
    const handleChange = (selectedOption:any) => {
        console.log(`Selected: ${selectedOption.label}`);
    };
    return (
        <div className='p-4'>
            <Select
                id="notificationType"
                options={options}
                onChange={handleChange}
                placeholder="Select..."
                styles={customStyles}
                defaultValue={options.find(option => option.value === 'negative')}
                isClearable
            />
        </div>
    );
}

export default SearchSelect;