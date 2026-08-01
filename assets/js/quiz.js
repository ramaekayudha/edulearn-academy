const quizData = [
    {
        question: "Apa itu Phishing?",
        options: ["Virus yang merusak hardware", "Penipuan dengan menyamar sebagai pihak terpercaya", "Software untuk mempercepat internet", "Jaringan WiFi aman"],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan AI Hallucination?",
        options: ["AI terlalu pintar", "AI menghasilkan informasi salah yang tampak meyakinkan", "AI mengalami kerusakan fisik", "AI yang menolak perintah"],
        answer: 1
    },
    {
        question: "Manakah praktik keamanan siber yang terbaik?",
        options: ["Menggunakan tanggal lahir sebagai password", "Membagikan OTP jika diminta polisi", "Menggunakan Password Manager", "Mengklik link di email tanpa cek pengirim"],
        answer: 2
    }
];

let currentQuiz = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', loadQuiz);

function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    if (currentQuiz < quizData.length) {
        const q = quizData[currentQuiz];
        quizContainer.innerHTML = `
            <div class="bg-slate-800 p-4 rounded-lg mb-4 border border-slate-700">
                <h5 class="fw-bold text-white mb-3">${currentQuiz + 1}. ${q.question}</h5>
                <div class="d-grid gap-2">
                    ${q.options.map((opt, i) => `
                        <button onclick="checkAnswer(${i})" class="btn btn-outline-cyan-400 text-start text-slate-300 hover:bg-cyan-400 hover:text-slate-900">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        localStorage.setItem('lastQuizScore', score);
        quizContainer.innerHTML = `
            <div class="text-center p-5 bg-slate-800 rounded-lg border border-slate-700">
                <i class="bi bi-trophy-fill text-yellow-400 fs-1"></i>
                <h3 class="text-white mt-3">Kuis Selesai!</h3>
                <p class="text-cyan-400 fs-4">Skor Anda: ${score} / ${quizData.length}</p>
                <button onclick="restartQuiz()" class="btn btn-cyan-400 fw-bold">Coba Lagi</button>
            </div>
        `;
    }
}

function checkAnswer(selected) {
    const correct = quizData[currentQuiz].answer;
    if (selected === correct) {
        score++;
    }
    currentQuiz++;
    loadQuiz();
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}