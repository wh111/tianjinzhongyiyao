const tableData = [

  //1.本科教学
  {
    classify:'1.本科教学',
    firstLevel:'1.1师资情况',
    secondLevel:'教授及副教授',
    weight:'',
    score:'',
    remark:'副高职称以上教师承担本科理论课时数的90%以上，其中有教学职称人员占50%.',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'见习带教',
    weight:'',
    score:'',
    remark:'见习带教老师具有主治医师以上资格10分；',
  },
  {
    classify:'',
    firstLevel:'1.2教学工作量',
    secondLevel:'教学课表',
    weight:'',
    score:'',
    remark:'开学前一周交齐教学方案，教学方案符合要求，未达标准者该项分值为0',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'集体备课',
    weight:'',
    score:'',
    remark:'有备课记录，未达标准者该项分值为0',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学秩序',
    weight:'',
    score:'',
    remark:'按规定要求办理停课、调课、代课，未按规定办理视为教学事故；出现一次教学事故扣??分',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'理论考核',
    weight:'',
    score:'',
    remark:'命题试卷在教学任务发布后按时提交，未按照要求提交得0分。',
  },
  {
    classify:'',
    firstLevel:'1.3教学质量评估',
    secondLevel:'课堂教学效果评估结果',
    weight:'',
    score:'',
    remark:'评估优比例大于等于90%，每降5个百分点扣5分',
  },
  {
    classify:'2.实习带教',
    firstLevel:'2.1师资情况',
    secondLevel:'实习带教',
    weight:'',
    score:'',
    remark:'实习带教负责人具有高年资住院以上资格得10分',
  },
  {
    classify:'',
    firstLevel:'2.2教学工作量',
    secondLevel:'教学查房',
    weight:'',
    score:'',
    remark:'实习期间教学查房每月大于1次，要完整查房记录',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'',
    score:'',
    remark:'每个月不少于4次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'',
    score:'',
    remark:'每个月不少于？',
  },
  {
    classify:'',
    firstLevel:'2.3教学质量评估',
    secondLevel:'教学效果评估结果',
    weight:'',
    score:'',
    remark:'评估优比例大于等于90%，每降5个百分点扣5分',
  },
  {
    classify:'2.3教学质量评估',
    firstLevel:'考勤审核情况',
    secondLevel:'',
    weight:'',
    score:'',
    remark:'考勤记录全部审核',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批（符合响应时间）',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'组织评优',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'3.研究生培养',
    firstLevel:'3.1导师资格',
    secondLevel:'硕导',
    weight:'',
    score:'',
    remark:'占副高级职称人数的50%，每提高10%增加？？',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'博导',
    weight:'',
    score:'',
    remark:'大于等于1个，没多一个加？分',
  },
  {
    classify:'',
    firstLevel:'3.2培养规模',
    secondLevel:'硕士研究生毕业人数',
    weight:'',
    score:'',
    remark:'按期毕业90%以上给？？，80%以上给？？。。',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'博士研究生毕业人数',
    weight:'',
    score:'',
    remark:'按期毕业70%以上给？？，60%以上给？？。。',
  },
  {
    classify:'',
    firstLevel:'3.3培养质量',
    secondLevel:'硕士生发表论文情况',
    weight:'',
    score:'',
    remark:'硕士生人均发表论文数',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'博士生发表论文情况',
    weight:'',
    score:'',
    remark:'博士生人均发表论文数',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'学生获奖情况',
    weight:'',
    score:'',
    remark:'根据获奖情况，每多一个加？？分',
  },
  {
    classify:'',
    firstLevel:'3.4日常工作',
    secondLevel:'按要求组织面试、开题、预答辩、答辩',
    weight:'',
    score:'',
    remark:'按照要求开展工作得分',
  },
  {
    classify:'',
    firstLevel:'3.5教学质量评估',
    secondLevel:'教学效果评估结果',
    weight:'',
    score:'',
    remark:'评估优比例大于等于90%，每降5个百分点扣5分',
  },
  {
    classify:'4.住院医师培训',
    firstLevel:'4.1教学资质',
    secondLevel:'基地级别',
    weight:'',
    score:'',
    remark:'国内认证的住院医师培训基地10分，专科医师培训基地10分',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教室资质',
    weight:'',
    score:'',
    remark:'带教负责人具有高年资住院以上资格10分',
  },
  {
    classify:'',
    firstLevel:'4.2培训规模',
    secondLevel:'接收外院培训人数',
    weight:'',
    score:'',
    remark:'每年大于等于人（大内科大于等于10人，大外科大于等于6人，医学影像科大于等于6人），未达标准者该项分值为0',
  },
  {
    classify:'',
    firstLevel:'4.3培训质量',
    secondLevel:'工作量完成情况',
    weight:'',
    score:'',
    remark:'完成病种及例数达到90%的学生的百分比，比例递增给分',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'出科考核情况',
    weight:'',
    score:'',
    remark:'出科考核通过人数所占百分比',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'年度考核情况',
    weight:'',
    score:'',
    remark:'协助教育处完成年度考核，未达标准者该项分值为0',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'二阶段通过率',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'4.4教学工作量',
    secondLevel:'教学查房',
    weight:'',
    score:'',
    remark:'教学查房每月大于1次，要完整查房记录',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'',
    score:'',
    remark:'每个月不少于4次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'',
    score:'',
    remark:'每个月不少于？',
  },
  {
    classify:'',
    firstLevel:'4.5教学质量评估',
    secondLevel:'教学效果评估结果',
    weight:'',
    score:'',
    remark:'评估优比例大于等于90%，每降5个百分点扣5分',
  },
  {
    classify:'',
    firstLevel:'4.6日常管理',
    secondLevel:'考勤审核情况',
    weight:'',
    score:'',
    remark:'考勤记录全部审核',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批（符合响应时间）',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'组织评优',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'5.进修生',
    firstLevel:'5.1师资情况',
    secondLevel:'教室资质',
    weight:'',
    score:'',
    remark:'带教负责人具有高年资住院以上资格10分',
  },
  {
    classify:'',
    firstLevel:'5.2进修生规模',
    secondLevel:'接收进修人数',
    weight:'',
    score:'',
    remark:'接受三甲医院',
  },
  {
    classify:'',
    firstLevel:'5.3教学工作量',
    secondLevel:'工作量完成情况',
    weight:'',
    score:'',
    remark:'完成病种及例数达到90%的学生的百分比，比例递增给分',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学查房',
    weight:'',
    score:'',
    remark:'实习期间教学查房每月大于1次，要完整查房记录',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'小讲座',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'病例讨论',
    weight:'',
    score:'',
    remark:'每个月不少于2次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'技能培训',
    weight:'',
    score:'',
    remark:'每个月不少于4次',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'选修课',
    weight:'',
    score:'',
    remark:'每个月不少于？',
  },
  {
    classify:'',
    firstLevel:'5.4教学质量评估',
    secondLevel:'教学效果评估结果',
    weight:'',
    score:'',
    remark:'评估优比例大于等于90%，每降5个百分点扣5分',
  },
  {
    classify:'',
    firstLevel:'5.5日常管理',
    secondLevel:'考勤审核情况',
    weight:'',
    score:'',
    remark:'考勤记录全部审核',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'审批（符合响应时间）',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'组织评优',
    weight:'',
    score:'',
    remark:'',
  },
  {
    classify:'6.教学能力',
    firstLevel:'6.1教学改革活动',
    secondLevel:'教改活动',
    weight:'',
    score:'',
    remark:'采用PBL/翻转课堂及其他新教学方法1项得5分',
  },
  {
    classify:'',
    firstLevel:'6.2教学建设',
    secondLevel:'教材建设',
    weight:'',
    score:'',
    remark:'主编1，副主编0.5，编委0.2；国家级、省部级及校级教材等级系数分别为3、2、1',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'课程建设',
    weight:'',
    score:'',
    remark:'主要完成人1，第二完成人0.5，其他完成人0.3；校级、院级系数分别为2,1',
  },
  {
    classify:'',
    firstLevel:'6.3教学研究',
    secondLevel:'教学课题',
    weight:'',
    score:'',
    remark:'主要完成人1，第二完成人0.5；省部级、校级、院级系数分别为2、1、0.5',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学论文',
    weight:'',
    score:'',
    remark:'中文核心或统计源、一般期刊2、1',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'教学成果',
    weight:'',
    score:'',
    remark:'主要完成人1，第二完成人0.5，其他完成人0.3；国家级、省部级、校级系数分别为3、2、1',
  },
  {
    classify:'',
    firstLevel:'6.4教育奖励',
    secondLevel:'教学竞赛',
    weight:'',
    score:'',
    remark:'校级特等、一等、二等、三等分别3、2、1、0.5',
  },
  {
    classify:'',
    firstLevel:'',
    secondLevel:'指导学生参与竞赛',
    weight:'',
    score:'',
    remark:'国家级、省级、校级3、2、1',
  },
  {
    classify:'',
    firstLevel:'6.5师资培养',
    secondLevel:'新增',
    weight:'',
    score:'',
    remark:'开展师资培训工作，新增博导，硕导，教授，副教授，讲师，获得培训资格证书，',
  },
  {
    classify:'',
    firstLevel:'6.7教学态度',
    secondLevel:'核心领导小组会议',
    weight:'',
    score:'',
    remark:'要求每半年至少1次，教学内容记录详细，未达标准者该项分值为0',
  },
  {
    classify:'',
    firstLevel:'6.8教学档案',
    secondLevel:'查阅教学档案',
    weight:'',
    score:'',
    remark:'教学相关文件资料保存齐全',
  },


]
export  default tableData
