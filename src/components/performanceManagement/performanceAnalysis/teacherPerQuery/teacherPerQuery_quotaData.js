const tableData = [

  //1.本科教学
  {
    classify:'1.本科教学',
    firstLevel:'1.1 教学资质',
    secondLevel:'教授',
    weight:'3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'副教授',
    weight:'2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'讲师',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论课授课资格',
    weight:'0.8',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'1.2教学工作量',
    secondLevel:'理论授课(常规)或者临床见习',
    weight:'1',
    score:'',
    remark:'按学时算',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'PBL/翻转课堂及其他新教学方法',
    weight:'0.5',
    score:'',
    remark:'按次时算',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'二级学科培养选修课授课',
    weight:'0.8',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试命题',
    weight:'0.6',
    score:'',
    remark:'按次数算',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试组卷',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试判卷',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试监考',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试试卷分析',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试讲评',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核命题',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核监考',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核分析',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'1.3教学质量评估',
    secondLevel:'学生评价',
    weight:'0.4',
    score:'',
    remark:'技能考核命题',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'督导评价',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教育处评价',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'2.实习带教',
    firstLevel:'2.1教学资质',
    secondLevel:'高年资住院(第三年)/主治医师以上',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'2.2教学工作量',
    secondLevel:'带教人数（每人每周）',
    weight:'1',
    score:'',
    remark:'<=3=1；>3=0.7',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学查房',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试试卷分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理技能考核监考',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'2.3评价',
    secondLevel:'学生评价',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'督导评价',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教育处评价',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'2.4日常管理',
    secondLevel:'考勤审核情况',
    weight:'0.1',
    score:'',
    remark:'按次数算',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批（符合响应时间）',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'评优',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'目标手册完成',
    weight:'0.15',
    score:'',
    remark:'',
  },
  {
    classify:'3.研究生培养',
    firstLevel:'3.1导师资格',
    secondLevel:'博导',
    weight:'3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'硕导',
    weight:'2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'3.2培养质量',
    secondLevel:'全国优博/硕',
    weight:'20',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'省级优博/硕',
    weight:'10',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'校级优博/硕',
    weight:'5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'SCI',
    weight:'1*影响因子',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'中华系列',
    weight:'1*影响因子',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'统计源或核心',
    weight:'0.8*篇数',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'论著除外',
    weight:'0.5*篇数',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'临床能力考核通过',
    weight:'1',
    score:'',
    remark:'四证合一',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生获国家级荣誉',
    weight:'3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生获省级荣誉',
    weight:'2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生获校级荣誉',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生获得课题情况',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'3.3教学工作',
    secondLevel:'选修课',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生开题',
    weight:'0.3*人数',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'中期考核',
    weight:'0.1*人数',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生答辩通过',
    weight:'0.5*人数',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核监考',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'3.4评估',
    secondLevel:'教研室评价',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'研究生评价',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教育处评价',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'3.5日常管理',
    secondLevel:'考勤',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'评优',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'目标手册完成',
    weight:'0.15',
    score:'',
    remark:'',
  },
  {
    classify:'4.住院医师（含临床型研究生）培训',
    firstLevel:'4.1教学资质',
    secondLevel:'核心教员/辅导员',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'4.2教学工作量',
    secondLevel:'带教人数',
    weight:'1',
    score:'',
    remark:'<=3=1；>3=0.7',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学查房',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试试卷分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核监考',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'4.3评估',
    secondLevel:'教研室评价',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'学员评价',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教育处评价',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'4.3日常管理',
    secondLevel:'考勤',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'评优',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'目标手册完成',
    weight:'0.15',
    score:'',
    remark:'',
  },
  //5.进修生培养
  {
    classify:'5.进修生培养',
    firstLevel:'5.1教学工作量',
    secondLevel:'带教人数',
    weight:'1',
    score:'',
    remark:'<=3=1；>3=0.7',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学查房',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight: '0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'0.5',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考试试卷分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核命题',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核监考',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能考核分析',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'5.2日常管理',
    secondLevel:'考勤',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'评优',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'目标手册完成',
    weight:'0.15',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'5.3评估',
    secondLevel:'教研室评价',
    weight:'0.3',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'学员评价',
    weight:'0.4',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教育处评价',
    weight:'0.3',
    score:'',
    remark:'',
  },
  //7.教学能力
  {
    classify:'7.教学能力',
    firstLevel:'7.1教学建设',
    secondLevel:'教材建设',
    weight:'2',
    score:'',
    remark:'主编1，副主编0.5，编委0.2；国家级、省部级及校级教材等级系数分别为3、2、1',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'课程建设',
    weight:'2',
    score:'',
    remark:'主要完成人1，第二完成人0.5，其他完成人0.3；校级、院级系数分别为2,1',
  },
  {
    classify:'',
    firstLevel:'7.2教学研究',
    secondLevel:'教学课题',
    weight:'1',
    score:'',
    remark:'主要完成人1，第二完成人0.5；省部级、校级、院级系数分别为2、1、0.5',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学论文',
    weight:'1',
    score:'',
    remark:'中文核心或统计源、一般期刊2、1',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学成果',
    weight:'3',
    score:'',
    remark:'主要完成人1，第二完成人0.5，其他完成人0.3；国家级、省部级、校级系数分别为3、2、1',
  },
  {
    classify:'',
    firstLevel:'7.3教育奖励',
    secondLevel:'教学竞赛',
    weight:'1',
    score:'',
    remark:'校级特等、一等、二等、三等分别3、2、1、0.5',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'指导学生参与竞赛',
    weight:'1',
    score:'',
    remark:'国家级、省级、校级3、2、1',
  },
  {
    classify:'',
    firstLevel:'7.4师资培养',
    secondLevel:'担任师资培养讲师',
    weight:'1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'7.5个人能力提升',
    secondLevel:'参加学术会议或培训',
    weight:'0.1',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'获得师资培训资格证书',
    weight:'0.2',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'出国研修三个月以上',
    weight:'0.8',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'国内外出进修（三个月以上）',
    weight:'0.5',
    score:'',
    remark:'',
  },
]
export  default tableData