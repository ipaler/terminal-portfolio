# 贡献指南

感谢您考虑为终端风格个人主页项目做出贡献！以下是一些指导方针，帮助您参与项目开发。

## 如何贡献

1. **报告Bug**
   - 使用GitHub Issues报告Bug
   - 清晰描述问题，包括复现步骤
   - 如果可能，提供截图或错误日志

2. **提出新功能**
   - 在实现之前，先通过Issue讨论新功能
   - 说明新功能的用例和好处

3. **提交代码**
   - Fork仓库并创建您的分支
   - 遵循现有的代码风格和命名约定
   - 为您的更改编写测试（如果适用）
   - 确保所有测试通过
   - 提交有意义的提交消息

## 开发流程

1. Fork项目仓库
2. 克隆您的Fork到本地
   ```bash
   git clone https://github.com/ipaler/terminal-portfolio.git
   ```
3. 创建一个新分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. 进行更改并提交
   ```bash
   git add .
   git commit -m "Add some feature"
   ```
5. 推送到您的Fork
   ```bash
   git push origin feature/your-feature-name
   ```
6. 创建Pull Request

## 代码风格指南

- 使用2个空格进行缩进
- 使用有意义的变量和函数名
- 为函数和复杂逻辑添加注释
- 遵循React和ES6+最佳实践

## 提交消息指南

提交消息应该清晰描述更改内容。建议使用以下格式：

```
类型(范围): 简短描述

详细描述（如果需要）
```

类型可以是：
- feat: 新功能
- fix: Bug修复
- docs: 文档更改
- style: 不影响代码含义的更改（空格、格式等）
- refactor: 既不修复Bug也不添加功能的代码更改
- perf: 提高性能的代码更改
- test: 添加或修正测试
- chore: 对构建过程或辅助工具的更改

## Pull Request流程

1. 确保您的PR针对`main`分支
2. 包含对更改的清晰描述
3. 如果适用，链接到相关Issue
4. 确保CI测试通过
5. 等待代码审查

## 许可证

通过贡献您的代码，您同意您的贡献将根据项目的[MIT许可证](LICENSE)进行许可。