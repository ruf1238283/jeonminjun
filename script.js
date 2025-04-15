// 초기 환자 상태
let patientData = {
    heartRate: 75,
    bloodPressure: "120/80",
    temperature: 36.6
  };
  
  // 환자 상태 업데이트 함수
  function updatePatientStatus() {
    // 랜덤으로 환자 상태 변화
    patientData.heartRate = Math.floor(Math.random() * 30) + 60; // 60~90 bpm
    let systolic = Math.floor(Math.random() * 40) + 100; // 100~140 mmHg
    let diastolic = Math.floor(Math.random() * 20) + 60; // 60~80 mmHg
    patientData.bloodPressure = `${systolic}/${diastolic}`;
    patientData.temperature = (36.5 + Math.random() * 1.5).toFixed(1); // 36.5 ~ 38.0°C
  
    // 실시간 상태 업데이트
    document.getElementById('heartRate').textContent = patientData.heartRate;
    document.getElementById('bloodPressure').textContent = patientData.bloodPressure;
    document.getElementById('temperature').textContent = patientData.temperature;
  }
  
  // 간호 처치 퀴즈 정답 확인 함수
  function checkAnswer(answer) {
    const correctAnswer = 'd'; // 예시로 '상태를 계속 모니터링'이 정답
    const resultText = (answer === correctAnswer) ? '정답입니다! 환자의 상태를 계속 모니터링하는 것이 중요합니다.' : '틀렸습니다. 다시 시도해보세요.';
    document.getElementById('quiz-result').textContent = resultText;
  
    // 해설 추가
    const explanationText = (answer === correctAnswer)
      ? '환자의 상태는 안정적인 범위에 있으며, 계속 모니터링하면서 상태 변화에 대응하는 것이 중요합니다.'
      : '환자 상태에 따라 추가적인 처치가 필요할 수 있지만, 가장 중요한 것은 계속 상태를 관찰하는 것입니다.';
  
    document.getElementById('explanation').textContent = explanationText;
  }
  