// Mobile nav toggle
function toggleNav() {
    const nav = document.getElementById('topNav');
    const btn = document.querySelector('.menu-toggle');
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
}

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Quiz scoring
const ANSWERS = { q1: 'c', q2: 'c', q3: 'b', q4: 'c', q5: 'b', q6: 'b', q7: 'b', q8: 'b', q9: 'b', q10: 'b' };
function scoreQuiz() {
    let correct = 0, total = Object.keys(ANSWERS).length;
    for (const k of Object.keys(ANSWERS)) {
        const sel = document.querySelector(`input[name="${k}"]:checked`);
        if (sel && sel.value === ANSWERS[k]) correct++;
    }
    const pct = Math.round((correct / total) * 100);
    const level =
        pct === 100 ? 'Perfect — strong habits!' :
            pct >= 80 ? 'Great — a few tweaks left.' :
                pct >= 60 ? 'Decent — review the tips above.' :
                    'Start with the 7 protection moves above.';
    document.getElementById('quizResult').textContent = `Score: ${correct}/${total} (${pct}%). ${level}`;
}
