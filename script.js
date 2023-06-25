function generatePassword() {
    const lengthInput = document.getElementById('length');
    const allowedCharsInput = document.getElementById('allowedChars');
    const passwordOutput = document.getElementById('password');
  
    const length = parseInt(lengthInput.value);
    const allowedChars = allowedCharsInput.value;
  
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    passwordOutput.textContent = password;
  }
  