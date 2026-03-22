const dayData = {
    1: [
        { w: "resume", m: "이력서", n: ["Submit your ___ to HR.|인사팀에 ___를 제출하세요.", "Update your ___ regularly.|___를 정기적으로 업데이트하세요.", "Attach a ___ to the mail.|메일에 ___를 첨부하세요.", "Bring your ___ to the meeting.|회의에 ___를 가져오세요.", "A digital ___ is preferred.|디지털 ___를 선호합니다.", "Check for errors in your ___.|___의 오류를 확인하세요.", "Review the ___ carefully.|___를 주의 깊게 검토하세요."], h: ["Despite his impressive ___, the hiring committee was skeptical about his long gaps in employment.|인상적인 이력서에도 불구하고, 채용 위원회는 그의 긴 고용 공백에 대해 회의적이었습니다."] },
        { w: "opening", m: "공석, 결원; 개장, 개시", n: ["There is a job ___.|일자리 공석이 있습니다.", "Check the latest ___ list.|최신 공석 목록을 확인하세요.", "The store ___ is at 9 AM.|매장 개장은 오전 9시입니다.", "Fill the ___ immediately.|공석을 즉시 채우세요.", "A new ___ in sales.|영업 부서의 새로운 공석.", "Grand ___ ceremony tonight.|오늘 밤 그랜드 개장 기념식.", "We have no ___ currently.|현재 공석이 없습니다."], h: ["The Chief Financial Officer's sudden departure created a critical ___ that must be filled by a candidate with at least ten years of executive experience.|재무 이사의 갑작스러운 사임으로 인해 최소 10년의 임원 경력을 가진 후보자로 채워야 하는 중요한 공석이 생겼습니다."] },
        { w: "applicant", m: "지원자, 신청자", n: ["The ___ is waiting.|그 지원자가 기다리고 있습니다.", "Review each ___'s profile.|각 지원자의 프로필을 검토하세요.", "We have 100 ___s.|지원자가 100명 있습니다.", "The best ___ was hired.|가장 뛰어난 지원자가 채용되었습니다.", "Contact the next ___.|다음 지원자에게 연락하세요.", "Are you an ___ for this?|당신이 이것의 신청자입니까?", "The ___ submitted the form.|지원자가 양식을 제출했습니다."], h: ["Every ___ seeking a position in our software development department must undergo a rigorous technical assessment involving complex algorithm challenges.|우리 software 개발 부서의 직책을 원하는 모든 지원자는 복잡한 알고리즘 문제를 포함하는 엄격한 기술 평가를 거쳐야 합니다."] },
        { w: "requirement", m: "필요조건, 요건", n: ["Meeting the ___ is hard.|요건을 충족하는 것은 어렵습니다.", "Basic ___ for the job.|직업을 위한 기본 요건.", "Read the entry ___s.|입학 요건을 읽어보세요.", "System ___ is high.|시스템 필요 사양이 높습니다.", "A mandatory ___ for all.|모두에게 의무적인 요건.", "Check the legal ___s.|법적 요건을 확인하세요.", "Visa ___s are strict.|비자 요건이 엄격합니다."], h: ["Maintaining a high level of confidentiality regarding client data is a fundamental ___ for all employees joining our legal advisory firm.|고객 데이터에 대한 높은 수준의 기밀을 유지하는 것은 우리 법률 자문 회사에 입사하는 모든 직원의 근본적인 필요조건입니다."] },
        { w: "meet", m: "(필요, 요구 등을) 만족시키다", n: ["___ the deadline.|마감 기한을 만족시키세요(지키세요).", "Does it ___ your needs?|그것이 당신의 요구를 만족시키나요?", "We strive to ___ standards.|표준을 만족시키기 위해 노력합니다.", "Try to ___ the quota.|할당량을 만족시키도록 노력하세요.", "The service failed to ___ it.|서비스가 그것을 만족시키지 못했습니다.", "___ the criteria.|기준을 만족시키세요.", "Hard to ___ expectations.|기대를 만족시키기 어렵습니다."], h: ["Following the unexpected surge in consumer demand, the manufacturing facility had to increase its operational hours significantly to ___ the quarterly production quotas set by the international headquarters.|예상치 못한 소비자 수요 급증에 따라, 제조 시설은 국제 본사가 설정한 분기별 생산 할당량을 만족시키기 위해 가동 시간을 대폭 늘려야 했습니다."] },
        { w: "qualified", m: "자격 있는, 적격의", n: ["She is highly ___.|그녀는 매우 자격 있습니다.", "Find a ___ doctor.|자격 있는 의사를 찾으세요.", "Are you ___ for this?|이것에 자격이 있습니까?", "Only ___ staff can enter.|자격 있는 직원만 입장 가능합니다.", "A ___ accountant is needed.|적격의 회계사가 필요합니다.", "Most ___ candidates applied.|가장 자격 있는 후보자들이 지원했습니다.", "Check if they are ___.|그들이 적격인지 확인하세요."], h: ["The search committee is tasked with identifying a highly ___ individual who possesses both a PhD in Economics and extensive experience in international trade policy.|검색 위원회는 경제학 박사 학위와 국제 무역 정책 분야의 광범위한 경험을 모두 갖춘 매우 자격 있는 인물을 식별하는 임무를 맡았습니다."] },
        { w: "candidate", m: "후보자, 지원자", n: ["The best ___ won.|최고의 후보자가 이겼습니다.", "Interview the final ___s.|최종 후보자들을 면접하세요.", "A strong ___ for the job.|직업에 대한 강력한 후보자.", "Who is the leading ___?|유력한 후보자는 누구입니까?", "The ___ is very polite.|그 후보자는 매우 공손합니다.", "We narrowed down the ___s.|후보자들을 좁혔습니다.", "The internal ___ was picked.|내부 후보자가 선택되었습니다."], h: ["After conducting three rounds of intensive interviews, the department head still found it difficult to select the most suitable ___ from the pool of finalists.|세 차례의 집중 면접을 실시한 후에도 부서장은 최종 후보자들 중에서 가장 적합한 후보자를 선택하는 데 여전히 어려움을 느꼈습니다."] },
        { w: "confidence", m: "확신, 자신; 신임", n: ["Have ___ in yourself.|자신에 대한 확신을 가지세요.", "Market ___ is rising.|시장 신임이 상승하고 있습니다.", "Build your self-___.|당신의 자신감을 쌓으세요.", "He spoke with ___.|그는 자신 있게 말했습니다.", "Investors lost ___.|투자자들이 신임을 잃었습니다.", "Full ___ in our team.|우리 팀에 대한 전적인 확신.", "A matter of strict ___.|엄격한 신임에 대한 문제."], h: ["The CEO's transparent approach to addressing the recent financial losses was strategically designed to restore shareholder ___ and stabilize the company's fluctuating stock price.|최근의 재무 손실을 다루는 CEO의 투명한 접근 방식은 주주들의 신임을 회복하고 회사의 변동하는 주가를 안정시키기 위해 전략적으로 설계되었습니다."] },
        { w: "highly", m: "매우, 대단히", n: ["It is ___ recommended.|그것은 매우 추천됩니다.", "A ___ skilled worker.|대단히 숙련된 노동자.", "___ effective results.|매우 효과적인 결과.", "___ respected leader.|대단히 존경받는 리더.", "___ unlikely to happen.|일어날 가능성이 매우 낮음.", "The job is ___ complex.|일이 매우 복잡합니다.", "___ beneficial for us.|우리에게 매우 유익합니다."], h: ["Given the current volatility of the energy sector, it is ___ probable that utility costs will continue to escalate throughout the upcoming fiscal year.|에너지 분야의 현재 변동성을 고려할 때, 다가오는 회계 연도 내내 유틸리티 비용이 계속 상승할 가능성이 매우 높습니다."] },
        { w: "professional", m: "전문적인, 전문가", n: ["Keep a ___ attitude.|전문적인 태도를 유지하세요.", "Hire a ___ for this.|이것을 위해 전문가를 고용하세요.", "___ appearance is key.|전문적인 외모가 핵심입니다.", "Give a ___ presentation.|전문적인 발표를 하세요.", "Follow the ___ code.|전문가 규정을 따르세요.", "A ___ sports player.|전문 스포츠 선수.", "Ask for ___ advice.|전문적인 조언을 구하세요."], h: ["To cultivate a more collaborative and respectful work environment, the human resources department has introduced a new code of conduct that emphasizes the importance of maintaining ___ boundaries and mutual respect among colleagues.|보다 협력적이고 존중하는 업무 환경을 조성하기 위해, 인사부는 동료 간의 전문적인 경계 유지와 상호 존중의 중요성을 강조하는 새로운 행동 강령을 도입했습니다."] },
        { w: "interview", m: "면접, 면접을 보다", n: ["Schedule an ___ today.|오늘 면접을 잡으세요.", "How was your job ___?|취업 면접은 어땠나요?", "The ___ was successful.|그 면접은 성공적이었습니다.", "___ the new applicants.|새 지원자들을 면접하세요.", "Wear a suit for the ___.|면접을 위해 정장을 입으세요.", "Prepare for the ___ questions.|면접 질문에 대비하세요.", "The ___ lasted an hour.|면접은 1시간 동안 지속되었습니다."], h: ["While the candidate's technical skills were exceptional, her inability to articulate long-term career goals during the final ___ led the panel to reconsider her suitability.|지원자의 기술적 능력은 뛰어났지만, 최종 면접 동안 장기적인 경력 목표를 명확하게 설명하지 못한 점이 패널로 하여금 그녀의 적합성을 재고하게 만들었습니다."] },
        { w: "hire", m: "고용하다", n: ["We need to ___ more staff.|우리는 직원을 더 고용해야 합니다.", "They will ___ him soon.|그들은 곧 그를 고용할 것입니다.", "Ready to ___ new talent.|새로운 인재를 고용할 준비 완료.", "Who should we ___ next?|다음에 누구를 고용해야 할까요?", "The company is ___ing.|회사가 채용 중입니다.", "___ a consultant for help.|도움을 위해 고문을 고용하세요.", "They decided not to ___ him.|그들은 그를 고용하지 않기로 했습니다."], h: ["The firm’s expansion into the European market has prompted the management to ___ dozens of local sales representatives who are fluent in multiple languages.|회사의 유럽 시장 확장은 경영진으로 하여금 여러 언어에 능숙한 수십 명의 현지 영업 사원들을 고용하도록 촉발했습니다."] },
        { w: "training", m: "교육, 훈련", n: ["Safety ___ is mandatory.|안전 교육은 의무입니다.", "The ___ session starts now.|훈련 세션이 지금 시작됩니다.", "New employee ___ program.|신입 사원 교육 프로그램.", "Hands-on ___ is best.|실습 교육이 최고입니다.", "Complete your ___ online.|온라인으로 교육을 완료하세요.", "A week of intensive ___.|일주일간의 집중 훈련.", "___ for the marathon.|마라톤을 위한 훈련."], h: ["The IT department will provide specialized cybersecurity ___ to all administrative staff members in order to minimize the risk of data breaches caused by phishing attempts.|IT 부서는 피싱 시도로 인한 데이터 유출 위험을 최소화하기 위해 모든 행정 직원에게 전문적인 사이버 보안 교육을 제공할 것입니다."] },
        { w: "reference", m: "추천서; 참고", n: ["Provide a professional ___.|전문적인 추천서를 제공하세요.", "Check the ___ list.|참고 목록을 확인하세요.", "Use this for future ___.|나중에 참고할 때 이것을 쓰세요.", "A letter of ___.|추천서 한 장.", "The book is for ___.|그 책은 참고용입니다.", "Need a solid ___.|확실한 추천서가 필요합니다.", "Check his ___s.|그의 추천인들을 확인하세요."], h: ["Applicants are required to submit at least three letters of ___ from previous employers who can vouch for their technical expertise and work ethic.|지원자들은 자신의 기술적 전문성과 직업 윤리를 보증해 줄 수 있는 이전 고용주로부터 최소 세 장의 추천서를 제출해야 합니다."] },
        { w: "position", m: "일자리, 직책, 두다", n: ["A vacant ___ in sales.|영업부의 빈 일자리.", "What is your current ___?|현재 직책은 무엇입니까?", "Apply for the manager ___.|매니저 직책에 지원하세요.", "___ the table here.|테이블을 여기에 두세요.", "A high ___ in the firm.|회사의 높은 직책.", "Which ___ do you prefer?|어떤 직책을 선호하나요?", "Changing my ___ now.|지금 내 입장을 변경하는 중."], h: ["She has been promoted to a senior executive ___, where she will be responsible for overseeing the company's long-term strategic planning and international partnerships.|그녀는 수석 임원 직책으로 승진했으며, 그곳에서 회사의 장기적인 전략 계획과 국제 파트너십을 감독하는 책임을 맡게 될 것입니다."] },
        { w: "achievement", m: "성취, 달성", n: ["A great ___.|위대한 성취.", "Recognize her ___s.|그녀의 성과들을 인정하세요.", "Lifelong ___ award.|평생 성취 상.", "The ___ of the goal.|목표의 달성.", "Academic ___ is important.|학업적 성취는 중요합니다.", "Proud of his ___s.|그의 성취들이 자랑스럽습니다.", "Sense of ___ after work.|일 마친 후의 성취감."], h: ["The successful implementation of the new software system across all global branches was hailed as the most significant technical ___ of the decade for the company.|전 세계 모든 지사에 새로운 소프트웨어 시스템을 성공적으로 구현한 것은 회사에 있어 지난 10년 동안 가장 중요한 기술적 성취로 칭송받았습니다."] },
        { w: "impressed", m: "인상 깊게 생각하는, 감명을 받은", n: ["I was ___ by him.|나는 그에게 인상 깊게 감명 받았습니다.", "Are you ___?|감명 받았나요?", "The boss was ___|사장은 깊은 인상을 받았습니다.", "___ with the service.|서비스에 감명 받음.", "Deeply ___ by the movie.|영화에 깊이 감명 받음.", "The judges were ___.|심사위원들이 인상 깊게 보았습니다.", "Highly ___ with the result.|결과에 매우 감명 받음."], h: ["The potential investors were thoroughly ___ by the startup's innovative business model and the CEO's compelling vision for the future of sustainable energy.|잠재적 투자자들은 스타트업의 혁신적인 비즈니스 모델과 지속 가능한 에너지의 미래에 대한 CEO의 설득력 있는 비전에 철저히 감명을 받았습니다."] },
        { w: "excellent", m: "훌륭한, 탁월한", n: ["___ customer service.|훌륭한 고객 서비스.", "An ___ choice.|탁월한 선택.", "The food was ___.|음식이 훌륭했습니다.", "Maintain ___ health.|탁월한 건강을 유지하세요.", "___ communication skills.|훌륭한 의사소통 능력.", "An ___ opportunity.|탁월한 기회.", "Results are ___.|결과가 훌륭합니다."], h: ["Owing to her ___ performance in the sales department, she was selected to represent the company at the upcoming international trade convention in Geneva.|영업 부서에서의 탁월한 실적 덕분에, 그녀는 다가오는 제네바 국제 무역 박람회에서 회사를 대표할 인물로 선정되었습니다."] },
        { w: "eligible", m: "자격이 있는, 적격의", n: ["Are you ___?|자격이 있습니까?", "___ for the discount.|할인 적격.", "Not ___ to apply.|지원 자격이 안 됨.", "___ for health insurance.|건강보험 자격이 있는.", "Check if you are ___.|자격이 있는지 확인하세요.", "Only ___ staff can join.|자격 있는 직원만 가입 가능.", "The ___ candidates.|적격 후보자들."], h: ["Employees who have served the company for more than five consecutive years are automatically ___ for the enhanced retirement benefit package and additional stock options.|5년 이상 연속으로 회사에 근무한 직원들은 강화된 퇴직금 패키지와 추가 주식 매수 선택권(스톡옵션)을 받을 자격이 자동으로 주어집니다."] },
        { w: "identify", m: "알아보다, 확인하다", n: ["___ the problem.|문제를 확인하세요.", "Can you ___ this?|이것을 알아보겠습니까?", "___ the source.|출처를 확인하세요.", "The system will ___ you.|시스템이 당신을 알아볼 것입니다.", "Need to ___ the cause.|원인을 확인해야 합니다.", "___ the suspect.|용의자를 확인하세요.", "Use IDs to ___.|확인하기 위해 ID를 쓰세요."], h: ["Market researchers are using advanced data analytics to ___ emerging consumer trends and predict how they will impact the retail industry over the next decade.|시장 조사원들은 새로운 소비자 트렌드를 확인하고 그것들이 향후 10년 동안 소매 산업에 어떤 영향을 미칠지 예측하기 위해 고급 데이터 분석을 사용하고 있습니다."] },
        { w: "associate", m: "관련시키다", n: ["___ A with B.|A를 B와 관련시키세요.", "Don't ___ with them.|그들과 관련되지 마세요.", "Commonly ___d with risk.|흔히 위험과 관련됨.", "I ___ this with home.|나는 이것을 집과 관련지어 생각합니다.", "Are you ___d with him?|그와 관련 있습니까?", "Symptoms ___d with flu.|독감과 관련된 증상들.", "Events ___d with the war.|전쟁과 관련된 사건들."], h: ["Psychologists often ___ chronic stress with a variety of physical health issues, emphasizing the importance of mental well-being in maintaining overall physical fitness.|심리학자들은 종종 만성 스트레스를 다양한 신체 건강 문제와 관련시키며, 전반적인 신체 건강을 유지하는 데 있어 정신적 안녕의 중요성을 강조합니다."] },
        { w: "condition", m: "조건", n: ["Working ___s are good.|근로 조건이 좋습니다.", "Terms and ___s.|약관 및 조건.", "In perfect ___.|완벽한 조건으로.", "The ___ of the car.|차의 상태.", "Weather ___s.|날씨 조건.", "Critical ___ in the hospital.|병원의 위중한 상태.", "A necessary ___ for peace.|평화를 위한 필수 조건."], h: ["Before signing the long-term lease agreement, it is crucial to inspect the current ___ of the property and ensure that all necessary repairs will be completed by the landlord.|장기 임대 계약에 서명하기 전에, 부동산의 현재 상태를 점검하고 필요한 모든 수리가 임대인에 의해 완료될 것인지 확인하는 것이 중요합니다."] },
        { w: "employment", m: "고용", n: ["Full-time ___.|전일제 고용.", "The ___ rate.|고용률.", "Terms of ___.|고용 조건.", "Proof of ___.|고용 증명서.", "Looking for ___.|직장을 찾는 중.", "Steady ___ is hard.|안정적인 고용은 어렵습니다.", "AI and future ___.|AI와 미래의 고용."], h: ["The recent economic downturn has led to a significant decrease in the overall ___ rate, forcing the government to implement new job creation initiatives and social welfare programs.|최근의 경기 침체는 전반적인 고용률의 상당한 감소를 초래하여, 정부로 하여금 새로운 일자리 창출 계획과 사회 복지 프로그램을 시행하게 만들었습니다."] },
        { w: "lack", m: "~이 없다", n: ["___ of money.|돈 부족.", "They ___ experience.|그들은 경험이 없습니다.", "A ___ of time.|시간 부족.", "___ of communication.|소통 부족.", "The project ___s funds.|프로젝트에 자금이 없습니다.", "A clear ___ of leadership.|리더십의 명확한 부족.", "___ing confidence.|자신감이 없음."], h: ["Despite their innovative ideas, many startups eventually fail because they ___ the necessary capital to scale their operations and compete effectively with established corporations.|혁신적인 아이디어에도 불구하고, 많은 스타트업이 사업 규모를 확장하고 기존 기업들과 효과적으로 경쟁하는 데 필요한 자본이 없기 때문에 결국 실패합니다."] },
        { w: "managerial", m: "관리의", n: ["___ experience.|관리 경험.", "A ___ position.|관리 직책.", "Strong ___ skills.|강력한 관리 능력.", "___ roles in the firm.|회사의 관리 역할.", "Effective ___ style.|효과적인 관리 스타일.", "___ level staff.|관리직급 직원.", "Handle ___ tasks.|관리 업무를 처리하세요."], h: ["Candidates applying for the regional director position must demonstrate exceptional ___ competence, including the ability to oversee diverse teams and manage multimillion-dollar budgets.|지역 이사 직책에 지원하는 후보자들은 다양한 팀을 감독하고 수백만 달러의 예산을 관리하는 능력을 포함하여 뛰어난 관리 역량을 입증해야 합니다."] },
        { w: "diligent", m: "성실한", n: ["A ___ worker.|성실한 노동자.", "Be ___ in your study.|공부에 성실하세요.", "He is very ___.|그는 매우 성실합니다.", "Success needs ___ effort.|성공은 성실한 노력이 필요합니다.", "She is ___ and kind.|그녀는 성실하고 친절합니다.", "___ students win.|성실한 학생들이 이깁니다.", "A ___ search for truth.|진실에 대한 성실한 탐구."], h: ["The manager noticed that the most ___ employees were not necessarily the most naturally talented, but rather those who consistently applied themselves to their tasks with unwavering focus.|매니저는 가장 성실한 직원들이 반드시 타고난 재능이 가장 뛰어난 사람들이 아니라, 오히려 흔들리지 않는 집중력으로 자신의 업무에 꾸준히 전념하는 사람들이라는 점을 알아차렸습니다."] },
        { w: "familiar", m: "익숙한, 친숙한", n: ["Are you ___ with this?|이것에 익숙합니까?", "A ___ face.|익숙한 얼굴.", "Sounds ___ to me.|나에게 친숙하게 들립니다.", "The city is ___.|그 도시는 익숙합니다.", "___ with the rules.|규칙에 익숙함.", "Become ___ with AI.|AI에 익숙해지세요.", "Looking for a ___ place.|친숙한 장소를 찾는 중."], h: ["New expatriate employees often attend cultural orientation sessions to become more ___ with local customs, business etiquette, and social norms before starting their assignments.|새로운 해외 파견 직원들은 업무를 시작하기 전에 현지 관습, 비즈니스 에티켓, 그리고 사회적 규범에 더 익숙해지기 위해 종종 문화 오리엔테이션 세션에 참석합니다."] },
        { w: "proficiency", m: "숙달, 능숙", n: ["English ___.|영어 능숙도.", "High ___ in Excel.|엑셀에 대한 높은 숙달.", "Measure your ___.|당신의 능숙도를 측정하세요.", "___ in coding.|코딩의 숙달.", "A ___ test.|능숙도 테스트.", "Improve your ___.|당신의 능숙도를 향상시키세요.", "Reach a level of ___.|숙달 단계에 도달하세요."], h: ["To be considered for the senior translation position, applicants must demonstrate a near-native level of ___ in at least three different European languages, including French and German.|수석 번역직에 고려되기 위해서, 지원자들은 프랑스어와 독일어를 포함하여 최소 세 가지의 다른 유럽 언어에서 거의 원어민 수준의 숙달도를 입증해야 합니다."] },
        { w: "prospective", m: "장래의, 미래의", n: ["___ buyers.|미래의 구매자들.", "___ employees.|장래의 직원(지원자)들.", "A ___ client.|장래의 고객.", "Interview ___ students.|장래의 학생들을 인터뷰하세요.", "Target ___ voters.|미래의 투표자들을 타겟팅하세요.", "Analyze ___ growth.|장래의 성장을 분석하세요.", "Meeting with a ___ partner.|미래의 파트너와의 회의."], h: ["The university's recruitment office is organizing a series of webinars to provide ___ international students with detailed information regarding scholarship opportunities and visa requirements.|대학교 입학처는 장래의 외국인 유학생들에게 장학금 기회와 비자 요건에 관한 자세한 정보를 제공하기 위해 일련의 웨비나를 조직하고 있습니다."] },
        { w: "appeal", m: "관심을 끌다, 매력적이다", n: ["___ to young people.|젊은이들에게 관심을 끌다.", "A broad ___.|넓은 매력.", "The idea doesn't ___.|그 아이디어는 매력적이지 않습니다.", "___ for help.|도움을 호소하다.", "Emotional ___.|감정적 호소.", "Does this design ___?|이 디자인이 매력적이나요?", "Visual ___ is key.|시각적 매력이 핵심입니다."], h: ["Luxury automobile manufacturers often focus on sophisticated aesthetics and cutting-edge technology to ___ to high-net-worth individuals who value both status and performance.|호화 자동차 제조업체들은 지위와 성능을 모두 중시하는 고액 자산가들에게 매력을 끌기 위해 종종 정교한 미학과 최첨단 기술에 집중합니다."] },
        { w: "specialize", m: "~을 전공하다, 전문적으로 다루다", n: ["___ in law.|법을 전공하다.", "We ___ in AI.|우리는 AI를 전문적으로 다룹니다.", "A shop that ___s in coffee.|커피를 전문으로 하는 가게.", "Which field do you ___ in?|어떤 분야를 전공하나요?", "___d equipment.|전문화된 장비.", "They ___ in repairs.|그들은 수리를 전문으로 합니다.", "___ in marketing.|마케팅을 전공하다."], h: ["Rather than offering a wide range of general legal services, this boutique law firm has chosen to ___ exclusively in intellectual property rights and patent litigation.|광범위한 일반 법률 서비스를 제공하기보다는, 이 부티크 로펌은 지적 재산권과 특허 소송만을 전적으로 전문적으로 다루기로 선택했습니다."] },
        { w: "apprehensive", m: "걱정하는, 염려하는", n: ["I feel ___ about the exam.|시험이 걱정됩니다.", "___ parents.|걱정하는 부모님.", "The staff is ___.|직원들이 염려하고 있습니다.", "___ about the change.|변화에 대해 걱정함.", "Look ___.|걱정스러워 보이다.", "Deeply ___ about the future.|미래에 대해 깊이 염려함.", "A bit ___ at first.|처음에는 약간 걱정됨."], h: ["Many employees remain ___ about the integration of artificial intelligence into the workplace, fearing that automation might eventually lead to significant job displacement within the industry.|많은 직원이 자동화가 결국 업계 내 대규모 일자리 대체로 이어질 것을 두려워하며, 작업장에 인공지능이 통합되는 것에 대해 여전히 염려하고 있습니다."] },
        { w: "consultant", m: "고문", n: ["Hire a tax ___.|세무 고문을 고용하세요.", "Work as a ___.|고문으로 일하세요.", "Ask a management ___.|경영 고문에게 물어보세요.", "A financial ___.|재무 고문.", "The ___'s report.|고문의 보고서.", "He is our head ___.|그는 우리의 수석 고문입니다.", "Need an external ___.|외부 고문이 필요합니다."], h: ["The board of directors has decided to engage a specialized environmental ___ to conduct a thorough audit of the company's carbon footprint and recommend sustainable practices.|이사회는 회사의 탄소 발자국에 대한 철저한 감사를 실시하고 지속 가능한 관행을 권고하기 위해 전문 환경 고문을 고용하기로 결정했습니다."] },
        { w: "entitle", m: "자격을 주다", n: ["___ you to a refund.|환불 자격을 주다.", "Who is ___d?|누가 자격이 있습니까?", "You are ___d to vote.|당신은 투표할 자격이 있습니다.", "The coupon ___s you to a gift.|쿠폰은 당신에게 선물을 받을 자격을 줍니다.", "___d to a break.|쉴 자격이 있음.", "Everyone is ___d.|모두가 자격이 있습니다.", "The book is ___d 'AI'.|그 책의 제목은 'AI'입니다."], h: ["Under the current labor laws, employees who work more than forty hours per week are legally ___d to receive overtime compensation at a rate of one and a half times their regular hourly wage.|현행 노동법에 따라, 주당 40시간 이상 근무하는 직원들은 정규 시간당 임금의 1.5배 비율로 초과 근무 수당을 받을 법적 자격이 있습니다."] },
        { w: "degree", m: "학위", n: ["A master's ___.|석사 학위.", "Earn a ___ in business.|경영학 학위를 따세요.", "What's your ___?|당신의 학위은 무엇입니까?", "90 ___ angle.|90도 각도.", "A high ___ of risk.|높은 정도의 위험.", "First ___ burns.|1도 화상.", "Bachelor's ___ required.|학사 학위 필요."], h: ["While practical experience is highly valued in the tech industry, many high-level managerial positions still require applicants to possess a graduate ___ from an accredited institution.|기술 산업에서 실무 경험이 높게 평가되지만, 많은 고위 관리직은 여전히 지원자가 공인된 기관의 대학원 학위를 소지할 것을 요구합니다."] },
        { w: "payroll", m: "임금 대장, 급료 명부", n: ["500 staff on the ___.|임금 대장에 500명의 직원.", "The ___ department.|급료 명부 부서.", "Calculate the ___.|임금 대장을 계산하세요.", "Check the ___ records.|급료 명부 기록을 확인하세요.", "Weekly ___ processing.|주간 임금 대장 처리.", "Added to the ___.|급료 명부에 추가됨.", "Errors in the ___.|임금 대장의 오류."], h: ["The accounting department is currently implementing a new automated system designed to streamline the monthly ___ process and ensure the accurate calculation of taxes and benefits.|회계 부서는 현재 월간 임금 대장 프로세스를 간소화하고 세금 및 혜택의 정확한 계산을 보장하기 위해 설계된 새로운 자동화 시스템을 도입하고 있습니다."] },
        { w: "recruit", m: "(신입 사원 등을) 모집하다", n: ["___ new members.|새 멤버를 모집하세요.", "Ready to ___ engineers.|엔지니어를 모집할 준비 완료.", "They ___ top talent.|그들은 최고의 인재를 모집합니다.", "___ for the army.|군대를 위해 모집하다.", "Hard to ___ nurses.|간호사를 모집하기 어렵습니다.", "___ing online.|온라인으로 모집 중.", "A new ___ joined.|새로운 신입이 합류했습니다."], h: ["To support its ambitious global expansion strategy, the multinational corporation plans to ___ over five hundred software developers from top-tier universities over the next two years.|야심 찬 글로벌 확장 전략을 지원하기 위해, 그 다국적 기업은 향후 2년 동안 일류 대학교에서 500명 이상의 소프트웨어 개발자를 모집할 계획입니다."] },
        { w: "certification", m: "증명서, 증명", n: ["Get a teaching ___.|교사 증명서를 따세요.", "Professional ___ is key.|전문 증명은 핵심입니다.", "ISO ___ list.|ISO 증명 목록.", "Safety ___ required.|안전 증명 필요.", "Renew your ___.|당신의 증명서를 갱신하세요.", "___ of origin.|원산지 증명.", "Pass the ___ test.|증명 테스트를 통과하세요."], h: ["In order to legally operate heavy industrial machinery on the construction site, workers must obtain a specialized safety ___ issued by the national vocational training board.|건설 현장에서 중공업 기계를 법적으로 조작하기 위해, 노동자들은 국가 직업 훈련 위원회에서 발행한 전문 안전 증명서를 취득해야 합니다."] },
        { w: "occupation", m: "직업", n: ["State your name and ___.|이름과 직업을 말하세요.", "Looking for a new ___.|새로운 직업을 찾는 중.", "Current ___: student.|현재 직업: 학생.", "A dangerous ___.|위험한 직업.", "What is your main ___?|당신의 주요 직업은 무엇입니까?", "Choose your ___ wisely.|직업을 현명하게 선택하세요.", "Change of ___.|직업의 변경."], h: ["Sociologists have observed that the prestige associated with a particular ___ can fluctuate significantly over time due to shifts in societal values and technological advancements.|사회학자들은 특정 직업과 관련된 위신이 사회적 가치의 변화와 기술적 발전으로 인해 시간이 지남에 따라 상당히 변동할 수 있다는 점을 관찰해 왔습니다."] },
        { w: "wage", m: "임금, 급료", n: ["Minimum ___ increase.|최저 임금 인상.", "Daily ___ payment.|일일 임금 지급.", "Calculate the ___.|임금을 계산하세요.", "Low ___ workers.|저임금 노동자들.", "Demanding higher ___s.|더 높은 임금을 요구함.", "Average hourly ___.|평균 시간당 임금.", "The gap in ___s.|임금의 격차."], h: ["Despite the company's record-breaking profits last quarter, many labor unions are still threatening to strike if the management refuses to grant a substantial increase in the hourly ___ for entry-level workers.|지난 분기 회사의 기록적인 이익에도 불구하고, 많은 노동조합은 경영진이 초급 근로자들의 시간당 임금을 실질적으로 인상하는 것을 거부할 경우 여전히 파업하겠다고 위협하고 있습니다."] }
    ],
    2: [
        { w: "attire", m: "복장, 옷차림새", n: ["Formal ___ is required.|정식 복장이 요구됩니다.","Business casual ___.|비즈니스 캐주얼 복장.","Dress in proper ___.|적절한 복장을 갖추세요.","Review the ___ policy.|복장 규정을 검토하세요.","Standard office ___.|표준 사무실 복장.","Inappropriate ___ prohibited.|부적절한 복장 금지.","Your ___ is professional.|당신의 옷차림새가 전문적입니다."], h: ["All employees are expected to maintain a professional appearance by adhering to the company's specified business ___ during office hours and at official corporate events.|모든 직원은 근무 시간 및 공식 기업 행사 중에 회사가 지정한 비즈니스 복장을 준수함으로써 전문적인 외모를 유지해야 합니다."] },
        { w: "code", m: "규범, 관례; 암호", n: ["Follow the ___ of conduct.|행동 규범을 따르세요.","Enter the security ___.|보안 암호를 입력하세요.","A strict dress ___.|엄격한 복장 규정.","The area ___.|지역 번호.","Decode the secret ___.|비밀 암호를 해독하세요.","A moral ___ for all.|모두를 위한 도덕 규범.","Programming ___ review.|프로그래밍 코드 검토."], h: ["To ensure a safe and respectful work environment, the human resources department has revised the ___ of ethics to explicitly prohibit any form of workplace harassment.|안전하고 존중하는 업무 환경을 보장하기 위해, 인사부는 모든 형태의 직장 내 괴롭힘을 명시적으로 금지하도록 윤리 규범을 개정했습니다."] },
        { w: "concern", m: "우려, 걱정; 문제, 일", n: ["Expressing my ___.|나의 우려를 표합니다.","A matter of great ___.|큰 걱정거리.","Don't ___ yourself with it.|그것에 걱정하지 마세요.","Environmental ___s.|환경적 우려.","The main ___ is safety.|주요 문제는 안전입니다.","Thank you for your ___.|당신의 걱정에 감사합니다.","It is no ___ of mine.|그것은 내 일이 아닙니다."], h: ["The recent decline in consumer spending has become a major ___ for retail managers, who are now strategizing on how to revitalize sales during the upcoming fiscal quarter.|최근의 소비자 지출 감소는 소매점 관리자들에게 주요 우려가 되었으며, 이들은 현재 다가오는 회계 분기 동안 매출을 활성화할 방법에 대해 전략을 세우고 있습니다."] },
        { w: "policy", m: "규정; 보험 증권", n: ["The new refund ___.|새로운 환불 규정.","Strict privacy ___.|엄격한 개인정보 규정.","Insurance ___ details.|보험 증권 세부사항.","Company ___ change.|회사 규정 변경.","Follow the travel ___.|출장 규정을 따르세요.","Review the safety ___.|안전 규정을 검토하세요.","No-smoking ___ here.|여기는 금연 규정."], h: ["In an effort to promote work-life balance, the management has introduced a new ___ that allows employees to work remotely for up to two days per week.|일과 삶의 균형을 증진하기 위해, 경영진은 직원들이 주당 최대 2일까지 원격 근무를 할 수 있도록 허용하는 새로운 규정을 도입했습니다."] },
        { w: "comply", m: "준수하다, 따르다", n: ["___ with the rules.|규칙을 준수하세요.","Failure to ___.|준수 불이행.","We must ___ with law.|법을 준수해야 합니다.","___ with the request.|요청을 준수하세요.","Refusal to ___.|준수 거부.","Did you ___ with it?|그것을 준수하셨나요?","Always ___ with safety.|항상 안전을 준수하세요."], h: ["Failure to ___ with the newly implemented safety regulations may result in severe penalties, including hefty fines and the temporary suspension of operational licenses.|새롭게 시행된 안전 규정을 준수하지 않을 경우, 거액의 벌금과 운영 면허의 일시 정지를 포함한 엄격한 처벌을 받을 수 있습니다."] },
        { w: "regulation", m: "규정", n: ["Government ___s.|정부 규정.","Safety ___ check.|안전 규정 점검.","A new ___ for trade.|무역을 위한 새로운 규정.","Follow the strict ___s.|엄격한 규정을 따르세요.","Standard labor ___s.|표준 노동 규정.","Changes in the ___.|규정의 변화.","Compliance with ___s.|규정 준수."], h: ["The environmental protection agency has introduced a stringent ___ to limit the amount of industrial waste that factories are permitted to discharge into the river.|환경 보호청은 공장들이 강으로 배출할 수 있는 산업 폐기물의 양을 제한하기 위해 엄격한 규정을 도입했습니다."] },
        { w: "exception", m: "예외", n: ["No ___s allowed.|예외는 허용되지 않습니다.","With the ___ of him.|그를 예외하고.","Make an ___ for me.|나를 위해 예외를 두세요.","An ___ to the rule.|규칙의 예외.","A rare ___.|드문 예외.","A notable ___.|주목할 만한 예외.","Without any ___.|어떠한 예외도 없이."], h: ["While the company generally prohibits employees from using personal mobile devices during meetings, an ___ can be made for urgent family emergencies with prior approval.|회사는 일반적으로 회의 중 개인 모바일 기기 사용을 금지하지만, 사전 승인이 있는 긴급한 가족 비상 상황의 경우 예외가 인정될 수 있습니다."] },
        { w: "adhere", m: "지키다, 고수하다", n: ["___ to the schedule.|일정을 지키세요.","___ to the standards.|기준을 고수하세요.","Failure to ___ to rules.|규칙 준수 실패.","Strictly ___ to policy.|규정을 엄격히 고수하세요.","___ to the plan.|계획을 고수하세요.","Please ___ to guidelines.|가이드를 지켜 주세요.","___ to the deadline.|데드라인을 지키세요."], h: ["To ensure the integrity of the research findings, all scientists participating in the clinical trials must strictly ___ to the established protocols and data reporting standards.|연구 결과의 무결성을 보장하기 위해, 임상 시험에 참여하는 모든 과학자는 수립된 프로토콜과 데이터 보고 기준을 엄격히 지켜야 합니다."] },
        { w: "severely", m: "엄격하게, 심하게", n: ["The rule is ___ enforced.|규칙이 엄격하게 시행됩니다.","___ punished.|엄격하게 처벌받은.","The storm ___ hit us.|폭풍이 우리를 심하게 강타함.","Budget was ___ cut.|예산이 심하게 삭감됨.","___ damaged building.|심하게 손상된 건물.","Wait was ___ long.|대기가 심하게 길었습니다.","Criticized ___ by public.|대중에게 심하게 비판받음."], h: ["The board of directors warned that any employee found leaking confidential corporate secrets to competitors would be ___ disciplined, potentially facing immediate termination and legal action.|이사회는 기밀 기업 비밀을 경쟁업체에 유출한 것으로 판명된 직원은 누구든 엄격하게 징계받을 것이며, 즉각적인 해고와 법적 조치에 직면할 수 있다고 경고했습니다."] },
        { w: "refrain", m: "자제하다, 삼가다", n: ["Please ___ from smoking.|흡연을 삼가해 주세요.","___ from taking photos.|사진 촬영을 자제하세요.","Ask them to ___.|그들에게 자제하라고 요청하세요.","___ from noise.|소음을 자제하세요.","Must ___ from it.|그것을 삼가야 합니다.","___ from comments.|의견을 자제하세요.","___ from entering.|출입을 삼가세요."], h: ["To maintain a professional and quiet work environment, all staff members are requested to ___ from having loud personal conversations in the open-office areas during peak working hours.|전문적이고 조용한 업무 환경을 유지하기 위해, 모든 직원은 업무가 집중되는 시간 동안 개방형 사무실 구역에서 큰 소리로 개인적인 대화를 나누는 것을 자제해 주시기 바랍니다."] },
        { w: "permission", m: "허락, 허가", n: ["Ask for ___.|허락을 요청하세요.","Without my ___.|나의 허락 없이.","Written ___ required.|서면 허가 필요.","Granted ___.|허가를 부여받음.","Need ___ to enter.|출입을 위해 허가가 필요함.","Parents' ___.|부모님의 허락.","Request for ___.|허가 요청."], h: ["Before accessing sensitive client data for the purpose of market research, employees must obtain explicit written ___ from the data protection officer to comply with privacy laws.|시장 조사를 목적으로 민감한 고객 데이터에 접근하기 전에, 직원은 개인정보 보호법을 준수하기 위해 데이터 보호 책임자로부터 명확한 서면 허가를 얻어야 합니다."] },
        { w: "access", m: "이용 권한, 접근; 통로", n: ["Get ___ to the file.|파일에 대한 이용 권한 확보.","Internet ___ is free.|인터넷 접근은 무료입니다.","Easy ___ to the city.|도시로의 쉬운 통로.","Denied ___ to the lab.|실험실 접근 거부됨.","Authorized ___ only.|인가된 접근자만.","A wheelchair ___ ramp.|휠체어 통로 경사로.","How to ___ the system.|시스템에 접속하는 방법."], h: ["The newly installed high-speed elevator provides direct ___ to the rooftop garden, allowing employees to enjoy their lunch breaks with a panoramic view of the metropolitan skyline.|새로 설치된 고속 엘리베이터는 옥상 정원으로의 직접적인 접근을 제공하여, 직원들이 대도시의 스카이라인을 조망하며 점심 휴식 시간을 즐길 수 있게 해줍니다."] },
        { w: "thoroughly", m: "철저하게; 완전히, 대단히", n: ["Check it ___.|그것을 철저하게 확인하세요.","Clean the room ___.|방을 철저하게 청소하세요.","Read the manual ___.|매뉴얼을 완전히 읽으세요.","Investigate ___.|철저하게 조사하세요.","Enjoyed it ___.|그것을 대단히 즐겼습니다.","___ confused.|완전히 혼란스러운.","I agree ___.|나는 완전히 동의합니다."], h: ["Before the new software can be officially launched, the quality assurance team must test every single feature ___ to identify and fix any potential bugs or security vulnerabilities.|새 소프트웨어가 공식적으로 출시되기 전에, 품질 보증 팀은 잠재적인 버그나 보안 취약점을 찾아 수정하기 위해 모든 기능을 철저하게 테스트해야 합니다."] },
        { w: "revise", m: "(의견 . 계획을) 수정하다, 변경하다", n: ["___ the plan.|계획을 수정하세요.","___ the document.|문서를 변경하세요.","Need to ___ the budget.|예산을 수정해야 합니다.","The author ___d the book.|작가가 책을 수정함.","___ your thinking.|당신의 생각을 변경하세요.","Quickly ___ the policy.|정책을 빠르게 수정하세요.","Wait to ___ the draft.|초안을 수정할 때까지 대기."], h: ["Based on the feedback received during the pilot program, the engineering department has decided to ___ the original blueprints to improve the fuel efficiency of the new engine prototype.|파일럿 프로그램 동안 받은 피드백을 바탕으로, 엔지니어링 부서는 새 엔진 프로토타입의 연료 효율을 개선하기 위해 원래의 설계도를 수정하기로 결정했습니다."] },
        { w: "approach", m: "접근법, 처리 방법", n: ["A new ___.|새로운 접근법.","The direct ___.|직접적인 처리 방법.","Change your ___.|당신의 접근법을 바꾸세요.","A scientific ___.|과학적 접근법.","The ___ of winter.|겨울의 접근.","Easy to ___.|접근하기 쉬운.","Best ___ to solve it.|그것을 해결할 최선의 처리 방법."], h: ["To remain competitive in a rapidly evolving market, the company's marketing team has adopted a more data-driven ___ to identify target demographics and optimize advertising spend.|빠르게 진화하는 시장에서 경쟁력을 유지하기 위해, 회사의 마케팅 팀은 목표 인구 통계를 식별하고 광고비를 최적화하기 위해 보다 데이터 중심적인 접근법을 채택했습니다."] },
        { w: "approval", m: "승인, 인가", n: ["Waiting for ___.|승인을 기다리는 중.","Need final ___.|최종 인가 필요.","Get manager's ___.|매니저의 승인을 받으세요.","On official ___.|공식 승인 하에.","Submit for ___.|승인을 위해 제출하세요.","Lack of ___.|승인 부족.","Quick ___ process.|빠른 인가 과정."], h: ["All proposed budget increases for the upcoming fiscal year require the formal ___ of the board of directors before any funds can be allocated to individual departments.|다가오는 회계 연도에 제안된 모든 예산 증액은 각 부서에 자금이 할당되기 전에 이사회의 공식적인 승인을 받아야 합니다."] },
        { w: "form", m: "종류, 유형, 양식", n: ["Fill out the ___.|양식을 작성하세요.","An application ___.|신청 양식.","A new ___ of art.|새로운 유형의 예술.","___ a committee.|위원회를 구성하세요.","Various ___s of life.|다양한 종류의 생명체.","Standard order ___.|표준 주문 양식.","Water in solid ___.|고체 형태의 물."], h: ["The newly hired human resources manager has introduced a standardized feedback ___ to facilitate more effective performance evaluations and career development discussions.|새로 채용된 인사 매니저는 보다 효과적인 성과 평가와 경력 개발 논의를 촉진하기 위해 표준화된 피드백 양식을 도입했습니다."] },
        { w: "immediately", m: "즉시, 곧", n: ["Leave ___.|즉시 떠나세요.","Reply ___ to me.|나에게 곧 답장하세요.","Call the police ___.|즉시 경찰을 부르세요.","Starting ___.|즉시 시작함.","___ available.|즉시 이용 가능한.","Effective ___.|즉시 효력 발생.","Report it ___.|그것을 즉시 보고하세요."], h: ["If an employee notices any potential safety hazards in the warehouse, they are required to notify the floor supervisor ___ so that corrective measures can be taken at once.|만약 직원이 창고에서 잠재적인 안전 위험 요소를 발견하면, 교정 조치가 즉시 취해질 수 있도록 현장 감독관에게 즉시 알려야 합니다."] },
        { w: "inspection", m: "점검, 검사", n: ["Routine safety ___.|정기 안전 점검.","Conduct an ___.|검사를 실시하세요.","Pass the ___.|점검을 통과하세요.","The site ___.|현장 점검.","A thorough ___.|철저한 검사.","Failed the ___.|점검 탈락.","Building ___ report.|건물 점검 보고서."], h: ["To maintain the highest quality standards, every aircraft must undergo a comprehensive technical ___ by certified mechanics before it is cleared for its next scheduled flight.|최고의 품질 표준을 유지하기 위해, 모든 항공기는 다음 예정된 비행이 허가되기 전에 공인된 정비사로부터 종합적인 기술 점검을 받아야 합니다."] },
        { w: "arrangement", m: "준비, 마련, 주선", n: ["Make an ___.|준비를 하세요.","Travel ___s.|여행 준비.","Flower ___.|꽃 마련.","Seating ___s.|좌석 마련.","Reach an ___.|합의에 도달함.","Financial ___s.|재무적 준비.","A temporary ___.|임시적인 마련."], h: ["The event planning committee is currently finalizing the travel ___s for the keynote speakers, ensuring that all flights and hotel accommodations are confirmed well in advance.|이벤트 기획 위원회는 현재 기조 연설자들을 위한 여행 준비를 마무리하고 있으며, 모든 항공편과 호텔 숙박 시설이 충분히 사전에 확정되도록 보장하고 있습니다."] },
        { w: "procedure", m: "절차", n: ["Standard ___.|표준 절차.","Follow the ___.|절차를 따르세요.","A medical ___.|의료 절차.","Safety ___s.|안전 절차.","The normal ___.|정상적인 절차.","Complex ___s.|복잡한 절차.","Complaint ___.|불만 제기 절차."], h: ["To ensure the security of corporate data, all employees are required to follow a specific login ___ that involves multi-factor authentication and periodic password updates.|기업 데이터의 보안을 보장하기 위해, 모든 직원은 다요소 인증과 정기적인 비밀번호 업데이트를 포함하는 특정 로그인 절차를 따라야 합니다."] },
        { w: "negative", m: "부정적인, 비관적인", n: ["A ___ impact.|부정적인 영향.","Feeling ___.|비관적인 기분.","The test was ___.|테스트 결과는 부정적이었습니다.","A ___ answer.|부정적인 답변.","Avoid ___ thoughts.|비관적인 생각을 피하세요.","The ___ side.|부정적인 측면.","Feedback was ___.|피드백이 부정적이었습니다."], h: ["The recent rumors regarding potential layoffs have had a significantly ___ effect on employee morale, leading to a decrease in productivity across several departments.|잠재적인 해고에 관한 최근의 소문은 직원 사기에 상당히 부정적인 영향을 미쳤으며, 이는 여러 부서에 걸쳐 생산성 저하로 이어졌습니다."] },
        { w: "mandate", m: "명령하다, 지시하다; 권한", n: ["Legal ___.|법적 권한.","A clear ___ for change.|변화를 위한 명확한 명령.","___ masks.|마스크 착용을 지시하다.","The people's ___.|국민의 권한.","___ the vaccine.|백신을 의무화하다.","A democratic ___.|민주적 권한.","The board ___d it.|이사회가 그것을 명령함."], h: ["The newly elected government believes it has a clear ___ from the public to implement sweeping tax reforms and increase funding for national infrastructure projects.|새로 선출된 정부는 광범위한 세제 개편을 시행하고 국가 인프라 프로젝트를 위한 자금 지원을 늘리라는 명확한 권한을 대중으로부터 받았다고 믿습니다."] },
        { w: "effect", m: "(법률 등의) 효력, 효과, 영향; 결과로서 ~을 가져오다", n: ["Side ___s.|부작용(영향).","Take ___.|효력이 발생하다.","The greenhouse ___.|온실 효과.","Cause and ___.|원인과 결과.","A positive ___.|긍정적인 영향.","Dramatic ___.|극적인 효과.","No ___ on me.|나에게 영향이 없음."], h: ["The international trade agreement is expected to take ___ early next year, potentially leading to a significant increase in the export of domestic agricultural products.|그 국제 무역 협정은 내년 초에 효력이 발생할 것으로 예상되며, 이는 잠재적으로 국내 농산물 수출의 상당한 증가로 이어질 수 있습니다."] },
        { w: "drastically", m: "심하게, 과감하게, 철저하게", n: ["Prices fell ___.|가격이 심하게 떨어짐.","___ changed.|철저하게 변한.","Cut the budget ___.|예산을 과감하게 삭감함.","___ reduced.|심하게 줄어든.","The plan failed ___.|계획이 철저하게 실패함.","Improved ___.|과감하게 개선된.","___ different.|심하게 다른."], h: ["Following the implementation of the new energy-saving system, the factory has been able to ___ reduce its carbon emissions while maintaining its current production levels.|새로운 에너지 절약 시스템의 도입 이후, 그 공장은 현재의 생산 수준을 유지하면서 탄소 배출량을 과감하게 줄일 수 있었습니다."] },
        { w: "according to", m: "~에 따라", n: ["___ the news.|뉴스에 따라.","___ the plan.|계획에 따라.","___ the data.|데이터에 따라.","___ him.|그에 따라.","___ the rule.|규칙에 따라.","___ the study.|연구에 따라.","___ my records.|내 기록에 따라."], h: ["According to the most recent quarterly report, the company's revenue has exceeded analysts' expectations, primarily due to strong sales in the Asian market.|최근 분기 보고서에 따라, 회사의 수익은 주로 아시아 시장에서의 강력한 매출 덕분에 분석가들의 기대를 상회했습니다."] },
        { w: "enable", m: "(무엇을) 가능하게 하다", n: ["___ us to win.|우리가 이길 수 있게 하다.","___ the feature.|기능을 가능하게 하세요.","New tech ___s it.|신기술이 그것을 가능하게 함.","___ disabled users.|장애인 사용자를 지원하게 함.","It will ___ growth.|그것이 성장을 가능하게 할 것임.","___ better results.|더 나은 결과를 가능하게 함.","Help ___ the plan.|계획을 가능하게 하도록 도움."], h: ["The high-speed fiber optic connection will ___ the research team to transfer massive amounts of data to the cloud servers in a fraction of the time it previously took.|고속 광섬유 연결은 연구 팀이 이전 소요 시간의 아주 일부분 만에 대량의 데이터를 클라우드 서버로 전송하는 것을 가능하게 할 것입니다."] },
        { w: "standard", m: "기준, 표준", n: ["A high ___.|높은 기준.","Set the ___.|표준을 설정하세요.","Living ___s.|생활 기준.","The gold ___.|금 표준.","Follow the ___s.|기준을 따르세요.","A ___ model.|표준 모델.","Quality ___ control.|품질 기준 관리."], h: ["To maintain the highest quality ___ across its international branches, the corporation has established a centralized auditing committee to conduct regular inspections.|국제 지사 전반에 걸쳐 최고의 품질 기준을 유지하기 위해, 그 기업은 정기 점검을 실시할 중앙 감사 위원회를 수립했습니다."] },
        { w: "constant", m: "지속적인, 끊임없이 계속하는", n: ["___ noise.|지속적인 소음.","A ___ fear.|끊임없는 공포.","Remain ___.|지속적인 상태를 유지하세요.","___ changes.|끊임없는 변화.","A ___ struggle.|지속적인 투쟁.","___ speed.|일정한 속도.","___ reminder.|지속적인 상기."], h: ["Engineers are working tirelessly to resolve the ___ technical glitches that have been plaguing the new software application since its initial release last month.|엔지니어들은 지난달 초기 출시 이후 새로운 소프트웨어 애플리케이션을 괴롭혀 온 끊임없는 기술적 결함들을 해결하기 위해 끊임없이 노력하고 있습니다."] },
        { w: "act", m: "법령, 결의서; 행위, 행동", n: ["A heroic ___.|영웅적 행위.","___ now.|지금 행동하세요.","The Clean Air ___.|대기 정화 법령.","___ of kindness.|친절한 행동.","A criminal ___.|범죄 행위.","___ as a leader.|리더로서 행동하세요.","The main ___.|주요 법령."], h: ["The newly passed environmental protection ___ mandates that all factories must install advanced filtration systems to reduce the amount of pollutants released into the atmosphere.|새로 통과된 환경 보호 법령은 모든 공장이 대기로 배출되는 오염 물질의 양을 줄이기 위해 고급 여과 시스템을 설치해야 한다고 지시합니다."] },
        { w: "compensation", m: "보상금, 보상", n: ["Fair ___.|공정한 보상.","Financial ___.|재무적 보상금.","Workers' ___.|산재 보상.","Seek ___ for loss.|손실에 대한 보상을 구함.","Get full ___.|전액 보상금을 받음.","___ for the damage.|손상에 대한 보상.","Total ___ package.|총 보상 패키지."], h: ["The company is offering a generous ___ package, including health insurance and stock options, to attract the most talented engineers from around the country.|그 회사는 전국의 가장 유능한 엔지니어들을 유치하기 위해 건강보험과 스톡옵션을 포함한 관대한 보상 패키지를 제공하고 있습니다."] },
        { w: "ban", m: "금지", n: ["A ___ on smoking.|흡연 금지.","___ the book.|책을 금지하다.","Lift the ___.|금지를 해제하다.","A total ___.|전면 금지.","The ___ is strict.|금지가 엄격합니다.","Support the ___.|금지를 지지하세요.","Violate the ___.|금지를 위반하다."], h: ["Following the recent security breach, the IT department has decided to place a temporary ___ on the use of personal USB drives within the corporate network.|최근의 보안 침해 이후, IT 부서는 기업 네트워크 내에서의 개인 USB 드라이브 사용에 대해 일시적인 금지를 내리기로 결정했습니다."] },
        { w: "obligation", m: "의무, 책임", n: ["A legal ___.|법적 의무.","No ___ to buy.|구매 책임 없음.","Meet your ___s.|의무를 다하세요.","Sense of ___.|책임감.","A moral ___.|도덕적 의무.","Fulfill your ___.|당신의 책임을 이행하세요.","Under the ___.|의무 하에."], h: ["Under the terms of the confidentiality agreement, all employees have a legal ___ to protect the company's proprietary information even after their employment has ended.|기밀 유지 계약의 조건에 따라, 모든 직원은 고용이 종료된 후에도 회사의 독점 정보를 보호해야 할 법적 의무가 있습니다."] },
        { w: "authorize", m: "~을 인가하다, 권한을 부여하다", n: ["___ the payment.|결제를 인가하세요.","An ___d dealer.|권한을 부여받은 딜러.","___ a search.|수색을 인가하다.","Who ___d this?|누가 이것을 인가했나요?","The board ___d it.|이사회가 그것을 권한 부여함.","Ready to ___ funds.|자금을 인가할 준비 완료.","___ the change.|변경을 인가하세요."], h: ["Only the department head is permitted to ___ the purchase of new laboratory equipment that exceeds the established quarterly budget threshold.|오직 부서장만이 수립된 분기별 예산 한도를 초과하는 새로운 실험실 장비의 구매를 인가할 수 있는 권한이 있습니다."] },
        { w: "prohibit", m: "금지하다", n: ["Smoking is ___ed.|흡연은 금지됩니다.","Rules ___ it.|규칙이 그것을 금지함.","Strictly ___ed.|엄격히 금지된.","Law ___s the act.|법이 그 행위를 금지함.","___ entry.|출입을 금지하다.","___ use of phone.|전화 사용을 금지하다.","___ed items.|금지된 품목들."], h: ["To ensure the safety of all visitors, the museum's policies strictly ___ the use of flash photography inside the galleries containing delicate historical artifacts.|모든 방문객의 안전을 보장하기 위해, 박물관의 규정은 섬세한 역사적 유물이 포함된 갤러리 내부에서의 플래시 사진 촬영을 엄격히 금지합니다."] },
        { w: "abolish", m: "(제도 . 법률 등을) 폐지하다", n: ["___ the tax.|세금을 폐지하세요.","___ slavery.|노예제를 폐지함.","Need to ___ it.|그것을 폐지해야 합니다.","___ the old rule.|구습을 폐지하다.","___ the department.|부서를 폐지하다.","Effort to ___ corruption.|부패를 폐지하려는 노력.","___ the monarchy.|군주제를 폐지하다."], h: ["The government has decided to ___ the controversial property tax in response to widespread public protests and concerns regarding its economic impact on middle-class families.|정부는 중산층 가족에 대한 경제적 영향과 관련된 광범위한 대중의 항의와 우려에 대응하여 논란이 되고 있는 재산세를 폐지하기로 결정했습니다."] },
        { w: "enforce", m: "(법률을) 시행하다, 집행하다", n: ["___ the law.|법을 시행하세요.","___ the rules.|규칙을 집행하세요.","Hard to ___ it.|그것을 시행하기 어렵습니다.","___ strict standards.|엄격한 표준을 집행함.","The police ___ order.|경찰이 질서를 집행하세요.","___ the contract.|계약 내용을 시행함.","___ a ban.|금지령을 시행하다."], h: ["The municipal government has hired additional inspectors to ___ the newly implemented building codes and ensure that all construction projects meet modern safety standards.|시 정부는 새로 시행된 건축 법규를 시행하고 모든 건설 프로젝트가 현대적 안전 기준을 충족하도록 보장하기 위해 추가 점검원들을 고용했습니다."] },
        { w: "habit", m: "습관, 버릇", n: ["A bad ___.|나쁜 습관.","Study ___s.|공부 버릇.","Break a ___.|습관을 고치세요.","A daily ___.|매일의 습관.","Form a ___.|습관을 들이세요.","A regular ___.|규칙적인 버릇.","Eat healthy ___s.|건강한 식습관."], h: ["Developing the ___ of regularly reviewing your performance can lead to significant professional growth and help you identify areas for future improvement.|자신의 성과를 정기적으로 검토하는 습관을 기르는 것은 상당한 전문적 성장을 이끌 수 있으며 향후 개선이 필요한 부분을 식별하는 데 도움을 줄 수 있습니다."] },
        { w: "legislation", m: "법률, 법규", n: ["Pass the ___.|법률을 통과시키세요.","Support the ___.|법규를 지지하세요.","Review the ___.|법률을 검토하세요.","Proposed ___.|제안된 법규.","The ___ was rejected.|그 법률은 거부됨.","Drafting the ___.|법규를 초안하는 중.","New ___ for safety.|안전을 위한 새로운 법률."], h: ["The recently introduced ___ regarding environmental protection mandates that all local businesses must transition to using renewable energy sources within the next five years.|최근 도입된 환경 보호 관련 법률은 모든 지역 기업이 향후 5년 이내에 재생 에너지원을 사용하는 것으로 전환해야 한다고 규정합니다."] },
        { w: "restrict", m: "한정하다, 제한하다", n: ["___ the speed.|속도를 제한하세요.","___ access to site.|사이트 접속을 제한함.","___ the calories.|칼로리를 제한하세요.","Rules ___ use.|규칙이 사용을 제한함.","___ travel.|여행을 제한하다.","___ growth.|성장을 제한하다.","___ed area.|제한 구역."], h: ["To maintain the exclusivity of the club, the management has decided to ___ new memberships to residents who have lived in the neighborhood for at least three consecutive years.|클럽의 독점성을 유지하기 위해, 경영진은 신규 회원 자격을 최소 3년 연속으로 이 동네에 거주한 주민들로 한정하기로 결정했습니다."] }
    ]
};

// --- 로직 섹션 ---
const allWordsGlobal = [];
Object.values(dayData).forEach(arr => arr.forEach(item => allWordsGlobal.push(item.w)));

let currentCorrectCount = parseInt(localStorage.getItem('toeic_correct')) || 0;
let totalSolvedCount = parseInt(localStorage.getItem('toeic_total')) || 0;
let unlockedDay = parseInt(localStorage.getItem('toeic_unlocked_day')) || 1;
let mistakes = JSON.parse(localStorage.getItem('toeic_mistakes')) || [];

let currentWord = null;
let currentDiff = 'easy';
let currentSelectedDay = 1;
let testScore = 0;
let testStep = 0;
let isTestMode = false;
let timerInterval = null;
let timeLimit = 0;
let timeRemaining = 0;
let isPaused = false;

function saveProgress() {
    localStorage.setItem('toeic_correct', currentCorrectCount);
    localStorage.setItem('toeic_total', totalSolvedCount);
    localStorage.setItem('toeic_unlocked_day', unlockedDay);
    localStorage.setItem('toeic_mistakes', JSON.stringify(mistakes));
}

function updateHomeStats() {
    document.getElementById('stat-correct').innerText = currentCorrectCount;
    document.getElementById('stat-total').innerText = totalSolvedCount;
}

function switchView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.querySelector(id).classList.add('active-view');
}

function goHome() {
    clearInterval(timerInterval);
    updateHomeStats();
    switchView('#home');
}

function showDaySelect(target) {
    const container = document.getElementById('day-buttons');
    const title = document.getElementById('day-select-title');
    container.innerHTML = '';
    title.innerText = target === 'quiz' ? '학습 차수 선택' : '단어장 차수 선택';
    
    // 1일차~2일차 루프
    for(let i=1; i<=2; i++) {
        const btn = document.createElement('button');
        const isLocked = target === 'quiz' && i > unlockedDay;
        btn.className = 'day-btn' + (isLocked ? ' locked' : '');
        btn.innerText = 'DAY ' + i;
        btn.onclick = () => {
            if(isLocked) { alert('이전 DAY 테스트에서 90점 이상 받아야 열립니다!'); return; }
            currentSelectedDay = i;
            if(target === 'quiz') {
                document.getElementById('selected-day-title').innerText = 'DAY ' + i;
                switchView('#mode-select');
            } else { showVocaList(i); }
        };
        container.appendChild(btn);
    }
    switchView('#day-select');
}

function startQuiz(diff) {
    isTestMode = false; currentDiff = diff;
    document.getElementById('test-progress').style.display = 'none';
    switchView('#quiz'); generateQuestion();
}

function startTest() {
    if(!confirm("HARD 10문제가 출제됩니다. 90점 이상 시 다음 DAY가 열립니다.")) return;
    isTestMode = true; testScore = 0; testStep = 0;
    document.getElementById('test-progress').style.display = 'block';
    switchView('#quiz'); generateQuestion();
}

function generateQuestion() {
    clearInterval(timerInterval);
    isPaused = false;
    document.getElementById('pause-overlay').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('timer-cont').style.display = 'block';

    const words = dayData[currentSelectedDay];
    if(isTestMode) {
        testStep++;
        if(testStep > 10) { finishTest(); return; }
        document.getElementById('test-progress').innerText = `테스트: ${testStep} / 10`;
    }

    currentWord = words[Math.floor(Math.random() * words.length)];
    
    if (isTestMode || currentDiff === 'hard') timeLimit = 60;
    else if (currentDiff === 'normal') timeLimit = 30;
    else timeLimit = 10;
    
    timeRemaining = timeLimit;
    updateTimerBar();

    let qText = "";
    if (isTestMode || currentDiff === 'hard') {
        const hardSentence = currentWord.h[0].split('|')[0]; 
        qText = `[💀 HARD - 60s / English Only]\n\n"${hardSentence}"`;
    } else if (currentDiff === 'normal') {
        const nIdx = Math.floor(Math.random() * currentWord.n.length);
        const parts = currentWord.n[nIdx].split('|');
        qText = `[NORMAL - 30s]\n\n"${parts[0]}"\n(${parts[1]})`;
    } else {
        qText = `[EASY - 10s]\n\n뜻: ${currentWord.m}`;
    }
    document.getElementById('q-text').innerText = qText;

    let options = [currentWord.w];
    while(options.length < 4) {
        let rand = allWordsGlobal[Math.floor(Math.random() * allWordsGlobal.length)];
        if(!options.includes(rand)) options.push(rand);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.innerText = `${index + 1}. ${opt}`;
        btn.onclick = () => checkAnswer(btn, opt);
        optionsDiv.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeRemaining -= 0.1;
            updateTimerBar();
            if (timeRemaining <= 0) { clearInterval(timerInterval); checkAnswer(null, 'TIMEOUT'); }
        }
    }, 100);
}

function updateTimerBar() {
    document.getElementById('timer-bar').style.width = (timeRemaining / timeLimit) * 100 + "%";
}

function togglePause() {
    isPaused = !isPaused;
    document.getElementById('pause-overlay').style.display = isPaused ? 'flex' : 'none';
}

function checkAnswer(btn, selected) {
    clearInterval(timerInterval);
    const btns = document.querySelectorAll('.option');
    if (btns.length === 0 || btns[0].disabled) return;
    btns.forEach(b => b.disabled = true);
    totalSolvedCount++;
    const isCorrect = selected === currentWord.w;
    const expDiv = document.getElementById('explanation');
    expDiv.style.display = 'block'; document.getElementById('next-btn').style.display = 'block';
    if (isCorrect) {
        if(btn) btn.classList.add('correct'); currentCorrectCount++;
        if(isTestMode) testScore += 10;
        expDiv.innerText = `정답입니다! [${currentWord.w}: ${currentWord.m}]`;
    } else {
        if(btn && selected !== 'TIMEOUT') btn.classList.add('incorrect');
        btns.forEach(b => { if(b.innerText.split(". ")[1] === currentWord.w) b.classList.add('correct'); });
        const prefix = selected === 'TIMEOUT' ? "시간 초과! " : "오답입니다. ";
        expDiv.innerText = `${prefix}정답은 '${currentWord.w}' [${currentWord.m}]`;
        if(!mistakes.find(m => m.w === currentWord.w)) {
            mistakes.push({w: currentWord.w, m: currentWord.m, s: currentWord.n[0].split('|')[0]});
        }
    }
    saveProgress();
}

function finishTest() {
    alert(`테스트 종료! 점수: ${testScore}점`);
    if(testScore >= 90) {
        alert("🎉 합격! 다음 DAY가 해금되었습니다.");
        if(unlockedDay === currentSelectedDay && unlockedDay < 30) unlockedDay++;
        saveProgress();
    } else { alert("아쉽네요! 90점 이상이어야 합격입니다."); }
    goHome();
}

function showReview() {
    switchView('#list-view'); document.getElementById('list-title').innerText = "오답 노트";
    const content = document.getElementById('list-content');
    content.innerHTML = mistakes.length === 0 ? "아직 틀린 단어가 없습니다." : "";
    mistakes.forEach(m => {
        content.innerHTML += `<div class="list-item"><button class="del-btn" onclick="deleteMistake('${m.w}')">삭제</button><div style="font-size:18px; color:#3b5bdb; font-weight:bold">${m.w} (${m.m})</div><div style="margin-top:8px;">${m.s}</div></div>`;
    });
}

function showVocaList(day) {
    switchView('#list-view'); document.getElementById('list-title').innerText = `DAY ${day} 단어장`;
    const content = document.getElementById('list-content'); content.innerHTML = "";
    [...dayData[day]].sort((a,b)=>a.w.localeCompare(b.w)).forEach(w => {
        content.innerHTML += `<div class="list-item"><div style="font-size:18px; color:#3b5bdb; font-weight:bold">${w.w}</div><div style="color:#fff;">뜻: ${w.m}</div></div>`;
    });
}

function deleteMistake(word) { mistakes = mistakes.filter(m => m.w !== word); saveProgress(); showReview(); }
function resetAllProgress() { if(confirm("초기화하시겠습니까?")) { localStorage.clear(); location.reload(); } }

window.addEventListener('keydown', (e) => {
    if (!document.getElementById('quiz').classList.contains('active-view')) return;
    if (isPaused && e.key !== ' ') return;
    if (['1','2','3','4'].includes(e.key)) {
        const idx = parseInt(e.key)-1;
        const opts = document.querySelectorAll('.option');
        if (opts[idx] && !opts[idx].disabled) opts[idx].click();
    }
    if (e.key === 'Enter' && document.getElementById('next-btn').style.display !== 'none') generateQuestion();
    if (e.key === ' ') { e.preventDefault(); togglePause(); }
});

updateHomeStats();