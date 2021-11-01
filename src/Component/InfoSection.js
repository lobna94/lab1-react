import intro from '../assets/img/illustration-intro.png'

console.log(intro); 


export default function InfoSection(){
    return(
        <div>
       <img src={intro} alt="intro" />;
       <h2 className="text-white w-30"> All your Files in one location secure,</h2>
       <h2 className="text-white w-30"> accessable any where.</h2>
      <p className="text-white w-50 m-auto">
      Stay productive, wherever you are Never let location be an issue when accessing your files.
       Fylo has you Covered for all of your file storage needs.
        Securely share files and folders with friends, 
        family and calleagues for live callaboration.
       No email attachments required. See how Fylo works
      </p>
      <button className="Get-start w-40">Get Sarted</button>
        </div>
    )
    
}