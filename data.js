/* ============================================================
   [data.js] 
   - 이 파일은 우리 웹사이트의 '내용물(데이터)'을 담고 있습니다.
   - index.html 파일에서 이 데이터를 읽어서 화면에 보여줍니다.
   - ⚠️ 주의: 대괄호 [ ] 나 중괄호 { } 를 하나라도 지우면 오류가 날 수 있어요!
   ============================================================ */

const companies = [

  /* ----------- [예시 기업 1] ----------- */
  {
    id: 1,
    companyName: "퍼플테크",
    logo: "./images/company1.png",
    attachment: "./files/company1.pdf",
    homepage: "https://www.purpletech.com",
    employmentType: "정규직",
    location: "서울 강남구",

    // 🆕 필터용 태그 (index.html 하단 filterOptions의 'value'와 똑같이 적어야 작동해요)
    tags: ["프론트엔드", "정규직", "서울"],

    position: {
      title: "프론트엔드 개발자",
      team: "Product Engineering팀",
      headcount: "2명",
      requirements: "React 3년 이상 실무 경험",
      workplace: "서울 강남구 본사 (하이브리드)",
      startDate: "2026년 6월 (협의 가능)"
    },

    details: {
      about: {
        problem: "B2B SaaS 시장의 복잡한 데이터 시각화 문제를 해결합니다.",
        history: "2020년 창업, 시리즈 B 투자 유치, 연 매출 200% 성장 중.",
        vision: "모든 기업이 데이터로 의사결정하는 세상을 만듭니다."
      },
      responsibilities: [
        "React 기반 대시보드 제품의 신규 기능 개발",
        "디자인 시스템 구축 및 컴포넌트 고도화",
        "성능 최적화 및 사용자 경험 개선"
      ],
      qualifications: {
        must: [
          "React/TypeScript 3년 이상 실무 경험",
          "웹 표준과 접근성에 대한 이해",
          "Git을 활용한 협업 경험"
        ],
        personality: "문제 정의를 즐기고, 동료와 적극적으로 소통하는 분"
      },
      growth: [
        "초기 제품 설계 단계부터 참여하는 오너십",
        "글로벌 Top 티어 개발자들과의 1:1 멘토링",
        "월 1회 사내 기술 컨퍼런스 참여"
      ],
      benefits: [
        "업계 상위 10% 수준의 연봉 + 스톡옵션",
        "자율 출퇴근 및 주 2회 재택근무",
        "최신 장비 지원 (맥북 프로 M3, 모니터 2대)",
        "도서/교육비 무제한 지원"
      ],
      process: [
        "서류 전형",
        "1차 기술 인터뷰 (60분)",
        "2차 문화 적합성 인터뷰 (60분)",
        "처우 협의 및 최종 합격"
      ]
    }
  },

  /* ----------- [예시 기업 2] ----------- */
  {
    id: 2,
    companyName: "바이올렛AI",
    logo: "./images/company2.png",
    attachment: "./files/company2.pdf",
    homepage: "https://www.violet-ai.io",
    employmentType: "인턴, 정규직",
    location: "서울 성수동",

    tags: ["머신러닝 엔지니어", "인턴", "정규직", "서울"],

    position: {
      title: "머신러닝 엔지니어",
      team: "AI Research팀",
      headcount: "3명",
      requirements: "Python, PyTorch 실무 또는 프로젝트 경험",
      workplace: "서울 성수동 본사 (전면 출근)",
      startDate: "2026년 5월 입사 희망"
    },

    details: {
      about: {
        problem: "국내 중소기업이 AI 기술에 쉽게 접근하지 못하는 진입장벽을 낮춥니다.",
        history: "2022년 설립, 30명 규모, 누적 투자 80억 원 유치.",
        vision: "AI를 누구나 쓸 수 있는 전기처럼 만드는 것"
      },
      responsibilities: [
        "자체 LLM 파인튜닝 및 최적화",
        "추천 시스템 모델 설계 및 배포",
        "A/B 테스트를 통한 모델 성능 실험"
      ],
      qualifications: {
        must: [
          "Python, PyTorch 혹은 TensorFlow 사용 경험",
          "머신러닝 기초 이론에 대한 확실한 이해",
          "영어 논문 리딩 가능"
        ],
        personality: "호기심이 많고 빠르게 학습하는 분, 실험 정신이 강한 분"
      },
      growth: [
        "최신 논문을 실제 제품에 적용하는 빠른 실험 사이클",
        "NeurIPS, ICML 등 해외 컨퍼런스 참가 지원",
        "Kaggle 챌린지 사내 팀 구성 지원"
      ],
      benefits: [
        "경쟁력 있는 연봉 + 성과급",
        "GPU 클러스터 무제한 사용",
        "점심/저녁 식대 지원",
        "연 1회 해외 워케이션"
      ],
      process: [
        "서류 전형",
        "코딩 및 ML 과제 전형",
        "기술 인터뷰",
        "대표 인터뷰 및 최종 합격"
      ]
    }
  },

  /* ----------- [예시 기업 3] ----------- */
  {
    id: 3,
    companyName: "그린그로스",
    logo: "./images/company3.png",
    attachment: "./files/company3.pdf",
    homepage: "https://www.greengrowth.co",
    employmentType: "정규직",
    location: "원격 근무",

    tags: ["마케터", "정규직", "경상", "원격 근무"],

    position: {
      title: "퍼포먼스 마케터",
      team: "Growth팀",
      headcount: "1명",
      requirements: "퍼포먼스 광고 2년 이상 경험",
      workplace: "전면 재택 (월 1회 오프라인 미팅)",
      startDate: "2026년 5월 중 입사"
    },

    details: {
      about: {
        problem: "친환경 소비자와 브랜드를 연결하는 D2C 커머스 플랫폼입니다.",
        history: "2021년 시작, MAU 50만 달성, 시리즈 A 투자 유치.",
        vision: "지속 가능한 소비가 당연해지는 세상"
      },
      responsibilities: [
        "Google/Meta 광고 운영 및 최적화",
        "CAC/LTV 분석 기반 캠페인 전략 수립",
        "랜딩 페이지 A/B 테스트"
      ],
      qualifications: {
        must: [
          "퍼포먼스 마케팅 2년 이상",
          "GA4, Looker Studio 활용 경험",
          "데이터 기반 의사결정 경험"
        ],
        personality: "숫자를 사랑하고 가설 검증을 즐기는 분"
      },
      growth: [
        "월 억 단위 광고 예산 운영 경험",
        "그로스 해킹 실험 자유도 100%",
        "C-Level과 직접 소통하는 수평적 구조"
      ],
      benefits: [
        "전면 재택 근무",
        "연 200만 원 자기계발비",
        "애플 장비 지원",
        "반기별 성과급"
      ],
      process: [
        "서류 전형",
        "포트폴리오 리뷰",
        "실무 인터뷰",
        "최종 합격"
      ]
    }
  },

  /* ----------- [예시 기업 4] ----------- */
  {
    id: 4,
    companyName: "노바디자인랩",
    logo: "./images/company4.png",
    attachment: "./files/company4.pdf",
    homepage: "https://www.novadesign.kr",
    employmentType: "인턴",
    location: "서울 홍대",

    tags: ["디자이너", "인턴", "서울"],

    position: {
      title: "프로덕트 디자이너 (인턴)",
      team: "Design팀",
      headcount: "2명",
      requirements: "Figma 사용 경험, 포트폴리오 필수",
      workplace: "서울 홍대 본사",
      startDate: "2026년 5월 초"
    },

    details: {
      about: {
        problem: "소상공인을 위한 모바일 브랜딩 툴을 만듭니다.",
        history: "2023년 창업, 시드 투자 15억 원 유치.",
        vision: "누구나 전문가 수준의 디자인을 5분 만에"
      },
      responsibilities: [
        "앱 UI/UX 디자인 보조",
        "디자인 시스템 구축 참여",
        "사용자 리서치 및 인터뷰 지원"
      ],
      qualifications: {
        must: [
          "Figma 기본 활용 가능",
          "디자인 포트폴리오 보유",
          "모바일 UX에 대한 관심"
        ],
        personality: "꼼꼼하고 디테일을 사랑하는 분"
      },
      growth: [
        "시니어 디자이너의 1:1 피드백",
        "실제 라이브 서비스 반영 경험",
        "인턴 우수자 정규직 전환 기회"
      ],
      benefits: [
        "인턴 급여 월 250만 원",
        "점심 식대 지원",
        "Figma 유료 계정 제공",
        "정규직 전환 시 스톡옵션"
      ],
      process: [
        "서류 및 포트폴리오 제출",
        "과제 전형",
        "디자인 인터뷰",
        "최종 합격"
      ]
    }
  },

  /* ----------- 여기에 계속 추가하세요 (최대 80개) ----------- */
  
];
