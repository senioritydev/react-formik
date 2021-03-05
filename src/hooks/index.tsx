import { useHistory } from 'react-router-dom';

export const UseLogin = () => {
    const history = useHistory();

    const handleLogin = (values: any) => {
        const { firstname, lastname } = values;
        alert(`welcome ${firstname} ${lastname}` );
        history.push('/home');
    }
    return { handleLogin }
}