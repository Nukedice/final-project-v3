import css from './Button.module.css'
import { Link } from 'react-router-dom';
const Button = ({text, action}) => {
    return ( 
        <button className={css.button}> <Link to={action}/>{text}</button>
     );
}
 
export default Button;