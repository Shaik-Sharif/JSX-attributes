import './index.css'

export function Header(){

    let name = "hey john"
    return(
    <div>
        {name }
       {( sum(3,3))}
       <h1>Sharif </h1>
{/* In the JSX attribultes main things are the className and for  */}
        {4 * 6}
        {/* {alert(' Helo shark tank sharif ')} */}
        <input type='checkbox' id='sub'/>
        <label htmlFor='sub'>Subscribe</label>
    </div>
    )
}
                                                                                                 

function sum(n1,n2){
    return n1 + n2
}