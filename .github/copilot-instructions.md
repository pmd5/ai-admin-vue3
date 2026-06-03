# OpenSpec Instructions

1. 本项目已部署本地CodeGraph代码知识图谱，所有代码结构、调用关系、路由绑定、依赖查询，必须调用VSCode CodeGraph扩展工具；
2. 禁止使用内置文件搜索、批量读文件工具，仅在找不到图谱数据时才手动读取单个文件；
3. 用户询问改代码风险，自动调用CodeGraph影响分析工具，列出受影响文件与方法。

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` and read it thoroughly when the request involves coding, planning, or explaining the project structure.
Always open `@/openspec/SPEC.md` when the request involves understanding project architecture, features, or workflows.

Also check `@/openspec/` for other planning or proposal documents if mentioned.
