import "./Form.css"

export const Form = ({id,label,value,type,onChange}) =>{
     
    return(
        <div>
            <label><p className="label">{label}</p></label>
            <input
            className="inputForm"
            type={type}
            onChange={({target}) => onChange(id,target.value)}
            value={value}
            />
        </div>
         )
    } 