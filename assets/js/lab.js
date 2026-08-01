document.addEventListener('DOMContentLoaded', function() {
    // PASSWORD STRENGTH CHECKER
    const passInput = document.getElementById('passwordInput');
    const passStrength = document.getElementById('passwordStrength');
    
    if (passInput) {
        passInput.addEventListener('input', function() {
            const val = passInput.value;
            let strength = 0;
            if (val.length >= 8) strength++;
            if (/[A-Z]/.test(val)) strength++;
            if (/[a-z]/.test(val)) strength++;
            if (/[0-9]/.test(val)) strength++;
            if (/[^A-Za-z0-9]/.test(val)) strength++;

            const widths = ['0%', '20%', '40%', '60%', '80%', '100%'];
            const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e', '#06b6d4'];
            const labels = ['Sangat Lemah', 'Lemah', 'Cukup', 'Baik', 'Kuat', 'Sangat Kuat'];
            
            passStrength.style.width = widths[strength];
            passStrength.style.backgroundColor = colors[strength];
            passStrength.textContent = labels[strength];
        });
    }

    // PASSWORD GENERATOR
    const genBtn = document.getElementById('generateBtn');
    if (genBtn) {
        genBtn.addEventListener('click', function() {
            const length = 12;
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
            let pass = "";
            for (let i = 0; i < length; i++) {
                pass += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('generatedPass').value = pass;
        });
    }
});