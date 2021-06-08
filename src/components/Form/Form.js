


export const Form = ({id,label,value, onChange}) =>{
     
    return(
        <div>
            <label>{label}</label>
            <input
            type="text"
            onChange={({target}) => onChange(id,target.value)}
            value={value}
            />
        </div>
         )
    } 