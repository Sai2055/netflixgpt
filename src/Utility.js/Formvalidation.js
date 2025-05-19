export default function validateForm(email, password) {
    const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!emailRegex&&!passwordRegex) return "Invalid email and password format";
    if(!emailRegex) return "Invalid email format";
    if(!passwordRegex) return "Invalid password format";
    
    return null;
    
}