// 命令处理工具

// 个人信息数据
const personalInfo = {
  name: '你的名字',
  title: '前端开发工程师',
  email: 'your.email@example.com',
  github: 'https://github.com/ipaler',
  linkedin: 'https://linkedin.com/in/ipaler',
  location: '中国，城市',
  bio: '热爱编程和创造的开发者，专注于前端技术和用户体验设计。'
};

// 技能数据
const skills = [
  { category: '前端', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'TypeScript'] },
  { category: '后端', items: ['Node.js', 'Express', 'Python', 'Java'] },
  { category: '工具', items: ['Git', 'Webpack', 'Docker', 'VS Code'] },
  { category: '设计', items: ['Figma', 'Adobe XD', 'UI/UX 设计'] }
];

// 项目数据
const projects = [
  {
    name: '项目一',
    description: '响应式电子商务网站，使用React和Node.js构建',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    name: '项目二',
    description: '基于Vue.js的任务管理应用',
    technologies: ['Vue.js', 'Vuex', 'Firebase'],
    link: 'https://github.com/yourusername/project2'
  },
  {
    name: '项目三',
    description: '使用Python和Django开发的博客平台',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project3'
  }
];

// 经验数据
const experiences = [
  {
    company: '公司A',
    position: '高级前端开发工程师',
    period: '2020 - 至今',
    description: '负责公司主要产品的前端架构设计和开发，优化用户体验和性能。'
  },
  {
    company: '公司B',
    position: '前端开发工程师',
    period: '2018 - 2020',
    description: '参与多个Web应用项目的开发，实现响应式设计和交互功能。'
  },
  {
    company: '公司C',
    position: '实习开发工程师',
    period: '2017 - 2018',
    description: '协助团队进行网站开发和维护，学习前端技术栈。'
  }
];

// 教育背景数据
const education = [
  {
    institution: '某大学',
    degree: '计算机科学学士',
    period: '2014 - 2018',
    description: '主修计算机科学，专注于Web开发和软件工程。'
  }
];

// 可用命令列表
const availableCommands = [
  { command: 'help', description: '显示可用命令列表' },
  { command: 'about', description: '显示关于我的信息' },
  { command: 'skills', description: '显示我的技能' },
  { command: 'projects', description: '显示我的项目' },
  { command: 'experience', description: '显示我的工作经验' },
  { command: 'education', description: '显示我的教育背景' },
  { command: 'contact', description: '显示联系方式' },
  { command: 'clear', description: '清除屏幕' },
  { command: 'echo [text]', description: '显示文本' },
  { command: 'date', description: '显示当前日期和时间' },
  { command: 'whoami', description: '显示当前用户' },
  { command: 'ls', description: '列出目录内容' },
  { command: 'cat [file]', description: '显示文件内容' }
];

// 文件系统模拟
const fileSystem = {
  'about.txt': `名字: ${personalInfo.name}\n职位: ${personalInfo.title}\n\n${personalInfo.bio}`,
  'contact.txt': `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\n位置: ${personalInfo.location}`,
  'readme.md': '# 欢迎来到我的个人主页\n\n这是一个使用React构建的交互式终端界面。\n输入 `help` 查看可用命令。'
};

// 命令处理函数
export const executeCommand = (input) => {
  const args = input.split(' ');
  const command = args[0].toLowerCase();
  
  // 如果命令为空，返回空字符串
  if (!command) {
    return { content: '', color: '#f8f8f2' };
  }
  
  // 根据命令执行相应的操作
  switch (command) {
    case 'help':
      return {
        content: `可用命令:\n\n${availableCommands.map(cmd => `  ${cmd.command.padEnd(20)} - ${cmd.description}`).join('\n')}`,
        color: '#8be9fd'
      };
      
    case 'about':
      return {
        content: `${personalInfo.name} - ${personalInfo.title}\n\n${personalInfo.bio}`,
        color: '#50fa7b'
      };
      
    case 'skills':
      return {
        content: skills.map(category => {
          return `${category.category}:\n  ${category.items.join(', ')}`;
        }).join('\n\n'),
        color: '#ffb86c'
      };
      
    case 'projects':
      return {
        content: projects.map(project => {
          return `${project.name}\n  ${project.description}\n  技术栈: ${project.technologies.join(', ')}\n  链接: ${project.link}`;
        }).join('\n\n'),
        color: '#ff79c6'
      };
      
    case 'experience':
      return {
        content: experiences.map(exp => {
          return `${exp.position} @ ${exp.company}\n  ${exp.period}\n  ${exp.description}`;
        }).join('\n\n'),
        color: '#bd93f9'
      };
      
    case 'education':
      return {
        content: education.map(edu => {
          return `${edu.degree} - ${edu.institution}\n  ${edu.period}\n  ${edu.description}`;
        }).join('\n\n'),
        color: '#f1fa8c'
      };
      
    case 'contact':
      return {
        content: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\n位置: ${personalInfo.location}`,
        color: '#8be9fd'
      };
      
    case 'clear':
      // 清除命令在Terminal组件中处理
      return { content: 'CLEAR_TERMINAL', color: '#f8f8f2' };
      
    case 'echo':
      return {
        content: args.slice(1).join(' ') || '',
        color: '#f8f8f2'
      };
      
    case 'date':
      return {
        content: new Date().toString(),
        color: '#f1fa8c'
      };
      
    case 'whoami':
      return {
        content: 'visitor',
        color: '#50fa7b'
      };
      
    case 'ls':
      return {
        content: Object.keys(fileSystem).join('  '),
        color: '#f1fa8c'
      };
      
    case 'cat':
      const fileName = args[1];
      if (!fileName) {
        return {
          content: '错误: 请指定文件名',
          color: '#ff5555'
        };
      }
      
      if (fileSystem[fileName]) {
        return {
          content: fileSystem[fileName],
          color: '#f8f8f2'
        };
      } else {
        return {
          content: `错误: 文件 '${fileName}' 不存在`,
          color: '#ff5555'
        };
      }
      
    default:
      return {
        content: `命令未找到: ${command}\n输入 'help' 查看可用命令。`,
        color: '#ff5555'
      };
  }
};