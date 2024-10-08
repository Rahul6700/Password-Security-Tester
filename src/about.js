
export default function About(){
    return(
        <div className="main">
            <h1 style={{paddingTop:"70px", fontSize:"50px"}}>Hello there and welcome</h1>
            <h2 style={{paddingTop: "100px", paddingLeft:'200px', paddingRight:"200px", fontSize: "30px"}}>The Password Strength Checker is a React application that helps users assess the strength of their passwords in real-time. Using the zxcvbn library, it provides instant feedback, guiding users toward creating stronger passwords for better security.</h2>
            <a href="https://github.com/dropbox/zxcvbn">Here's a link to the library</a>
            <h2 style={{paddingTop: "100px", paddingLeft:'200px', paddingRight:"200px", fontSize: "30px"}}>Click on the About button to retun to the Password Checker</h2>
        </div>
    )
}