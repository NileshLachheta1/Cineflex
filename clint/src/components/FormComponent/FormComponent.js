import { useEffect,useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register,customerLogin} from '../../store/userSlice.js';
import jscookie from 'js-cookie';
import './FormComponent.css';
function FormComponent() {
    const [userData,setUserData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getData = (event)=>{
        const {name,value} = event.target;
        setUserData({
            ...userData,
            [name]:value
        });
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        // dispatch(register(userData));
        console.log(userData);
        dispatch(register(userData));

    }
    const handleSubmit2 = (event)=>{
        event.preventDefault();
        console.log(userData);
        console.log("see what dispatch returns : ");
        // console.log(dispatch(customerLogin(userData)));
        const obj = dispatch(customerLogin(userData));
        const jwtCredential = jscookie.get('customer_jwt_token');
        if(jwtCredential && (obj.type == 'userSlice/customerLogin')){
            console.log("Eligible");
            console.log("obj : ",obj);
            console.log("obj.payload : ",obj.payload);
            console.log("obj.type : ",obj.type);
            navigate('/eventhome',{
                state: obj.payload.email
            });
        }
    }


    let toggle;
    let formContainer;
    useEffect(() => {
        formContainer = document.getElementById('container')
        setTimeout(() => {
            formContainer.classList.add('sign-in')
        }, 200);

    });
    toggle = () => {
        formContainer.classList.toggle('sign-in')
        formContainer.classList.toggle('sign-up')
    }

    // export const customereLogin =async (customerCredential)=>{  
    //     try{
    //         console.log(customerCredential);
    //         var result = await axios.post(candidate_requestedUrl+'/candidateLogin',candidateCredential); 
    //         console.log("candidateSlice : ",result);
    //         console.log("token : ",result.data.token);
    //         if(result.status==201)
    //            jscookie.set("candidate_email",candidateCredential.email);
     
    //         jscookie.set('candidate_jwt_token',result.data.token,{expires:1});
    //         return result;
    //     }catch(err){
    //         console.log("error in candidateSlice : ",err);
    //     }
    // }


    return (<>
        <div id="formComponent">
            <div id="container" className="formContainer">
                {/* FORM SECTION */}
                <div className="formRow">
                    {/* SIGN UP */}
                    <div className="col align-items-center flexCol sign-up">
                        <div className="form-wrapper signupForm align-items-center">
                            <div className="customerForm sign-up">
                                <form onSubmit={handleSubmit}> 
                                    <div className="inputGroup">
                                        <i className='bx bxs-user'></i>
                                        <input type="text" name="username" placeholder="Username" onChange={getData} />
                                    </div>
                                    <div className="inputGroup">
                                        <i className='bx bx-mail-send'></i>
                                        <input type="email" name="email" placeholder="Email" onChange={getData} />
                                    </div>
                                    <div className="inputGroup">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password" name="password" placeholder="Password" onChange={getData} />
                                    </div>
                                    <div className="inputGroup">
                                        <i className='bx bxs-lock-alt'></i>
                                        <input type="password" name="cpassword" placeholder="Confirm password" onChange={getData} />
                                    </div>
                                    <div className="formCheck">
                                        <div>
                                            <input className="formCheck-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;
                                            <label className="formCheck-label" htmlFor="flexRadioDefault1">
                                                User
                                            </label>
                                        </div>
                                        <div>
                                            <input className="formCheck-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />&nbsp;
                                            <label className="formCheck-label" htmlFor="flexRadioDefault2">
                                                Theater Owner
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit">Sign up</button>
                                    <p>
                                        <span>
                                            Already have an account?
                                        </span>
                                        <b onClick={toggle} className="pointer">
                                            Sign in here
                                        </b>
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                    {/* END SIGN UP */}
                    {/* SIGN IN */}
                    <div className="col align-items-center flexCol sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="customerForm sign-in">
                            <form onSubmit={handleSubmit2}>
                                <div className="inputGroup">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" name="email" placeholder="Username" onChange={getData} />
                                </div>
                                <div className="inputGroup">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" name="password" placeholder="Password" onChange={getData} />
                                </div>
                                <button type="submit">Sign In</button>
                                <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </form>
                        </div>
                        </div>
                        <div className="form-wrapper">
                        </div>
                    </div>
                    {/* END SIGN IN */}
                </div>
                {/* END FORM SECTION */}
                {/* CONTENT SECTION */}
                <div className="formRow contentRow">
                    {/* SIGN IN CONTENT */}
                    <div className="col align-items-center flexCol">
                        <div className="textClass sign-in">
                            <h2>
                                Welcome
                            </h2>

                        </div>
                        <div className="formImg sign-in">

                        </div>
                    </div>
                    {/* END SIGN IN CONTENT */}
                    {/* SIGN UP CONTENT */}
                    <div className="col align-items-center flexCol">
                        <div className="formImg sign-up">

                        </div>
                        <div className="textClass sign-up">
                            <h2>
                                Join with us
                            </h2>

                        </div>
                    </div>
                    {/* END SIGN UP CONTENT */}
                </div>
                {/* END CONTENT SECTION */}
            </div>
        </div>

    </>);

}

export default FormComponent;




