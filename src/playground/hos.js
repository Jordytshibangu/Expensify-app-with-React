//Higher order Component 
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) =>(
    <div>
        <h1> INFO</h1>
        <p>The info is : {props.info}</p> 
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
           {props.isAdmin &&  <p> This is private info please do not share !</p>}
            <WrappedComponent {...props}/>
        </div>
    )

};
const requireAuthentication = (WrappedComponent)=>{
    return (props) =>(
        <div>
         {props.isAuth && <p>this is a component </p>} 
            <WrappedComponent {...props}/>
        </div>
    )
};

const AuthInfo = requireAuthentication(Info)

const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true}  info="There are the details"/>, document.getElementById('app'))