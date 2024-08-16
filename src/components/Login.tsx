import { Button, Input } from 'antd';

interface LoginProps {
    error?: string;
    setUserName: (value: string) => void;
    setError: (value: string) => void;
    userName: string;
}

const Login: React.FC<LoginProps> = ({ error, setUserName, userName, setError }) => {

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

    const handleLogin = () => {
        if (userName.trim() == '') {
            setError('username required')
        } else {
            setUserName('')
            localStorage.setItem('user', userName)
        }
    }

    return (
        <div className='login-container'>
            <h3>Login</h3>
            <Input
                placeholder="Enter username"
                onChange={handleInputChange}
                value={userName}
                aria-label="Username"
            />
            {error && <p className='error'>{error}</p>}
            <Button
                type="primary"
                onClick={handleLogin}
                style={{ padding: "0 50px" }}
                aria-label="Login Button"
            >
                Login
            </Button>
        </div>
    );
};

export default Login;
